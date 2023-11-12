const body = document.querySelector('body');
    body.style.backgroundImage = 'url(https://i.redd.it/5v59qjemcv401.jpg)';
    body.style.backgroundSize='cover';
    body.style.backgroundAttachment='fixed';

const form = document.querySelector('#form');
    form.style.position = 'absolute';
    form.style.top='50%';
    form.style.left = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.backgroundColor = 'rgba(0,0,0,0.5)';
    form.style.transition = ' 0.5s';
    form.style.border = '1vh solid rgba(0,0,0,0)';
    form.style.filter ='blur(4px)';

const winWin = document.querySelector('#windowWin');
    winWin.style.position = 'absolute';
    winWin.style.top='50%';
    winWin.style.left = '50%';
    winWin.style.transform = 'translate(-50%, -50%)';
    winWin.style.zIndex = '-1';
    winWin.style.opacity = 0;
    winWin.style.fontSize = '2.5vw';
    winWin.style.textAlign = 'center';
    winWin.style.alignItems = 'center';
    winWin.style.width = '40%';
    winWin.style.height = '50%';
    winWin.style.border='2px solid #000000';
    winWin.style.color = '#ffffff';
    winWin.style.display = 'flex'; 
    winWin.style.justifyContent = 'center'; 
    winWin.style.alignItems = 'center';

const windowInput = document.querySelector('#window');
    windowInput.style.opacity = 1;
    windowInput.style.position = 'absolute';
    windowInput.style.top='50%';
    windowInput.style.left = '50%';
    windowInput.style.transform = 'translate(-50%, -50%)';
    windowInput.style.zIndex = '1';
    windowInput.style.width = '35%';
    windowInput.style.height = '35%';
    windowInput.style.border = '2px solid rgba(0, 0, 0, 1)';
    windowInput.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    windowInput.style.boxShadow = '1px 5px 20px 10px rgba(0, 0, 0, 0.8)';

const userNameWindow = document.querySelector('#name-for-user');
    userNameWindow.style.position = 'absolute';
    userNameWindow.style.top='35%';
    userNameWindow.style.left = '50%';
    userNameWindow.style.transform = 'translate(-50%, -50%)';
    userNameWindow.style.height = '15%';
    userNameWindow.style.width = '50%';
    userNameWindow.style.border = '2px solid rgba(0, 0, 0, 1)';
    userNameWindow.style.textAlign = 'center';
    userNameWindow.style.fontSize = '1.5vw';
    userNameWindow.style.backgroundColor = 'rgba(0,0,0,0.7)';
    userNameWindow.style.color = '#ffffff';
    userNameWindow.style.transition = '0.3s';

userNameWindow.addEventListener('mouseenter', ()=>{
        userNameWindow.style.backgroundColor='rgba(255, 255, 255, 0.6)';
        userNameWindow.style.color = '#000000';
        userNameWindow.style.width = '60%';
        userNameWindow.style.height='20%';
        userNameWindow.style.fontSize = '1.8vw';
    });
userNameWindow.addEventListener('mouseout', ()=>{
        userNameWindow.style.backgroundColor='rgba(0, 0, 0, 0.6)';
        userNameWindow.style.color = '#ffffff';
        userNameWindow.style.fontSize = '1.5vw';
        userNameWindow.style.height = '15%';
        userNameWindow.style.width = '50%';
    });

const userButton = document.querySelector('#save-name');    
    userButton.style.position = 'absolute';
    userButton.style.top='60%';
    userButton.style.left = '50%';
    userButton.style.transform = 'translate(-50%, -50%)';
    userButton.style.backgroundColor='rgba(0, 0, 0, 0.6)';
    userButton.style.border = '2px solid rgba(0, 0, 0, 1)';
    userButton.style.color='#ffffff';
    userButton.style.fontSize = '1vw';
    userButton.style.width='40%';
    userButton.style.height='15%';
    userButton.style.transition = '0.3s';

userButton.addEventListener('mouseenter', ()=>{
        userButton.style.backgroundColor='rgba(255, 255, 255, 0.6)';
        userButton.style.color='#000000';
        userButton.style.width = '50%';
        userButton.style.height='20%';
        userButton.style.fontSize = '1.5vw';
    });
userButton.addEventListener('mouseout', ()=>{
        userButton.style.backgroundColor='rgba(0, 0, 0, 0.6)';
        userButton.style.color='#ffffff';
        userButton.style.fontSize = '1vw';
        userButton.style.width='40%';
        userButton.style.height='15%';
    });

