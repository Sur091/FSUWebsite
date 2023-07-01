

const content = document.querySelectorAll("body");
const buttons =  document.querySelectorAll(".control")
const text = document.querySelectorAll(".text-control")
const toggle_nav = document.getElementById("toggle-nav")
console.log(toggle_nav.classList);



function showToggleMenu() {
    console.log
    document.addEventListener('mousemove', (e) => {
        let xPos = e.clientX;
        if (xPos < 70 && toggle_nav.classList.contains('hide')){
            toggle_nav.classList.remove('hide');
        }
    })
}

function closeToggleMenu() {
    document.addEventListener('mousemove', (e) => {
        let xPos = e.clientX;
        if (xPos > 240 && !toggle_nav.classList.contains('hide')){
            toggle_nav.classList.add('hide');
        }
    })
}


function page_transition() {
    // console.log(text);
    for (let i = 0; i < buttons.length; i++) {
        // console.log(buttons[i]);
        buttons[i].addEventListener('click', (e) => {
            // console.log(buttons[i]);
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active-btn');
                text[j].classList.remove('active-text')
            }
            buttons[i].classList.add('active-btn');
            text[i].classList.add('active-text')
            // console.log(buttons[i], text[i]);
        })
    }
}

page_transition();
closeToggleMenu();
showToggleMenu();