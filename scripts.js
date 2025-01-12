
const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    JPY: 136.57,
    INR: 83.18,
    GBP: 0.81,
    AUD: 1.49,
    CAD: 1.36,
    CHF: 0.93,
    CNY: 7.06,
    MXN: 18.17,
    BRL: 5.12,
    ZAR: 18.32,
    SGD: 1.36,
    HKD: 7.85,
    SEK: 10.32,
};


function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    if (fromRate && toRate) {
        
        const result = (amount / fromRate) * toRate;
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').innerText = 'Invalid currencies selected.';
    }
}


document.getElementById('convertButton').addEventListener('click', convertCurrency);
