import { ApiService } from "../Helper/ApiService.js";
import { CURRENCY_LIST_AVAILABLE } from "../Helper/CurrencyListAvailable.js";
import { CurrencyContainer } from "../View/CurrencyContainer.js";
import { CurrencyDetail } from "../View/CurrencyDetails.js";
import { Currency } from "../Model/Currency.js";
import { CurrencyDetailsGraphic } from "../View/CurrencyDetailsGraphic.js";

export class CurrencyController {

    constructor(){
        this._currencyListAvailable = CURRENCY_LIST_AVAILABLE;
        this._currencyContainerList = [];
        this._currencyCurrencyDetailsGraphicList = [];
        
        this._globalCurrencyInformationHTML = document.querySelector("#globalCurrencyInformation");
        this._globalCurrencyGraphicInformationHTML = document.querySelector("#globalCurrencyGraphicInformation");

        this.currencyList = [];
        this._loadCurrencies();
    }

    async _loadCurrencies(){
        let currencyContainer = this._buildTemplateContainer();
        this._buildContainer(currencyContainer);
        let currencyCurrencyGraphic = this._buildTemplateContainer();
        this._buildCurrencyGraphicInformation(currencyCurrencyGraphic);

        for (let currencyAvailable of this._currencyListAvailable){
            let currencyName = currencyAvailable.currency_name;

            let currency = await this._getCurrency(currencyName);
            let currencyLastDays = await this._getCurrencyLastDays(currencyName, 7);

            let currencyObject = new Currency(currency.code, currency.codein, currency.name, currency.high, currency.low, 
                     currency.varBid, currency.pctChange, currency.bid, currency.ask, currency.timestamp, currency.create_date, currencyLastDays);

            this.currencyList.push(currencyObject)
            this._addNewCurrencyOnTemplate(currencyObject);
            this._addNewCurrencyDetailsGraphicTemplate(currencyObject);
        }

    }

    // CurrencyDetail
    _buildTemplateContainer(){
        let currencyTemplateID = this._currencyContainerList.length+1;
        let currencyContainer = new CurrencyContainer(currencyTemplateID);
        this._currencyContainerList.push(currencyContainer);
        return currencyContainer;
    }

    _buildContainer(currencyContainer){
        this._globalCurrencyInformationHTML.innerHTML = currencyContainer.buildTemplate();
    }

    _addNewCurrencyOnTemplate(currency){
        let currencyContainer = this._currencyContainerList[0];
        let currencyDetail = new CurrencyDetail(currency);
        currencyContainer.includeCurrencyDetailOnTemplate(currencyDetail);
    }

    // CurrencyGraphics

    _buildCurrencyGraphicInformation(currencyContainer){
        this._globalCurrencyGraphicInformationHTML.innerHTML = currencyContainer.buildTemplate();
    }

    _addNewCurrencyDetailsGraphicTemplate(currencyObject){
        let currencyContainer = this._currencyContainerList[1];
        let currencyDetailsGraphic = new CurrencyDetailsGraphic(this._currencyCurrencyDetailsGraphicList.length+1, currencyObject);
        currencyContainer.includeCurrencyDetailOnTemplate(currencyDetailsGraphic);
        currencyDetailsGraphic.buildChart();
        this._currencyCurrencyDetailsGraphicList.push(currencyDetailsGraphic)
    }


    // Call APIs
    _getCurrency(currencyName){
        return new Promise((resolve, reject) => {
            ApiService.getCurrency(currencyName).then((response) => {
                resolve(response[Object.keys(response)]);
            })
            .catch((error) => {
                reject(error)
            });
        });
    }

    _getCurrencyLastDays(currencyName, days){
        return new Promise((resolve, reject) => {
            ApiService.getCurrencyInLastDays(currencyName, days).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error)
            });
        });
    }


}

