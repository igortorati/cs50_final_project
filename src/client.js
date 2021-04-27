var RUNNING = false;
var ARRAY = [];
var ORDERED = []
var SLEEP_TIME = 5;
const CANVAS_RENDER = new CanvasRender();
const validGenerations = {
    RandomGeneration() {
        return new RandomGeneration().generate(arraySize);
    },
    FullRangeGeneration() {
        return new FullRangeGeneration().generate(arraySize);
    },
    InvertedGeneration() {
        return new InvertedGeneration().generate(arraySize);
    }
}
const validSorts = {
    BubbleSort() {
        return new BubbleSort();
    }
}

async function start() {
    sortMethod = document.getElementById("sortingAlgorithm").value;
    toggleOptionsStart();

    RUNNING = true;

    // Sort by selected algorithm
    await sort(sortMethod);

    RUNNING = false;

    toggleOptionsFinish();
}

function toggleOptionsStart() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("arraySize").disabled = true;
}

function toggleOptionsFinish() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("arraySize").disabled = false;
}

async function sort(sortMethod){
    

    const choosenSort = validSorts[sortMethod]();
    if (choosenSort) {
        console.log("Calling ", sortMethod);
        await choosenSort.sort();
        console.log("Finished ", sortMethod);
    }
}

function abort() {
    RUNNING = false;
    ORDERED = [];
    CANVAS_RENDER.populateCanvas();
    toggleOptionsFinish();
}

function generateArray() {
    genMethod = document.getElementById("generatingAlgorithm").value;

    arraySize = parseInt(document.getElementById("arraySize").value);
    

    const choosenGen = validGenerations[genMethod];
    if (choosenGen) {
        console.log("Generating Array with", genMethod);
        ORDERED = [];
        ARRAY = choosenGen();
    }
}

function generateOptions(field, list) {
    
    Object.keys(list).forEach(element => {
        field.innerHTML += '<option value="' + element + '">' + element + '</option>';
    });
}

function onPageCreate() {
    CANVAS_RENDER.setCanvas(document.getElementById("sortingCanvas"));

    console.log(Object.keys(validGenerations));
    console.log(Object.keys(validSorts));
    const genSelect = document.getElementById("generatingAlgorithm");
    generateOptions(genSelect, validGenerations);

    const sortSelect = document.getElementById("sortingAlgorithm");
    generateOptions(sortSelect, validSorts);

    generateArray();
    renderPage();
}

function renderPage() {
    generatePage();
    CANVAS_RENDER.setOffset(offset);
    CANVAS_RENDER.setBarWidth(barWidth);
    CANVAS_RENDER.populateCanvas();
}

function changeArray() {
    abort();
    generateArray();
    renderPage();
}