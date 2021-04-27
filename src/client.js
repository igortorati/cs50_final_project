var RUNNING = false;
var ARRAY = [];
var ORDERED = []
var SLEEP_TIME = 100;
const SWAP_SLEEP_MODFIER = 1;
const CANVAS_RENDER = new CanvasRender();
const DEFAULT_BAR_COLOR = "#4d4d4d";
const DEFAULT_CORRECT_COLOR = "green";
const DEFAULT_COMPARE_COLOR = "#a3a3a3";
const DEFAULT_SWAP_COLOR = "red";

const validGenerations = {
    Random_Generation() {
        return new RandomGeneration().generate(arraySize);
    },
    FullRange_Generation() {
        return new FullRangeGeneration().generate(arraySize);
    },
    Inverted_Generation() {
        return new InvertedGeneration().generate(arraySize);
    }
}

const validSorts = {
    Bubble_Sort() {
        return new BubbleSort();
    },
    Selection_Sort() {
        return new SelectionSort();
    },
    Insertion_Sort() {
        return new InsertionSort();
    },
    Merge_Sort() {
        return new MergeSort();
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

async function abort() {
    RUNNING = false;
    await sleep(SLEEP_TIME);

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
        field.innerHTML += '<option value="' + element + '">' + element.replace("_"," ") + '</option>';
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

async function changeArray() {
    if (RUNNING) {
        await abort();
    }
    generateArray();
    renderPage();
}

function changeSpeed() {
    const value = parseInt(document.getElementById("speed").value);
    if(document.getElementById("slowMode").checked) {
        SLEEP_TIME = 1000 - value * 2;
    } else {
        SLEEP_TIME = 200 - value;
    }
}