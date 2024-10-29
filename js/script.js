const htmlBlock = [document.querySelector('.main__blocks'), document.querySelector('.projects__blocks'),document.querySelector('.third__bg_scd_block'),document.querySelector('.frth__images_contains')]

function addHtml (times, count, block) {
    const htmlBlocksCode = [`
        <div class="info__main_block">
            <div class="main__image_block">
                <div class="block__image__border">
                    <img src="img/project.png" alt="">
                </div>
            </div>
            <div class="text__elements_block">
                <h3 class="block__title">Создание сайтов</h3>
                <p class="block__text">Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
            </div>        
        </div>
    `,`
                       <div class="progects__item">
                    <div class="projects__item_flex">
                        <img src="img/web-programming.png" alt="">
                        <h3 class="project__item_count">125</h3>
                    </div>
                    <p class="projects__item_text">Our projects</p>
                 </div>  
    `,`
                         <div class="image__block">
                        <img src="img/Rectangle 2 (1).png" alt="">
                        <h3 class="image__block_title"><span style="color: #4985FF;">01.</span> Исследование и упаковка</h3>
                        <p class="image__block_text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                        <a href="#" class="image__block_link">Подробнее</a>

                    </div>
                    
    `,`<img src="img/Rectangle 2 (2).png" alt="">`]
    for(let i = 0; i < times; i++) htmlBlock[block].insertAdjacentHTML('beforeend', htmlBlocksCode[count])
    
}

addHtml(3, 0, 0)
addHtml(5, 1, 1)
addHtml(3, 2, 2)
addHtml(4, 3, 3)

function footerHtmlRedact() {
    const htmlBlockFooterMain = `
            <div class="footer__block">

                </div>
    `
    const htmlBlockFooter = [`
                        <div class="footer__main_contain">
                        <h3 class="footer__main_title">Контактная информация</h3>
                        <a class="footer__main_text" href="#"><i class="fa-regular fa-envelope"></i><span>test@test.com</span></a>
                        <a class="footer__main_text" href="#"><i class="fa-solid fa-phone"></i><span>+000 000 000</span></a>
                        <a class="footer__main_text" href="#"><i class="fa-solid fa-location-dot"></i><span>Город, улица 33</span></a>
                        </div>
    `,`
                    <div class="footer__main_contain">
                    <h3 class="footer__main_title">Основные ссылки</h3>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Главная</span></a>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Наши проекты</span></a>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Наши услуги</span></a>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Контакты</span></a>
                </div>
    `,`
                    <div class="footer__main_contain">
                    <h3 class="footer__main_title">Наши проекты</h3>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Ещё что-то</span></a>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Ещё что-то</span></a>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Ещё что-то</span></a>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Ещё что-то</span></a>
                </div>
    `,`
                    <div class="footer__main_contain">
                    <h3 class="footer__main_title">Социальные сети</h3>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Discord</span></a>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Instagram</span></a>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Facebook</span></a>
                    <a class="footer__main_text" href="#"><i class="fa-solid fa-chevron-right"></i><span>Twitter</span></a>
                </div>
    `]
    for(let i=0;i<4;i++) {
        document.querySelector('.footer__main').insertAdjacentHTML('beforeend', htmlBlockFooterMain)
    }
    for(let i=0;i<4;i++) {
             document.querySelectorAll('.footer__block')[i].insertAdjacentHTML('beforeend', htmlBlockFooter[i])
    }


}
footerHtmlRedact()

// Открывание менюшек



// show-modal-open
const showModalButtons = document.querySelectorAll('.show__modal_trigger')
const showModalChooseButton = document.querySelectorAll('.show__modal_buy_btn')
const showModal = document.querySelector('.show__modal')
const wrraper = document.querySelector('.wrraper')
const exitBtn = document.querySelector('.wrap__exit')
const buyBtn = document.querySelector('.show__modal_main_buy_btn')

