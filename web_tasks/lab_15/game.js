document.addEventListener('DOMContentLoaded', () => {
    const rulesButton = document.getElementById('rules-button');
    const rules = document.getElementById('rules');
    const guessButton = document.getElementById('guess-button');
    const guessInput = document.getElementById('guess-input');
    const result = document.getElementById('result');
    const history = document.getElementById('history');
    const congratulationMessage = document.getElementById('congratulation-message');
    const restartButton = document.getElementById('restart-button');

    let secretNumber = generateSecretNumber();

    // Массив для хранения записей истории
    const historyArray = []; 
    // Количество записей на странице в истории
    const itemsPerPage = 3; 
    // Текущая страница
    let currentPage = 1; 

    // Скрываем правила явно при загрузке страницы
    rules.style.display = 'none';

    //Нажали на кнопку правила
    rulesButton.addEventListener('click', () => {
        // Переключаем видимость правил
        if (rules.style.display === 'none') {
            rules.style.display = 'block';
        } else {
            rules.style.display = 'none';
        }
    });

    //Нажимаем на кнопку угадать
    guessButton.addEventListener('click', () => {
        const guess = guessInput.value;

        if (guess.length !== 4 || isNaN(guess)) {
            result.textContent = 'Введите четырехзначное число.';
            return;
        }

        if (new Set(guess).size !== guess.length) {
            result.textContent = 'Число не должно содержать повторяющихся цифр.';
            return;
        }

        const feedback = checkGuess(guess);
        result.textContent = feedback.message;

        // Добавляем запись в начало массива истории
        historyArray.unshift(`Число: ${guess} - Быки: ${feedback.bulls}, Коровы: ${feedback.cows}`);

        // Обновляем историю на экране
        updateHistory();

        if (feedback.bulls === 4) {
            // Прячем блоки с результатами и историей
            result.style.display = 'none';
            history.style.display = 'none';
            document.getElementById('pagination-buttons').style.display = 'none';

            // Показываем поздравительное сообщение
            congratulationMessage.textContent = `Вы отгадали! Это число ${secretNumber}`;
            congratulationMessage.classList.remove('hidden');
            
            secretNumber = generateSecretNumber();
            guessInput.value = ''; // Очищаем поле ввода
        }
    });

    restartButton.addEventListener('click', () => {
        // Скрываем поздравительное сообщение
        congratulationMessage.classList.add('hidden');

        result.textContent = "";
        history.style.display = 'block';
        rules.style.display = 'none';
        document.getElementById('pagination-buttons').style.display = 'block';

        // Очищаем историю и сбрасываем страницу
        historyArray.length = 0;
        currentPage = 1;
        updateHistory();

        // Генерируем новое секретное число
        secretNumber = generateSecretNumber();
        guessInput.value = ''; // Очищаем поле ввода
    });

    // Генерация числа
    function generateSecretNumber() {
        let number;
        do {
            number = Math.floor(1000 + Math.random() * 9000).toString();
        } while (new Set(number).size !== number.length); // Генерируем до тех пор, пока число не уникально
        return number;
    }

    //Проверка попытки
    function checkGuess(guess) {
        let bulls = 0;
        let cows = 0;
        const guessArray = guess.split('');
        const secretArray = secretNumber.split('');

        guessArray.forEach((digit, index) => {
            if (digit === secretArray[index]) {
                bulls++;
            } else if (secretArray.includes(digit)) {
                cows++;
            }
        });

        return { message: `Быки: ${bulls}, Коровы: ${cows}`, bulls, cows };
    }

    //Обновление историии
    function updateHistory() {
         // Очищаем текущую историю
        history.innerHTML = ''; 

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const pageItems = historyArray.slice(startIndex, endIndex);
        pageItems.forEach((entry) => {
            const entryElement = document.createElement('p');
            entryElement.textContent = entry;
            history.appendChild(entryElement);
        });

        renderPaginationButtons();
    }

    //Обновление кнопок
    function renderPaginationButtons() {
        const paginationContainer = document.getElementById('pagination-buttons');
         // Очищаем старые кнопки
        paginationContainer.innerHTML = '';
    
        if (historyArray.length > itemsPerPage) {
            // Кнопка "Назад"
            const prevButton = document.createElement('button');
            prevButton.textContent = '⬅ Предыдущая';
            // Отключаем кнопку на первой странице
            prevButton.disabled = currentPage === 1; 
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    updateHistory();
                }
            });
            paginationContainer.appendChild(prevButton);
    
            // Кнопка "Вперед"
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Следующая ➡';
             // Отключаем кнопку на последней странице
            nextButton.disabled = currentPage * itemsPerPage >= historyArray.length;
            nextButton.addEventListener('click', () => {
                if (currentPage * itemsPerPage < historyArray.length) {
                    currentPage++;
                    updateHistory();
                }
            });
            paginationContainer.appendChild(nextButton);
        }
    }
    
    updateHistory(); // Инициализация пустой истории при загрузке
});
