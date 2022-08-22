class CalcController{
    constructor(){
        this._lastOperator = ''
        this._lastNumber = ''
        this._operation = []
        this._displayCalcElement = document.querySelector('.main-display')
        this._subDisplayCalcElement = document.querySelector('.sub-display')
        
        this._currentDate
        this.initialize()
        this.initButtonsEvents()
    }

    //used to initialize elements
    initialize(){
        this._displayCalcElement.innerHTML = "0"
        this._subDisplayCalcElement.innerHTML='0'
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    clearAll(){
        console.log('clicked clearall')
        this._newElement = []
        this._operation = this._newElement
        this.displayCalc = '0'
        this.subDisplayCalc = '0'
    }

    clearEntry() {

        this._operation.pop();

        this.setLastNumberToDisplay();

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

    pushOperation(value){
        this._operation.push(value)

        if(this._operation.length>3){
            

            this.calc()

            console.log('this operation', this._operation)
        }
    }

    calcFromEqual(){
        let expr = this._operation
        console.log(expr)
        let result = eval(this._operation.join(""))
        console.log(result)
        this.displayCalc = result
        this.subDisplayCalc = this._operation.join("")
    }

    getResult(){
        return eval(this._operation.join(""))
    }

    calc(){
        let last = '';

        this._lastOperator = this.getLastItem();

        if (this._operation.length < 3) {

            let firstItem = this._operation[0];
            this._operation = [firstItem, this._lastOperator, this._lastNumber];

        }

        if (this._operation.length > 3) {

            last = this._operation.pop();
            this._lastNumber = this.getResult();

        } else if (this._operation.length === 3) {

            this._lastNumber = this.getLastItem(false);

        }

        console.log('_lastOperator', this._lastOperator)
        console.log('_lastOperator', this._lastOperator)


        let result = this.getResult()
        
        
        if(last=== '%'){

            result /= 100

            this._operation = [result]

        }else{
            
            this._operation.push(last)
            this._operation = [result, last]
             

            this._operation = [result, last]
            console.log('apoós o last', this._operation, 'last vale: ', last)
        }
        this.setLastNumberToDisplay()


    }

    getLastItem(isOperator = true) {

        let lastItem;

        for (let i = this._operation.length - 1; i >= 0; i--) {

            if (this.isOperator(this._operation[i]) === isOperator) {
                lastItem = this._operation[i];
                break;
            }

        }

        if (!lastItem) {

            lastItem = (isOperator) ? this._lastOperator : this._lastNumber;

        }

        return lastItem;

    }

    setLastNumberToDisplay(){
        let lastNumber = this.getLastItem(false)
        
        this.displayCalc = lastNumber
        this.subDisplayCalc = this._operation.join("")
    }

    addOperation(value){
        console.log("A", value)
        
        if(isNaN(this.getLastOperation())){

            if(this.isOperator(value)){
                this.setLastOperation(value)
            }else{
                this.pushOperation(value)
                this.setLastNumberToDisplay()

            }


        }else{
            if(this.isOperator(value)){
                this.pushOperation(value)
            }else{
                let newValue = this.getLastOperation().toString() + value.toString()
                this.setLastOperation(parseInt(newValue))
                this.setLastNumberToDisplay()

            }
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
                this.clearEntry()
                break
                
            case 'ast':
                this.addOperation('*');
                break
            
            case 'dash':
                this.addOperation('-');
                break

            case 'equal zero':
                this.calc()
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