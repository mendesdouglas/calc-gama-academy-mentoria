class CalcController{
    constructor(){
        this._operation = []
        this._displayCalcElement = document.querySelector('.main-display')
        this._subDisplayCalcElement = document.querySelector('.sub-display')
        
        this._currentDate
        this.initialize()
        this.initButtonsEvents()
    }

    //used to initialize elements
    initialize(){
        this._displayCalcElement.innerHTML = "123454"
        this._subDisplayCalcElement.innerHTML='50x20'
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    clearAll(){
        this._operation = []
    }

    


    setError(){
        this.displayCalc = "ERROR"
    }

    getLastOperation(){
        return this._operation[this._operation.length - 1]

    }

    setLastOperation(value) {

        this._operation[this._operation.length - 1] = value;

    }

    isOperator(value) {
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
    }

    addOperation(value){
        console.log('A', isNaN(this.getLastOperation()))
        
        if(isNaN(this.getLastOperation())){
            console.log('false - type', typeof(value), this._operation)

            if(this.isOperator(value)){
                console.log('deve ser operador false and true', typeof(value))
                this.setLastOperator(value)
            }else{
                console.log('deve ser um numero false and false', typeof(value))
                this._operation.push(value)
            }


        }else{
            console.log('addOperation-isNaN false-', value)
            let newValue = this.getLastOperation().toString() + value.toString()
            this.setLastOperation(newValue)
            console.log(this._operation)

        }
        
        
    }

    execButton(value){
        switch(value){

            case 'plus':
                console.log('plus')
                this.addOperation('+');
                break

            case 'C grow':
                this.clearAll();
                break

            case 'percent':
                this.addOperation('%');
                break
            
            case 'slash':
                this.addOperation('/');
                break

            case 'arrow':
                console.log('cliquei na equal')
                break
                
            case 'ast':
                this.addOperation('*');
                break
            
            case 'dash':
                this.addOperation('-');
                break

            case 'equal':
                console.log('cliquei na equal')
                break

            case 'dot':
                console.log('cliquei na dot')
                break
                              

            case '0 zero':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':    
            case '9':
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();
    
        }
    }

    initButtonsEvents(){
        let buttonsElements = document.querySelectorAll(".buttons > div")
        
        buttonsElements.forEach((btn, index)=> {
            this.addEventListenerAll(btn, 'click drag', (e) => {
                console.log('btn initelment', btn.className.replace('button btn-', ''))
                let buttonsText = btn.className.replace('button btn-', '')
                this.execButton(buttonsText);

            })

        })

    }

    get displayCalc(){
        return this._displayCalcElement.innerHTML
    }

    set displayCalc(value){
        this._displayCalcElement.innerHTML=value
    }

    get subDisplayCalc(){
        return this._subDisplayCalcElement.innerHTML
    }

    set subDisplayCalc(value){
        this._subDisplayCalcElement.innerHTML=value

    }

    get currentDate(){
        return this._currentDate
    }

    set currentDate(value){
        this._currentDate = value
    }
}