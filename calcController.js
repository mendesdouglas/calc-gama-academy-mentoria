class CalcController{
    constructor(){
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

    initButtonsEvents(){
        let buttonsElements = document.querySelectorAll(".buttons > div")
        
        buttonsElements.forEach((btn, index)=> {
            btn.addEventListener('click', (e) => {
                console.log(btn.className.replace('button btn-', ''))

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