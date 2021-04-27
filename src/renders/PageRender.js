const MINIMUM_BAR_SIZE = 2;
const MINIMUM_BAR_MARGIN = 2;
var HEIGHT_SCALE = 1;
const HEIGHT_INCREMENT = 10; // offset in pixels from the botton of the canvas
const CANVAS_WINDOW_WIDTH = 0.9; // canvas width, in % of window size
const MAX_ARRAY_SIZE = 250;

function calculateCanvasDimensions(windowWidth, arraySize) {
    const minimumWidth = arraySize * (MINIMUM_BAR_MARGIN + MINIMUM_BAR_SIZE);
    
    const navbarSize = parseInt(document.querySelector("nav").offsetHeight) + 10;
    const minimumHeight = arraySize * 2 + HEIGHT_INCREMENT;

    const calculatedHeight = window.innerHeight - navbarSize;

    const width = Math.floor((windowWidth < minimumWidth) ? minimumWidth : windowWidth);
    const height = (calculatedHeight < minimumHeight) ? minimumHeight : calculatedHeight;
    return { 
        width,
        height
    };
}

function calculateBarWidth(windowWidth, arraySize) {
    const avaiableWidth = windowWidth - (arraySize * MINIMUM_BAR_MARGIN); // Avaiable size is the canvas size minus the margin of 2 px between each bar;
    return Math.floor(avaiableWidth/arraySize);
}

function calculateLeftOffset(windowWidth, arraySize, barWidth) {
    return Math.floor((windowWidth - (arraySize * barWidth) - (arraySize * MINIMUM_BAR_MARGIN)) / 2);
}

function calculateHeightScale(arraySize, height) {
    return Math.floor((height - HEIGHT_INCREMENT) / arraySize) ;
}

function setCanvasDimension(width, height) {
    const canvas = document.getElementById("sortingCanvas");
    canvas.width = width;
    canvas.height = height;
}

function setBarWidth(barWidth) {
    const root = document.querySelector(':root');
    root.style.setProperty("--barWidth", (barWidth < MINIMUM_BAR_SIZE)? MINIMUM_BAR_SIZE : barWidth);
}

function generatePage() {
    if (!RUNNING){
        const windowWidth = window.innerWidth * CANVAS_WINDOW_WIDTH;
        var arraySize = parseInt(document.getElementById("arraySize").value);
        arraySize = (arraySize <= MAX_ARRAY_SIZE)? arraySize : MAX_ARRAY_SIZE;
        
    
        const { width, height } = calculateCanvasDimensions(windowWidth, arraySize);
        //console.log("CW: ", width, " CH: ", height);
        setCanvasDimension(width, height);
    
        HEIGHT_SCALE = calculateHeightScale(arraySize, height);
    
    
        barWidth = calculateBarWidth(windowWidth, arraySize);
        setBarWidth(barWidth);
        //console.log("barWidth:", barWidth);
    
        offset = calculateLeftOffset(windowWidth, arraySize, barWidth);
        //console.log("O:", offset)
    }
    
}