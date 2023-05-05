const allLang = ['en', 'ua'];
let currentLang = 'en';
const langButtons = document.querySelector('[data-btn]');
const currentPathName = window.location.pathname;
let currentText = {};

const textLang = {
    'projects': {
        en: 'Projects',
        ua: 'Наші проекти',
    },
    'about': {
        en: 'About',
        ua: 'Про нас',
    },
    'contact': {
        en: 'Contact',
        ua: 'Наші контакти',
    },
     
};

function checkPathName() {
    switch (currentPathName) {
        case './index.html':
            currentText = textLang;
            break;
    
        default:
            currentText = textLang;
            break;
    }
}

checkPathName();

function changeLang() {
    for (const key in currentText) {
        const elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = currentText[key][currentLang];
        }
    }
}

changeLang();


langButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        currentLang = event.target.dataset.btn;
        btn.classList.add('translate-btn-active');
        changeLang();
    })
}))




