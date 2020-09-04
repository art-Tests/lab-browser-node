const Calculator = {
    Add(a,b){
        return a + b
    }
}

if (typeof module === 'object' && exports) {
    exports.Calculator = Calculator;
} 