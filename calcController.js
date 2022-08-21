class CalcController{
    constructor(){
        this._expressions = []
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
        this._expressions = []
    }

    


    setError(){
        this.displayCalc = "ERROR"
    }

    addOperation(value){
        console.log('value - ', value)
        this._expressions.push(value)
        console.log(this._expressions)
    }

    execButton(value){
        switch(value){
            case 'C grow':
                this.clearAll();
                break

            case 'percent':
                console.log('cliquei na percent')
                break
            
            case 'slash':
                console.log('cliquei na /')
                break

            case 'arrow':
                console.log('cliquei na backspace')
                break
                
            case 'ast':
                console.log('cliquei na *')
                break
            
            case 'dash':
                console.log('cliquei na -')
                break

            case 'plus':
                console.log('cliquei na plus')
                break

            case 'equal':
                console.log('cliquei na equal')
                break

            case 'dot':
                console.log('cliquei na dot')
                              

            case '0':
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
                console.log('btn', btn.className.replace('button btn-', ''))
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