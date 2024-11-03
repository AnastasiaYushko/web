const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
const totalSlides = images.length;

// Показ слайдов по индексу
function showSlide(index) {
    // Проверка границ индекса
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

// Обновление точек навигации
function updateDots() {
    dotsContainer.innerHTML = '';

    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentIndex) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            showSlide(index);
        });

        dotsContainer.appendChild(dot);
    });
}

// Переход к следующему слайду
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Переход к предыдущему слайду
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Обработчики событий для кнопок
nextButton.addEventListener('click', () => {
    nextSlide();
});

prevButton.addEventListener('click', () => {
    prevSlide();
});

showSlide(currentIndex);
updateDots();
