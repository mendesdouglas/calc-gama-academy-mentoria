class CalcController{
    constructor(){
        this._displayCalc="0"
        this._currentDate
        this.initialize()
    }

    //used to initialize elements
    initialize(){
        let displayCalcElement = document.querySelector('.main-display')
        let subDisplayCalcElement = document.querySelector('.sub-display')

        displayCalcElement.innerHTML = "12345"
    }

    get displayCalc(){
        return this._displayCalc
    }

    set displayCalc(value){
        this._displayCalc=value
    }

    get currentDate(){
        return this._currentDate
    }

    set currentDate(value){
        this._currentDate = value
    }
}