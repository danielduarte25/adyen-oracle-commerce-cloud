export default {
    groups: [
        {
            name: 'Credit Card',
            types: [
                'amex',
                'bcmc',
                'cartebancaire',
                'cup',
                'diners',
                'discover',
                'elo',
                'hiper',
                'hipercard',
                'jcb',
                'laser',
                'maestro',
                'mc',
                'visa',
                'visadankort',
            ],
        },
        { name: 'WeChatPay', types: ['wechatpayQR', 'wechatpayWeb'] },
    ],
    paymentMethods: [
        {
            brands: [
                'amex',
                'bcmc',
                'cartebancaire',
                'cup',
                'diners',
                'discover',
                'elo',
                'hiper',
                'hipercard',
                'jcb',
                'laser',
                'maestro',
                'mc',
                'visa',
                'visadankort',
            ],
            details: [
                { key: 'number', type: 'text' },
                { key: 'expiryMonth', type: 'text' },
                { key: 'expiryYear', type: 'text' },
                { key: 'cvc', type: 'text' },
                { key: 'holderName', optional: true, type: 'text' },
            ],
            name: 'Credit Card',
            type: 'scheme',
        },
        {
            details: [
                { key: 'number', type: 'text' },
                { key: 'expiryMonth', type: 'text' },
                { key: 'expiryYear', type: 'text' },
                { key: 'holderName', optional: true, type: 'text' },
            ],
            name: 'Bancontact card',
            supportsRecurring: true,
            type: 'bcmc',
        },
        { name: 'Boleto', supportsRecurring: true, type: 'boleto' },
        { name: 'Boleto Bancario', supportsRecurring: true, type: 'boletobancario' },
        {
            details: [
                { key: 'number', type: 'text' },
                { key: 'expiryMonth', type: 'text' },
                { key: 'expiryYear', type: 'text' },
                { key: 'cvc', type: 'text' },
                { key: 'holderName', optional: true, type: 'text' },
                { key: 'telephoneNumber', optional: true, type: 'text' },
            ],
            name: 'ExpressPay',
            supportsRecurring: true,
            type: 'cup',
        },
        { name: 'Online bank transfer.', supportsRecurring: true, type: 'directEbanking' },
        {
            details: [
                { key: 'shopperEmail', type: 'emailAddress' },
                { key: 'firstName', type: 'text' },
                { key: 'lastName', type: 'text' },
                { key: 'infix', optional: true, type: 'text' },
            ],
            name: 'DOKU wallet',
            supportsRecurring: false,
            type: 'doku_wallet',
        },
        {
            details: [
                {
                    items: [
                        { id: '92', name: 'Bank Spółdzielczy w Brodnicy' },
                        { id: '11', name: 'Bank transfer / postal' },
                        { id: '74', name: 'Banki Spółdzielcze' },
                        { id: '73', name: 'BLIK' },
                        { id: '90', name: 'BNP Paribas - płacę z Pl@net' },
                        { id: '59', name: 'CinkciarzPAY' },
                        { id: '87', name: 'Credit Agricole PBL' },
                        { id: '83', name: 'EnveloBank' },
                        { id: '76', name: 'Getin Bank PBL' },
                        { id: '81', name: 'Idea Cloud' },
                        { id: '7', name: 'ING Corporate customers' },
                        { id: '35', name: 'Kantor Polski' },
                        { id: '93', name: 'Kasa Stefczyka' },
                        { id: '44', name: 'Millennium - Płatności Internetowe' },
                        { id: '10', name: 'Millennium Corporate customers' },
                        { id: '24', name: 'mPay' },
                        { id: '68', name: 'mRaty' },
                        { id: '1', name: 'mTransfer' },
                        { id: '91', name: 'Nest Bank' },
                        { id: '80', name: 'Noble Pay' },
                        { id: '50', name: 'Pay Way Toyota Bank' },
                        { id: '45', name: 'Pay with Alior Bank' },
                        { id: '65', name: 'Paylink Idea Bank' },
                        { id: '36', name: 'Pekao24Przelew' },
                        { id: '70', name: 'Pocztowy24' },
                        { id: '6', name: 'Przelew24' },
                        { id: '46', name: 'Płacę z Citi Handlowy' },
                        { id: '38', name: 'Płacę z ING' },
                        { id: '2', name: 'Płacę z Inteligo' },
                        { id: '4', name: 'Płacę z iPKO' },
                        { id: '66', name: 'Płacę z PBS' },
                        { id: '75', name: 'Płacę z Plus Bank' },
                        { id: '51', name: 'Płać z BOŚ' },
                        { id: '55', name: 'Raty z Alior Bankiem PLN' },
                        { id: '89', name: 'Santander' },
                        { id: '52', name: 'SkyCash' },
                        { id: '60', name: 'T-Mobile usługi bankowe' },
                        { id: '21', name: 'VIA - Moje Rachunki' },
                        { id: '84', name: 'Volkswagen Bank direct' },
                    ],
                    key: 'issuer',
                    type: 'select',
                },
            ],
            name: 'Local Polish Payment Methods',
            supportsRecurring: true,
            type: 'dotpay',
        },
        {
            details: [{ key: 'shopperEmail', type: 'emailAddress' }],
            name: 'GCash',
            supportsRecurring: true,
            type: 'dragonpay_gcash',
        },
        {
            details: [
                {
                    items: [
                        { id: '231', name: 'POP Pankki' },
                        { id: '551', name: 'Komerční banka' },
                        { id: '232', name: 'Aktia' },
                        { id: '552', name: 'Raiffeisen' },
                        { id: '233', name: 'Säästöpankki' },
                        { id: '750', name: 'Swedbank' },
                        { id: '211', name: 'Nordea' },
                        { id: '553', name: 'ČSOB' },
                        { id: '234', name: 'S-Pankki' },
                        { id: '751', name: 'SEB' },
                        { id: '554', name: 'Moneta' },
                        { id: '235', name: 'OmaSP' },
                        { id: '752', name: 'Nordea' },
                        { id: '213', name: 'Op-Pohjola' },
                        { id: '555', name: 'UniCredit' },
                        { id: '753', name: 'LHV' },
                        { id: '556', name: 'Fio' },
                        { id: '557', name: 'mBank' },
                        { id: '216', name: 'Handelsbanken' },
                        { id: '558', name: 'Air Bank' },
                        { id: '260', name: 'Länsförsäkringar' },
                        { id: '240', name: 'BankDeposit' },
                        { id: '265', name: 'Sparbanken' },
                        { id: '640', name: 'BankDeposit' },
                        { id: '200', name: 'Ålandsbanken' },
                        { id: '940', name: 'Swedbank' },
                        { id: '500', name: 'Česká spořitelna' },
                        { id: '720', name: 'Swedbank' },
                        { id: '941', name: 'SEB' },
                        { id: '204', name: 'Danske Bank' },
                        { id: '721', name: 'SEB' },
                        { id: '942', name: 'Citadele' },
                        { id: '205', name: 'Handelsbanken' },
                        { id: '722', name: 'DNB' },
                        { id: '943', name: 'DNB' },
                        { id: '206', name: 'Nordea' },
                        { id: '723', name: 'Šiaulių bankas' },
                        { id: '207', name: 'SEB' },
                        { id: '724', name: 'Nordea' },
                        { id: '505', name: 'Komerční banka' },
                        { id: '208', name: 'Skandiabanken' },
                        { id: '209', name: 'Swedbank' },
                    ],
                    key: 'issuer',
                    type: 'select',
                },
            ],
            name: 'Bank Payment',
            supportsRecurring: true,
            type: 'entercash',
        },
        {
            details: [
                {
                    items: [
                        { id: 'd5d5b133-1c0d-4c08-b2be-3c9b116dc326', name: 'Dolomitenbank' },
                        { id: 'ee9fc487-ebe0-486c-8101-17dce5141a67', name: 'Raiffeissen Bankengruppe' },
                        { id: '6765e225-a0dc-4481-9666-e26303d4f221', name: 'Hypo Tirol Bank AG' },
                        { id: '8b0bfeea-fbb0-4337-b3a1-0e25c0f060fc', name: 'Sparda Bank Wien' },
                        { id: '1190c4d1-b37a-487e-9355-e0a067f54a9f', name: 'Schoellerbank AG' },
                        { id: 'e2e97aaa-de4c-4e18-9431-d99790773433', name: 'Volksbank Gruppe' },
                        { id: 'bb7d223a-17d5-48af-a6ef-8a2bf5a4e5d9', name: 'Immo-Bank' },
                        { id: 'e6819e7a-f663-414b-92ec-cf7c82d2f4e5', name: 'Bank Austria' },
                        { id: 'eff103e6-843d-48b7-a6e6-fbd88f511b11', name: 'Easybank AG' },
                        { id: '25942cc9-617d-42a1-89ba-d1ab5a05770a', name: 'VR-BankBraunau' },
                        { id: '4a0a975b-0594-4b40-9068-39f77b3a91f9', name: 'Volkskreditbank' },
                        { id: '3fdc41fc-3d3d-4ee3-a1fe-cd79cfd58ea3', name: 'Erste Bank und Sparkassen' },
                        { id: 'ba7199cc-f057-42f2-9856-2378abf21638', name: 'BAWAG P.S.K. Gruppe' },
                    ],
                    key: 'issuer',
                    type: 'select',
                },
            ],
            name: 'EPS',
            supportsRecurring: true,
            type: 'eps',
        },
        { details: [{ key: 'bic', type: 'text' }], name: 'GiroPay', supportsRecurring: true, type: 'giropay' },
        {
            details: [
                {
                    items: [
                        { id: '1121', name: 'Test Issuer' },
                        { id: '1154', name: 'Test Issuer 5' },
                        { id: '1153', name: 'Test Issuer 4' },
                        { id: '1152', name: 'Test Issuer 3' },
                        { id: '1151', name: 'Test Issuer 2' },
                        { id: '1162', name: 'Test Issuer Cancelled' },
                        { id: '1161', name: 'Test Issuer Pending' },
                        { id: '1160', name: 'Test Issuer Refused' },
                        { id: '1159', name: 'Test Issuer 10' },
                        { id: '1158', name: 'Test Issuer 9' },
                        { id: '1157', name: 'Test Issuer 8' },
                        { id: '1156', name: 'Test Issuer 7' },
                        { id: '1155', name: 'Test Issuer 6' },
                    ],
                    key: 'issuer',
                    type: 'select',
                },
            ],
            name: 'iDEAL',
            supportsRecurring: true,
            type: 'ideal',
        },
        { name: 'Interac® Online', supportsRecurring: true, type: 'interac' },
        { name: 'Pay later with Klarna.', supportsRecurring: true, type: 'klarna' },
        { name: 'Slice it with Klarna.', supportsRecurring: true, type: 'klarna_account' },
        { name: 'Pay now with Klarna.', supportsRecurring: true, type: 'klarna_paynow' },
        { name: '7-Eleven', supportsRecurring: true, type: 'molpay_cash' },
        { name: 'epay', supportsRecurring: true, type: 'molpay_epay' },
        { name: 'Multibanco', supportsRecurring: true, type: 'multibanco' },
        {
            details: [{ items: [{ id: '1', name: 'Model Bank v2' }], key: 'issuer', type: 'select' }],
            name: 'Online banking',
            supportsRecurring: false,
            type: 'openbanking_UK',
        },
        { name: 'Paysafecard', supportsRecurring: true, type: 'paysafecard' },
        {
            details: [{ key: 'paywithgoogle.token', type: 'payWithGoogleToken' }],
            name: 'Google Pay',
            supportsRecurring: true,
            type: 'paywithgoogle',
        },
        {
            details: [
                {
                    items: [
                        { id: '+7', name: 'RU' },
                        { id: '+9955', name: 'GE' },
                        { id: '+507', name: 'PA' },
                        { id: '+44', name: 'GB' },
                        { id: '+992', name: 'TJ' },
                        { id: '+370', name: 'LT' },
                        { id: '+972', name: 'IL' },
                        { id: '+996', name: 'KG' },
                        { id: '+380', name: 'UA' },
                        { id: '+84', name: 'VN' },
                        { id: '+90', name: 'TR' },
                        { id: '+994', name: 'AZ' },
                        { id: '+374', name: 'AM' },
                        { id: '+371', name: 'LV' },
                        { id: '+91', name: 'IN' },
                        { id: '+66', name: 'TH' },
                        { id: '+373', name: 'MD' },
                        { id: '+1', name: 'US' },
                        { id: '+81', name: 'JP' },
                        { id: '+998', name: 'UZ' },
                        { id: '+77', name: 'KZ' },
                        { id: '+375', name: 'BY' },
                        { id: '+372', name: 'EE' },
                        { id: '+40', name: 'RO' },
                        { id: '+82', name: 'KR' },
                    ],
                    key: 'qiwiwallet.telephoneNumberPrefix',
                    type: 'select',
                },
                { key: 'qiwiwallet.telephoneNumber', type: 'text' },
            ],
            name: 'Qiwi Wallet',
            supportsRecurring: true,
            type: 'qiwiwallet',
        },
        {
            details: [
                {
                    details: [
                        { key: 'firstName', type: 'text' },
                        { key: 'lastName', type: 'text' },
                        {
                            items: [
                                { id: 'M', name: 'male' },
                                { id: 'F', name: 'female' },
                            ],
                            key: 'gender',
                            type: 'radio',
                        },
                        { key: 'dateOfBirth', type: 'date' },
                        { key: 'telephoneNumber', type: 'tel' },
                        { key: 'shopperEmail', type: 'emailAddress' },
                    ],
                    key: 'personalDetails',
                    type: 'fieldSet',
                },
                {
                    details: [
                        { key: 'street', type: 'text' },
                        { key: 'houseNumberOrName', type: 'text' },
                        { key: 'city', type: 'text' },
                        { key: 'postalCode', type: 'text' },
                        { key: 'stateOrProvince', optional: true, type: 'text' },
                        {
                            items: [
                                { id: 'AT', name: 'Austria' },
                                { id: 'CH', name: 'Switzerland' },
                                { id: 'DE', name: 'Germany' },
                                { id: 'NL', name: 'Netherlands' },
                            ],
                            key: 'country',
                            type: 'select',
                        },
                    ],
                    key: 'billingAddress',
                    type: 'address',
                },
                { key: 'separateDeliveryAddress', optional: true, type: 'boolean', value: 'false' },
                {
                    details: [
                        { key: 'street', type: 'text' },
                        { key: 'houseNumberOrName', type: 'text' },
                        { key: 'city', type: 'text' },
                        { key: 'postalCode', type: 'text' },
                        { key: 'stateOrProvince', optional: true, type: 'text' },
                        {
                            items: [
                                { id: 'AT', name: 'Austria' },
                                { id: 'CH', name: 'Switzerland' },
                                { id: 'DE', name: 'Germany' },
                                { id: 'NL', name: 'Netherlands' },
                            ],
                            key: 'country',
                            type: 'select',
                        },
                    ],
                    key: 'deliveryAddress',
                    optional: true,
                    type: 'address',
                },
            ],
            name: 'RatePay Invoice',
            supportsRecurring: true,
            type: 'ratepay',
        },
        { name: 'UnionPay', supportsRecurring: true, type: 'unionpay' },
        { name: 'WeChat Pay', supportsRecurring: true, type: 'wechatpayQR' },
        { name: 'WeChat Pay', supportsRecurring: true, type: 'wechatpayWeb' },
    ],
}