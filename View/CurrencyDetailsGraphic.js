export class CurrencyDetailsGraphic{

    constructor(templateId, currencyObject){
        this._currencyObject = currencyObject;
        this._templateId = templateId;
        this._currencyDetailLastDays = this._currencyObject.lastDays;
        this._canvasId;
        this._config;
    }

    _template(){
        let canvasContainer = document.createElement("canvas");
        canvasContainer.id = "currencyDetailGraphic-"+this._templateId;
        this._canvasId = "currencyDetailGraphic-"+this._templateId;
        canvasContainer.className = "col";

        return canvasContainer;
    }

    buildTemplate(){
        let template = this._template(this._templateId);
        let labels = this.buildDetailsGraphicLabels();
        let data = this.buildDetailsGraphicData(labels);
        this._config = this.buildDetailsGraphicConfig(data);
        //let chart = this.buildChart(template.id, config);
        return template;
    }

    buildDetailsGraphicLabels(){
        let dates =  this._currencyDetailLastDays.map(currencyDetail => { 
            var date = new Date(currencyDetail.timestamp * 1000);
            return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
        });

        return dates;
    }

    buildDetailsGraphicData(labels){
        return {
            labels: labels,
            datasets: [{
                label: this._currencyObject.name+":Útimos 7 dias",
                backgroundColor: 'rgb(240, 56, 48)',
                borderColor: 'rgb(240, 56, 48)',
                data: [...this._currencyDetailLastDays.map(currencyDetail => currencyDetail.high)],
            }]
        };
    }

    buildDetailsGraphicConfig(data){
        return {
            type: 'line',
            data: data,
            options: {
                maintainAspectRatio: false,
            }
        };
    }

    buildChart(){
        var myChart = new Chart(
            document.getElementById(this._canvasId),
            this._config
        );

        // myChart.height = '200';
        // myChart.canvas.height = '200';
        // myChart.canvas.style.height = '200px';
        myChart.canvas.parentNode.style.height = '200px';
        // myChart.width = '300';
        // myChart.canvas.width = '300';
        // myChart.canvas.style.width = '300px';   
        myChart.canvas.parentNode.style.width = '300px';

        window.addEventListener('beforeprint', () => {
            myChart.resize(200, 200);
        });
        window.addEventListener('afterprint', () => {
            myChart.resize();
        });
           
    }
}