const showModalFunc = () => {
    showModalButtons.forEach((i) => {
        i.addEventListener('click', (e) => {
            e.preventDefault()
            trueorfalse = false
            showModal.classList.forEach((i) => {
                if(i == 'hidden') trueorfalse = true
            });
            if(trueorfalse) showModal.classList.remove('hidden')
            buyBtn.classList.remove('error__display')
            buyBtn.classList.add('error')
            buyBtn.textContent = 'Укажите вид покупки!'
            showModalChooseButton.forEach((j) => {
                j.parentElement.classList.remove('selected')
                    
            })
        });
    });
    wrraper.addEventListener('click', (e) => {
        if( !e.target.contains(showModal) && !showModal.classList.contains('hidden') && !e.target.contains(showModalButtons)) showModal.classList.add('hidden')
         
    })
    exitBtn.addEventListener('click', () => {
        showModal.classList.add('hidden')


    })
    showModalChooseButton.forEach((i) => {
        i.addEventListener('click', (e) => {
            e.preventDefault()
            showModalChooseButton.forEach((j) => {
                j.parentElement.classList.remove('selected')
                    
            })
                i.parentElement.classList.add('selected')
                buyBtn.innerHTML = `Купить <br> ${i.parentElement.querySelector('.show__modal_buy_text').querySelector('span').textContent}`
                selctedText = i.parentElement.querySelector('.show__modal_buy_text').querySelector('span').textContent
                i.parentElement.querySelector('.show__modal_buy_text').querySelector('span').style.fontWeight = 'bold'
                if(buyBtn.classList.contains('error')) {

                    buyBtn.classList.remove('error__display')
                    buyBtn.classList.remove('error')
                }
        })
        buyBtn.addEventListener('click', () => {
            
            if(buyBtn.classList.contains('error')) {
                buyBtn.classList.add('error__display')
                setTimeout(() => {
                buyBtn.classList.remove('error__display')
                }, 1000)
            }else {
                window.location.href = `https://www.google.com/search?q=${selctedText}`;
            }
        })
    });
    
};

showModalFunc();


// Бургер меню

const burgerMenu = document.querySelector('.burger__menu')
const burgerMenuShowBtn = document.querySelector('.show__burger_menu_btn')
const burgerMenuCloseBtn = document.querySelector('.burger__menu_close_btn')

function BurgerMenuToggle() {
    burgerMenu.classList.toggle('burger__on')
    burgerMenuShowBtn.querySelector('i').classList.toggle('rotate__on')
}
function BurgerMenuClick() {
    burgerMenuShowBtn.addEventListener('click', (e) => {
        e.preventDefault()
        BurgerMenuToggle()
    })
    burgerMenuCloseBtn.addEventListener('click', (e) => {
        e.preventDefault()
        BurgerMenuToggle()
    })
}
BurgerMenuClick()

// Прокрутка к элементам


const bg3 = document.querySelector('.third__bg')
const bg4 = document.querySelector('.fourth__bg')
const bg5 = document.querySelector('.fives__bg')
const footer = document.querySelector('footer')
const scrols = document.querySelectorAll('.list__item')
const header = document.querySelector('.header')

function Scroll(element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}
document.querySelector('.scroll__up').addEventListener('click', () => {
    Scroll(header)
})

scrols.forEach((i, index) => {
    i.addEventListener('click', (e) => {
        e.preventDefault()
        if(index === 0) Scroll(header)
        else if(index === 1) {
            Scroll(bg4)
            buttonError(bg4, 'button')
        }
        else if(index === 2) {
            Scroll(bg3)
            buttonError(bg3, 'button')
        }
        else if(index === 3) {
            Scroll(bg5)
            buttonError(bg5, 'button')
        }
        else if(index === 4) {
            Scroll(footer)
            buttonError(document.querySelector('.last__bg'), 'form')
        
        }
    })
});
function buttonError(bg, elem) {
    setTimeout(() => {
        bg.querySelector(elem).classList.add('error__display')
    }, 500)
    setTimeout(() => {
        bg.querySelector(elem).classList.remove('error__display')
    }, 2000)
}
hideTimeout = ''
window.addEventListener('scroll', () => {
    clearTimeout(hideTimeout)
    document.querySelector('.scroll__up').classList.toggle('hidden__scroll', window.scrollY < 500)
    hideTimeout = setTimeout(() => {
            document.querySelector('.scroll__up').classList.add('hidden__scroll')
    }, 1000)
})

document.querySelector('.scroll__up').addEventListener('mouseenter', () => {
    console.log('asd');
    clearTimeout(hideTimeout)
    document.querySelector('.scroll__up').classList.remove('hidden__scroll')
});
document.querySelector('.scroll__up').addEventListener('mouseleave', () => {
    document.querySelector('.scroll__up').classList.add('hidden__scroll')
});
