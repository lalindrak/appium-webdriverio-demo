class Calculator{

    get textFromTextArea (){
        const getFinalResult =  $('//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]')
        return getFinalResult.getText()
    }

    async clickDigit(index){
        const numberCal = await $(`//android.widget.Button[@resource-id="com.google.android.calculator:id/digit_${index}"]`)
        await numberCal.click()
    }

    async clickMathematicalOperation(mathematicalOperation){
        const symbol = await $(`//android.widget.Button[@resource-id="com.google.android.calculator:id/op_${mathematicalOperation}"]`)
        await symbol.click()
    }
    async clickEqualsSymbol(){
        const eqSymbol = await $(`//android.widget.Button[@resource-id="com.google.android.calculator:id/eq"]`)
        await eqSymbol.click()
    }
    isEqualto(value){
        return this.textFromTextArea == value
    }
}
module.exports = new Calculator();