const windowError = document.querySelector('#error-window');
    windowError.style.opacity = 0;
    windowError.style.position = 'absolute';
    windowError.style.top='50%';
    windowError.style.left = '50%';
    windowError.style.transform = 'translate(-50%, -50%)';
    windowError.style.zIndex = '-1';
    windowError.style.width = '20%';
    windowError.style.height = '25%';
    windowError.style.border = '2px solid rgba(255, 50, 50, 1)';
    windowError.style.backgroundColor = 'rgba(255, 50, 30, 0.6)';
    windowError.style.display = 'flex'; 
    windowError.style.justifyContent = 'center'; 
    windowError.style.alignItems = 'center';
    windowError.style.color = '#ffffff';
    windowError.style.fontSize = '2vw';
    windowError.innerHTML = 'Ви не ввели своє ім\'я';

const dataUser = document.querySelector('#data-user');
    dataUser.style.position = 'absolute';
    dataUser.style.top='56.8%';
    dataUser.style.left = '50%';
    dataUser.style.transform = 'translate(-50%, -50%)';
    dataUser.style.fontSize = '1.5vw';
    dataUser.style.width = '100%';
    dataUser.style.height = '5%';

const nameUser = document.querySelector('#name-user');
    nameUser.style.backgroundColor = 'rgba(255,255,255,0.1)';
    nameUser.style.border = '0.1vw ridge white';
    nameUser.style.width = '30%';
    nameUser.style.height = '100%';
    nameUser.style.display = 'flex'; 
    nameUser.style.justifyContent = 'center'; 
    nameUser.style.alignItems = 'center';
    nameUser.style.color = '#ffffff';
    nameUser.style.position = 'absolute';
    nameUser.style.left = '0';

const countUser = document.querySelector('#count-user');
    countUser.style.backgroundColor = 'rgba(255,255,255,0.1)';
    countUser.style.border = '0.1vw ridge white';
    countUser.style.width = '30%';
    countUser.style.height = '100%';
    countUser.style.display = 'flex'; 
    countUser.style.justifyContent = 'center'; 
    countUser.style.alignItems = 'center';
    countUser.style.color = '#ffffff';
    countUser.style.position = 'absolute';
    countUser.style.right = '0';
    let value1 = 0;

const dataBot = document.querySelector('#data-bot');
    dataBot.style.position = 'absolute';
    dataBot.style.top='43%';
    dataBot.style.left = '50%';
    dataBot.style.transform = 'translate(-50%, -50%)';
    dataBot.style.fontSize = '1.5vw';
    dataBot.style.width = '100%';
    dataBot.style.height = '5%';

const nameBot = document.querySelector('#name-bot');
    nameBot.style.backgroundColor = 'rgba(255,255,255,0.1)';
    nameBot.style.border = '0.1vw ridge white';
    nameBot.style.width = '30%';
    nameBot.style.height = '100%';
    nameBot.innerHTML = 'Комп\'ютер';
    nameBot.style.display = 'flex'; 
    nameBot.style.justifyContent = 'center'; 
    nameBot.style.alignItems = 'center';
    nameBot.style.color = '#ffffff';
    nameBot.style.position = 'absolute';
    nameBot.style.right = '0';

const countBot = document.querySelector('#count-bot');
    countBot.style.backgroundColor = 'rgba(255,255,255,0.1)';
    countBot.style.border = '0.1vw ridge white';
    countBot.style.width = '30%';
    countBot.style.height = '100%';
    countBot.style.display = 'flex'; 
    countBot.style.justifyContent = 'center'; 
    countBot.style.alignItems = 'center';
    countBot.style.color = '#ffffff';
    countBot.style.position = 'absolute';
    countBot.style.left = '0';
    let value2 = 0;

const button = document.querySelector('#button');
    button.style.position = 'absolute';
    button.style.top='50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.style.backgroundColor='rgba(255, 255, 255, 0.5)';
    button.style.color='#000000';
    button.style.fontSize = '1.1vw';
    button.style.width = '25%';
    button.style.height='5%';
    button.style.transition = '0.3s'; 

button.addEventListener('mouseenter', ()=>{
        button.style.color = '#000000';
        button.style.width = '30%';
        button.style.height='8%';
        button.style.fontSize = '1.2vw';
    });
button.addEventListener('mouseout', ()=>{
        button.style.color='#000000';
        button.style.fontSize = '1.1vw';
        button.style.width = '25%';
        button.style.height='5%';
    });

const user = document.querySelector('#user');
    user.style.position = 'absolute';
    user.style.bottom = '0';
    user.style.left = '50%';
    user.style.transform = 'translateX(-50%)';
    user.style.width = '100%'; 
    user.style.height = '40%'; 
    user.style.border = '0.1vh solid #ffffff';

