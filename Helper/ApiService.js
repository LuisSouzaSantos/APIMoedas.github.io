const API_CURRENCY_LAST = 'https://economia.awesomeapi.com.br/last';
const API_CURRENCY_LAST_DAYS = 'https://economia.awesomeapi.com.br/json/daily';

export class ApiService {

    constructor() {}  

    static getCurrency(currencyName){
        const options = { method: 'get' }

        return fetch(API_CURRENCY_LAST+"/"+currencyName, options
                ).then(response => {
                    return response.json();
                }).catch(error => { 
                    return error;
                });
    }

    static getCurrencyInLastDays(currency, numberOfDays){
        const options = { method: 'get' }

        return fetch(API_CURRENCY_LAST_DAYS+"/"+currency+"/"+numberOfDays, options
                ).then((response) => {
                    return response.json();
                }).catch((error) => {
                    return error;
                });
    }

}