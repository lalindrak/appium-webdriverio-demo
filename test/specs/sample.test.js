const calculator = require('../../pages/CalculatorPage')
const expect = require('chai').expect;
describe("Verify basic mathematical operations are working as expected",function(){

    beforeEach(() => {
    });

    it("Verifying basic addition functionality",()=>{
        calculator.clickDigit(5)
        calculator.clickDigit(3)
        calculator.clickDigit(4)
        calculator.clickMathematicalOperation('add')
        calculator.clickDigit(4)
        calculator.clickEqualsSymbol()
        expect(calculator.isEqualto(538)).to.be.true
    }),
    it("Verifying basic substraction functionality",()=>{
        calculator.clickDigit(1)
        calculator.clickDigit(0)
        calculator.clickDigit(0)
        calculator.clickMathematicalOperation('sub')
        calculator.clickDigit(5)
        calculator.clickEqualsSymbol()
        expect(calculator.isEqualto(95)).to.be.true
    }),
    it("Verifying basic multiplication functionality",()=>{
        calculator.clickDigit(5)
        calculator.clickDigit(0)
        calculator.clickDigit(0)
        calculator.clickMathematicalOperation('mul')
        calculator.clickDigit(5)
        calculator.clickEqualsSymbol()
        expect(calculator.isEqualto(2500)).to.be.true
    }),
    it("Verifying basic division functionality",()=>{
        calculator.clickDigit(1)
        calculator.clickDigit(0)
        calculator.clickDigit(0)
        calculator.clickMathematicalOperation('div')
        calculator.clickDigit(4)
        calculator.clickEqualsSymbol()
        expect(calculator.isEqualto(25)).to.be.true
    })
    afterEach(() => {
        driver.reset();
    });
})