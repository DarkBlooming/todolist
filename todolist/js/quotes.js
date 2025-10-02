const quotes = {
    uk: [
        "Уявляй, мрій, дій!",
        "Найдрібніша іскра може запалити чудеса",
        "Кожне завдання – маленька пригода"
    ],
    en: [
        "Imagine, dream, do!",
        "The smallest spark can ignite wonders",
        "Every task is a little adventure"
    ],
    jp: [
        "想像して、夢を見て、行動しよう！",
        "小さな火花が奇跡を起こす。",
        "すべてのタスクは小さな冒険だ。"
    ]
};

const quoteDiv = document.getElementById('quote');

function showRandomQuote() {
    const langQuotes = quotes[currentLang];
    const randomIndex = Math.floor(Math.random() * langQuotes.length);
    quoteDiv.textContent = langQuotes[randomIndex];

    quoteDiv.classList.remove('show');
    void quoteDiv.offsetWidth;
    quoteDiv.classList.add('show');

    setTimeout(() => {
        quoteDiv.classList.remove('show');
    }, 100000);
}


