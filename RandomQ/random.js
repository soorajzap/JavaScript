const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "The future belongs to those who believe in the beauty of their dreams",
    "The best way to predict your future is to create it",
    "The biggest adventure you can take is to live the life of your dreams",
    "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "The future belongs to those who believe in the beauty of their dreams",
];

const usedIndex = new Set(); // Corrected `new set()` to `new Set()`
const quoteElement = document.getElementById("quote");

function randomQuote() {
if(usedIndex.size >= quotes.length) {
    usedIndex.clear()
}

    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length); // Corrected `math` to `Math`

        if (usedIndex.has(randomIndex)) continue; // Skip used index

        const quote = quotes[randomIndex];
        quoteElement.innerHTML = quote;
        usedIndex.add(randomIndex);
        break;
    }
}
