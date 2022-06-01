const BOXES = 16;
const LIMIT = 100;
const GRIDSIZE = 700;
const BOXSCALE = GRIDSIZE/BOXES;

const container = document.querySelector('.container');
container.innerHTML = '';
container.style.height = `${GRIDSIZE}px`;
container.style.width = `${GRIDSIZE}px`;

let removeChildren = (height, width) => {
    for(let i = 0; i < height*width; i++){
        var child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    }
};

let buildGrid = (height, width, scale) => {
    for(let i = 0; i < height * width; i++) {
        const box = document.createElement('div');
        box.classList = 'box';
        box.style.height = `${scale}px`;
        box.style.width = `${scale}px`;
        container.appendChild(box);
    }
};



buildGrid(BOXES, BOXES, BOXSCALE);

let slider = document.getElementById('slider');
slider.onchange = () => {
    const newHeight = slider.value;
    const newWidth = slider.value;
    const scale = GRIDSIZE / slider.value;
    removeChildren(BOXES, BOXES);
    buildGrid(newHeight, newWidth, scale);
};

    