const bot = document.querySelector('#bot');
    bot.style.position = 'absolute';
    bot.style.top = '0';
    bot.style.left = '50%';
    bot.style.transform = 'translateX(-50%)';
    bot.style.width = '100%'; 
    bot.style.height = '40%';
    bot.style.border = '0.1vh solid #ffffff';

const card = document.querySelectorAll('.card');  
    card.forEach((item)=>{
        item.style.width = '100%';
        item.style.height = '100%';
        item.style.backgroundColor = 'rgba(255,255,255,0.1)';
    });

userButton.onclick=()=> {
    let name = userNameWindow.value;    
    if(!name){
        windowError.style.opacity = 1;
        windowError.style.zIndex = "1";
        setTimeout(() => {
            windowError.style.opacity = 0;
            windowError.style.zIndex = "-1";
        }, 2000);
    } else{
        nameUser.innerHTML = name;
        windowInput.style.opacity = 0;
        windowInput.style.zIndex = '-1';
        form.style.filter ='blur(0px)';
    }
}

const cardUser = document.querySelector('#user-card');
const cardBot = document.querySelector('#bot-card');

let clickCount = 0;
button.onclick=()=>{
    if(clickCount < 3){
        clickCount++;
        let randomNumber1 = Math.floor(Math.random() * (15 - 6) + 6);
        value1 += randomNumber1;
        countUser.innerHTML = value1;
        let randomNumber2 = Math.floor(Math.random() * (15 - 6) + 6);
        value2 += randomNumber2;
        countBot.innerHTML = value2;
        create(randomNumber1, document.createElement('img'), cardUser)
        create(randomNumber2, document.createElement('img'), cardBot)
    }
    if(clickCount === 3){
        if (value1 > value2) {
			winWin.innerHTML = 'Ви перемогли!!!';
            winWin.style.backgroundColor = 'rgba(0, 255, 0, 0.4)';
            winWin.style.zIndex = '1';
            winWin.style.opacity = 1;
            setTimeout(() => {
                winWin.style.zIndex = '-1';
                winWin.style.opacity = 0;
                endGame();
            }, 2000);
		} else if (value2 > value1) {
			winWin.innerHTML = 'Ви програли:(';
            winWin.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
            winWin.style.zIndex = '1';
            winWin.style.opacity = 1;
            setTimeout(() => {
                winWin.style.zIndex = '-1';
                winWin.style.opacity = 0;
                endGame();
            }, 2000); 
		} else if(value1 === value2){
			winWin.innerHTML = 'Нічия!';
            winWin.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
            winWin.style.zIndex = '1';
            winWin.style.opacity = 1;
            setTimeout(() => {
                winWin.style.zIndex = '-1';
                winWin.style.opacity = 0;
                endGame();
            }, 2000); 
		}
    }
}

const cardImages = [
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './img/Валет.jpg',
    './img/Дама.jpg',
    './img/Король.jpg',
    './img/Туз.jpg',
];

function create(num, container, table) {
    if (num >= 6 && num <= 14) {
        container.src = cardImages[num - 6];
        container.alt = getCardName(num);
       // container.classList.add('card-img');
        container.style.width = '30%';
        container.style.height = '90%';
        container.style.margin = '5px';
        container.style.borderRadius = '10%';
        table.style.display = 'flex';
        table.style.justifyContent = 'center';
        table.style.alignItems = 'center';
        table.appendChild(container);
    }
}

function getCardName(num) {
    const cardNames = {
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: 'Валет',
        12: 'Дама',
        13: 'Король',
        14: 'Туз',
    };
    return cardNames[num];
}

function endGame(){
	value1 = 0;
	value2 = 0; 
    clickCount = 0;
    countUser.innerHTML = '';
    countBot.innerHTML = '';
    /*while (cardUser.firstChild) {
        cardUser.removeChild(cardUser.firstChild);
    }
    while (cardBot.firstChild) {
        cardBot.removeChild(cardBot.firstChild);
    }*/
    clearCard(cardBot);
    clearCard(cardUser);
}

function clearCard(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

const mediaQuery = window.matchMedia('(max-width: 900px)');
const screenSizeChange = (mediaQuery) => {
    if (mediaQuery.matches) {
        form.style.width = '80vw'; 
        form.style.height = '80vh';
    } else {
        form.style.width = '45vw'
        form.style.height = '90vh';
    }   
};
screenSizeChange(mediaQuery);
mediaQuery.addEventListener('change', () => screenSizeChange(mediaQuery));
