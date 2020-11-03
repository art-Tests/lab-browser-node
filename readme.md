## intro

這個練習示範了如何讓網頁使用的 js 程式碼也可以透過 node 進行單元測試

```js
const Calculator = {
	Add(a, b) {
		return a + b;
	},
};

if (typeof module === 'object' && exports) {
	exports.Calculator = Calculator;
}
```

透過網頁的`script`標籤載入上述程式碼，則可使用全域變數的`Calculator`，而下面的 if 判斷式，若是在`node`執行環境底下會將`Calculator`匯出，即可在測試程式中`require`使用

## 注意

本練習僅做為示範，模擬在既有專案的情況下，如何在`legacy code`的環境底下進行單元測試，這樣的方式是不得已的，如果可以，還是以時下流行的處理方式，將前端程式碼進行編譯後再使用，網頁東西都放全域是很不好的
