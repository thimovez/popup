function popup() {
    const message = {
        succes: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    const popupButton = document.querySelector('.addToBasket'),
        popup = document.querySelector('.popup'),
        overlay = document.querySelector('.overlay'),
        sendNumButton = document.querySelector('.popup__button'),
        popupForm = document.querySelector('.popup__wrapper'),
        close = document.querySelector('.close');
    //Окно будет отображаться лишь один раз после клика "Добавить в корзину"
    let countClick = 1;
    popupButton.addEventListener('click', () => {
        let count = countClick++;
        count < 2 ? popup.style.display = 'block' : popup.style.display = 'none';
    });
    /**При клике на оверлей окно скрывается, а счетчик заново обнуляется,
    потому что пользователь мог нажать на оверлей случайно **/
    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        countClick = 1;
    });
    //Закрытие окна
    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    //Сообщение при отравке номера телефона
    sendNumButton.addEventListener('submit', () => {
        popupForm.style.display = 'none';
        const thankYou = document.createElement('h1');

    });

}

popup();