function popup() {
    const popupButton = document.querySelector('.addToBasket'),
        popup = document.querySelector('.popup'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.close');
    //Окно будет отображаться лишь один раз после клика "Добавить в корзину"
    let countClick = 1;
    popupButton.addEventListener('click', () => {
        let count = countClick++;
        count < 2 ? popup.style.display = 'block' : popup.style.display = 'none';
    });
    /** При клике на оверлей окно скрывается, а счетчик заново обнуляется,
    потому что пользователь мог нажать на оверлей случайно **/
    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        countClick = 1;
    });
    //Закрытие окна
    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}

popup();