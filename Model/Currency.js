export class Currency{

    constructor(code, codein, name, high, low, varBid, pctChange, bid, ask, timestamp, create_date, lastDays){
        this._code = code;
        this._codein = codein;
        this._name = name;
        this._high = high;
        this._low = low;
        this._varBid = varBid;
        this._pctChange = pctChange;
        this._bid = bid;
        this._ask = ask;
        this._timestamp = timestamp;
        this._create_date = create_date;
        this._lastDays = lastDays;
    }

    get code(){
        return this._code;
    }

    get codein() {
        return this._codein;
    }

    get name() {
        return this._name;
    }

    get high(){
        return this._high;
    }

    get low(){
        return this._low;
    }

    get varBid(){
        return this._varBid;
    }

    get pctChange(){
        return this._pctChange;
    }

    get bid(){
        return this._bid;
    }

    get ask(){
        return this._ask;
    }

    get timestamp(){
        return this._timestamp;
    }

    get create_date(){
        return this._create_date;
    }

    get lastDays(){
        return this._lastDays;
    }
}