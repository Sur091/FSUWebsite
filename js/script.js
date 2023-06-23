

const content = document.querySelectorAll("body");
const buttons =  document.querySelectorAll(".control")
// console.log(controls);

function toggleMenu() {
    
}

function page_transition() {
    // console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
        // console.log(buttons[i]);
        buttons[i].addEventListener('click', (e) => {
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active-btn');
            }
            buttons[i].classList.add('active-btn');
        })
    }
}

page_transition();