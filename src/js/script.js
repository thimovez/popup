function popup() {
    const popupButton = document.querySelector('.addToBasket'),
        popup = document.querySelector('.popup'),
        close = document.querySelector('.close');

    countClick = popupButton.addEventListener('click', () => {
        popup.style.display = 'block';
        console.log('click');
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}

popup();