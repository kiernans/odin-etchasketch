const container = document.querySelector('.container');
container.innerHTML = '';
const HEIGHT = 16;
const WIDTH = 16;

for(let i = 0; i < HEIGHT * WIDTH; i++) {
    const box = document.createElement('div');
    box.classList = 'box';
    container.appendChild(box);
}

const button = document.querySelector('.change');
button.addEventListener('click', () => {
    let newSize = prompt('How many boxes?');
    if((typeof newSize === 'number')) newSize = 16;
    if(newSize > 100) newSize = 100;
    if(newSize < 1) newSize = 1;
    const newHeight = newSize;
    const newWidth = newSize;

    for(let i = 0; i < HEIGHT * WIDTH; i++){
        var child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    }

    for(let i = 0; i < newHeight * newWidth; i++) {
        const box = document.createElement('div');
        box.classList = 'box';
        container.appendChild(box);
    }
    
    

});


