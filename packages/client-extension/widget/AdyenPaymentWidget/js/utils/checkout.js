import ccConstants from 'ccConstants'
import AdyenCheckout from '@adyen/adyen-web'
import '@adyen/adyen-web/dist/adyen.css'
import { store } from '../components'
import * as constants from '../constants'
import { eventEmitter } from './index'

export const getDefaultConfig = () => {
    const environment = store.get(constants.environment)
    const locale = store.get(constants.locale)
    const clientKey = store.get(constants.clientKey)
    const paymentMethodsResponse = store.get(constants.paymentMethodsResponse)

    return {
        showPayButton: true,
        locale,
        environment: environment.toLowerCase(),
        clientKey,
        paymentMethodsResponse,
    }
}

export const createFromAction = ({ action, selector, checkoutComponent }) => {
    checkoutComponent.createFromAction(action).mount(selector)
}

class Checkout {
    constructor(type) {
        this.type = type
    }

    createCheckout = ({ configuration, selector, type, options = {} }, cb) => {
        const defaultConfiguration = getDefaultConfig()
        const checkout = new AdyenCheckout({
            ...defaultConfiguration,
            ...configuration,
        })
        checkout.create(type, options).mount(selector)
        cb(checkout)
    }

    onSubmit = (/* options */) => (/*state, component */) => {
        const order = store.get(constants.order)
        eventEmitter.payment.emit(constants.setPayment, this.type)

        order().id(null)
        order().op(ccConstants.ORDER_OP_INITIATE)
        order().handlePlaceOrder()
    }

    onChange = options => (state, component) => {
        const paymentDetails = store.get(constants.paymentDetails)
        const isValid = component.isValid && typeof state.data === 'object'
        eventEmitter.store.emit(constants.isValid, isValid)

        const payload = {
            ...paymentDetails,
            [this.type]: { ...state.data, ...options },
        }

        eventEmitter.store.emit(constants.paymentDetails, payload)
    }
}

export default Checkout
