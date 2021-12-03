//Закрытие окна
function closePopup() {
    const popup = document.querySelector('.popup'),
    close = document.querySelector('.close');

    close.addEventListener('click', () => {
        popup.classList.remove("show__popup");
    });
}
//Открытие окна
function openPopup() {
    const popup = document.querySelector('.popup'),
    // overlay = document.querySelector('.overlay'),
    popupButton = document.querySelector('.addToBasket');
    let countClick = 1;
    //Окно будет отображаться лишь один раз после клика "Добавить в корзину"
    popupButton.addEventListener('click', () => {
        let count = countClick++;
        count < 2 ? popup.classList.add("show__popup") : popup.classList.remove("show__popup");
    });
    /**При клике на оверлей окно скрывается, а счетчик заново обнуляется,
    потому что пользователь мог нажать на оверлей случайно **/
    // overlay.addEventListener('click', () => {
    //     popup.style.display = 'none';
    //     countClick = 1;
    // });
}
//Cообщение после отправки номера
function thankYou() {
    const sendMessage = document.querySelector('.popup__button');
    const message = {
        succes: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }
    sendMessage.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(succes)
    });
}


//Валидация формы
const popupPhone = document.querySelector('.popup__phone');
const message = document.querySelector('.message');
// const sendMessage = document.querySelector('.popup__button');
function validationNum() {
    popupPhone.addEventListener('keyup', function(e) {
        let number = this.value.length;
        let onlyNum = /^\d+$/;
        let timerPhone = setInterval(() => {
            if (number <= 3) {
                message.style.display = 'block';
                if (!onlyNum) {
                    message.style.display = 'block';
                }
            } else {
                message.style.display = 'none';
            }
            setTimeout(() => {
                message.style.display = 'none';
            }, 4000);
        });
        // остановить вывод текста
        setTimeout(() => { clearInterval(timerPhone); });
    });
}

openPopup();
closePopup();
thankYou();
validationNum();