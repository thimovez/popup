//Закрытие окна
function closePopup() {
    const popup = document.querySelector('.popup'),
    close = document.querySelector('.close');

    close.addEventListener('click', () => {
        popup.classList.toggle("hide__popup");
    });
}

function openPopup() {
    const popup = document.querySelector('.popup'),
    // overlay = document.querySelector('.overlay'),
    popupButton = document.querySelector('.addToBasket');
    let countClick = 1;
    //Окно будет отображаться лишь один раз после клика "Добавить в корзину"
    popupButton.addEventListener('click', () => {
        let count = countClick++;
        count < 2 ? popup.classList.toggle("show__popup") : popup.classList.toggle("hide__popup");
    });
    /**При клике на оверлей окно скрывается, а счетчик заново обнуляется,
    потому что пользователь мог нажать на оверлей случайно **/
    // overlay.addEventListener('click', () => {
    //     popup.style.display = 'none';
    //     countClick = 1;
    // });
}

openPopup();
closePopup();