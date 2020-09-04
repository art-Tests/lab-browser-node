const {Calculator} = require('../src/Service/Calculator')

describe('Calculator', () => {
    it('1+2=3', () => {
        const actual = Calculator.Add(1,2)
        const expected = 3
        
        expect(actual).toBe(expected)
    });
});