
//Положительные
const positiveAnswers = [
    "Да, конечно!",
    "Абсолютно да!",
    "Без сомнений!"
];

//Нейтральные
const neutralAnswers = [
    "Наверное.",
    "Может быть.",
    "Возможно."
];

//Нейтральные
const hesitantlyPositiveAnswers = [
    "Можешь надеятся на это",
    "Скорее да чем нет",
    "Наиболее вероятно"
];

//Отрицательные
const negativeAnswers = [
    "Нет.",
    "Вряд ли.",
    "Точно нет."
];

const askBtn = document.getElementById("askBtn");
const clearBtn = document.getElementById("clearBtn");
const questionInput = document.getElementById("question");
const answerElement = document.getElementById("answer");

askBtn.addEventListener("click", () => {
    const question = questionInput.value.trim();

    if (!question) {
        alert("Введите ваш вопрос!");
        return;
    }

    const allAnswers = [...positiveAnswers, ...neutralAnswers, ...negativeAnswers, ...hesitantlyPositiveAnswers];
    //Выбор рандомного ответа
    const randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];

    answerElement.textContent = randomAnswer;
    answerElement.style.display = "block";
});

// Кнопка очистить
clearBtn.addEventListener("click", () => {
    questionInput.value = "";
    answerElement.style.display = "none";
});
