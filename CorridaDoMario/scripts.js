const selecionaCarro = (event) => {
    const selected = document.querySelectorAll('.selected');
    for(let el of selected) {
        el.classList.remove('selected');
    }
    event.target.classList.add('selected')
}

const resetaTudo = () => {
    player1.style.marginLeft = '0px';
    player2.style.marginLeft = '0px';
}

window.onload = () => {
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const start = document.getElementById('start-race-btn');
    const reset = document.getElementById('reset-race-btn');
    const audio = document.getElementById('audioWinner');

    const cars = document.querySelectorAll('.car');
    for(let car of cars) {
        car.addEventListener('click', selecionaCarro);
    }

    player1.style.marginLeft = '0px';
    player2.style.marginLeft = '0px';

    const imgs = document.querySelectorAll('.alternatives img')
    for(let personagem of imgs) {
        personagem.addEventListener('click',(event) => {
            const selected = document.querySelector('.selected')
            selected.style.backgroundImage = `url(${event.target.src})`;
            selected.classList.remove('selected');
        })
    }

    start.addEventListener('click', (event) => {
        player1.style.marginLeft = parseInt(player1.style.marginLeft) + (Math.random() * 200) +'px';
        player2.style.marginLeft = parseInt(player2.style.marginLeft) + (Math.random() * 200) +'px';

        if(parseInt(player1.style.marginLeft) >= window.innerWidth) {
            alert('Player 1 Vencedor!!');
            // audio.play();
            resetaTudo();
        }
        if(parseInt(player2.style.marginLeft) >= window.innerWidth) {
            alert('Player 2 Vencedor!!');
            // audio.play();
            resetaTudo();
        }
    })
    reset.addEventListener('click', resetaTudo);
}