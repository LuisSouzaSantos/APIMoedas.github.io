export class CurrencyDetail{

    constructor(currency){
        this._currency = currency;
        this._currencyId = currency.code;
    }

    _template(currencyId){
        let divContainer = document.createElement("div");
        let divContent = document.createElement("div");
        let divImage = document.createElement("div");

        divContainer.id = currencyId;
        divContainer.className = "col currencyDetail";

        let currencyName = document.createElement("h6");
        currencyName.textContent = this._currency.name;
        let currencyBid = document.createElement("p");
        currencyBid.textContent = "Compra: R$"+this._currency.bid;
        let currencyAsk = document.createElement("p");
        currencyAsk.textContent = "Venda: R$"+this._currency.ask;
        let currencyCreateDate = document.createElement("p");
        currencyCreateDate.textContent = "Última atualização: "+this._currency.create_date

        divContent.appendChild(currencyName);
        divContent.appendChild(currencyBid);
        divContent.appendChild(currencyAsk);
        divContent.appendChild(currencyCreateDate);

        divContainer.appendChild(divContent);

        return divContainer;
    }

    buildTemplate(){
        return this._template(this.currencyId);
    }

    get currencyId(){
        return this._currencyId;
    }

    get currency(){
        return this._currency;
    }
}

ask: "5.2142"
bid: "5.2117"
code: "USD"
codein: "BRL"
create_date: "2021-08-25 17:59:59"
high: "5.213"
low: "5.2126"
name: "Dólar Americano/Real Brasileiro"
pctChange: "0.02"
timestamp: "1629925199"
