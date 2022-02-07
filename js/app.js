const btn = document.getElementById('btn');
const bg_card_color = document.querySelectorAll('.card-color');
const hex_code = document.querySelectorAll('.hex');

btn.addEventListener('click', generateColor);

function generateColor() {
    for(let i = 0; i < card_color.length; i++){
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        bg_card_color[i].style.background = "#" + randomColor;
        hex_code[i].innerHTML = "#" + randomColor;
        bg_card_color[i].classList.add('fade-in');
        setTimeout(() => bg_card_color[i].classList.remove('fade-in'), 300);
    }
}

generateColor();