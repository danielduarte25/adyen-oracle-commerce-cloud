import ccConstants from 'ccConstants'
import AdyenCheckout from '@adyen/adyen-web'
import '@adyen/adyen-web/dist/adyen.css'
import { store } from '../components'
import * as constants from '../constants'
import { eventEmitter } from './index'
import { redirectAuth, getOrderPayload } from '../utils'

export const getDefaultConfig = (type) => {
    const cart = store.get(constants.cart)
    const { amount, currencyCode } = cart()
    const environment = store.get(constants.environment)
    const countryCode = store.get(constants.countryCode)
    const clientKey = store.get(constants.clientKey)
    const paymentMethodsResponse = store.get(constants.paymentMethodsResponse)

    return {
        amount: {
            value: amount() * 100,
            currency: currencyCode(),
        },
        countryCode,
        showPayButton: true,
        environment: environment.toLowerCase(),
        clientKey,
        paymentMethodsResponse,
        onAdditionalDetails: (state, component) => {
            console.log('on additional details')
            const payment = { type: 'generic', customProperties: state.data }
            eventEmitter.order.emit('recreateOrder', payment)
        },
    }
}

export const createFromAction = ({ action, selector, checkoutComponent }) => {
    checkoutComponent.createFromAction(action).mount(selector)
}

class Checkout {
    constructor(type) {
        this.type = type
    }

    getCheckout = () => {
        const checkout = store.get(constants.checkoutComponent)
        if (checkout) {
            return checkout
        }

        // eslint-disable-next-line no-undef
        const newCheckout = new AdyenCheckout(getDefaultConfig(this.type))
        eventEmitter.store.emit(constants.checkoutComponent, newCheckout)
        return newCheckout
    }

    createCheckout = ({ configuration, selector, type, options = {} }, cb) => {
        const checkout = this.getCheckout()
        try {
            checkout.create(type, { ...options, ...configuration }).mount(selector)
            cb && cb(checkout)
        } catch (e) {
            console.warn(`Payment method not supported: ${type}`)
        }
    }

    onSubmit = (onChange) => (state, component) => {
        onChange && onChange(state, component)
        const loader = document.querySelector(`.loader-wrapper`)
        loader && loader.classList.toggle('hide', false)

        const order = store.get(constants.order)
        eventEmitter.payment.emit(constants.setPayment, this.type)

        order().op(ccConstants.ORDER_OP_INITIATE)
        order().handlePlaceOrder()
    }

    onChange = (options) => (state, component) => {
        const paymentDetails = store.get(constants.paymentDetails)
        const isValid = component.isValid && typeof state.data === 'object'
        eventEmitter.store.emit(constants.isValid, isValid)

        const payload = { ...paymentDetails, [this.type]: { ...state.data, ...options } }

        eventEmitter.store.emit(constants.paymentDetails, payload)
    }
}

export default Checkout
