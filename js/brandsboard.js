const animboard = document.querySelector('.home__brandscont--animboard');

const board = document.querySelector('.home__brandscont');
board.addEventListener('mouseover', spreadIcons);
board.addEventListener('mousemove', startRotate);
board.addEventListener('mouseout', stopRotate);

function startRotate(event){
    const halfHeight = animboard.offsetHeight / 2;
    const halfWidth = animboard.offsetWidth / 2;
    animboard.style.transform = 'rotateX(' + -(event.offsetY - halfHeight)/15 +'deg) rotateY(' + (event.offsetX - halfWidth)/15 +'deg)';
}

function stopRotate(){
    animboard.style.transform = 'rotate(0)';
    gunsbet.style.top = '-30px';
    gunsbet.style.left = '50px';
    loki.style.top = '50px';
    loki.style.left = '40px';
    megapari.style.top = '240px';
    megapari.style.left = '300px';
    megapari.style.transform = 'translateZ(33px)';
    savarona.style.top = '170px';
    savarona.style.left = '250px';
    roku.style.top = '-40px';
    roku.style.left = '330px';
    crazyfox.style.top = '300px';
    crazyfox.style.left = '10px';
    goldenstar.style.top = '-10px';
    goldenstar.style.left = '290px';
    euslot.style.top = '210px';
    euslot.style.left = '20px';
    webby.style.top = '370px';
    webby.style.left = '240px';
}

const gunsbet = document.querySelector('.home__brandscont--gb');
const loki = document.querySelector('.home__brandscont--loki');
const megapari = document.querySelector('.home__brandscont--mp');
const savarona = document.querySelector('.home__brandscont--savarona');
const roku = document.querySelector('.home__brandscont--roku');
const crazyfox = document.querySelector('.home__brandscont--cf');
const goldenstar = document.querySelector('.home__brandscont--gs');
const euslot = document.querySelector('.home__brandscont--eu');
const webby = document.querySelector('.home__brandscont--webby');

function spreadIcons(){
    gunsbet.style.top = '-15px';
    gunsbet.style.left = '30px';
    loki.style.top = '70px';
    loki.style.left = '10px';
    megapari.style.top = '250px';
    megapari.style.left = '350px';
    megapari.style.transform = 'translateZ(78px)';
    savarona.style.top = '160px';
    savarona.style.left = '295px';
    roku.style.top = '-25px';
    roku.style.left = '350px';
    crazyfox.style.top = '350px';
    crazyfox.style.left = '-20px';
    goldenstar.style.top = '0px';
    goldenstar.style.left = '295px';
    euslot.style.top = '260px';
    euslot.style.left = '-30px';
    webby.style.top = '395px';
    webby.style.left = '245px';
}