import {defineStore} from "pinia";


export const useTickerStore = defineStore('ticker', () => {

    const ticker = ref( {
        last_price: '',
        high: '',
        low: '',
        amount: '',
        volume: '',
        price_range: '',
        last24_price: '',
        symbol: ''
    })

    return {
        ticker
    }
}, {persist: false})
