export class CurrencyContainer{

    constructor(templateId){
        this._templateId = templateId;
        this._items = [];
    }

    _template(templateId){
        return `
            <div id="currencyTemplate-${templateId}" class="row chart-container">
            </div>
            `;
    }

    buildTemplate(){
        return this._template(this.templateId);
    }

    includeCurrencyDetailOnTemplate(currencyDetail){
        this._addItem(currencyDetail);
            
        let template = this._htmlTemplate();
        let currencyTemplate = currencyDetail.buildTemplate();
        template.appendChild(currencyTemplate);
    }

    _addItem(currencyDetail){
        if(this.currencyDetailList.length >= 3) { 
            throw new Error("CurrencyContainer has 3 currencyDetail");
         }

        this._items.push(currencyDetail);
    }

    _htmlTemplate(){
        let currencyCoitainerID = `#currencyTemplate-${this.templateId}`;
        return document.querySelector(currencyCoitainerID);
    }

    get templateId(){
        return this._templateId;
    }

    get currencyDetailList(){
        return this._items;
    }

}