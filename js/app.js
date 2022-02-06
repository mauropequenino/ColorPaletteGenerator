const btn = document.getElementById('btn');
const card_color = document.querySelectorAll('.card-color');
const hex_text = document.querySelectorAll('.hex');

btn.addEventListener('click', generateColor);

function generateColor() {
    for(let i = 0; i < card_color.length; i++){
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        card_color[i].style.background = "#" + randomColor;
        hex_text[i].innerHTML = "#" + randomColor;
        card_color[i].classList.add('fade-in');
        setTimeout(() => card_color[i].classList.remove('fade-in'), 300);
    }
}

generateColor();