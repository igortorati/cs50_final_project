var RUNNING = false;
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

function start() {
    sortMethod = document.getElementById("sortingAlgorithm").value;
    toggleOptionsStart();

    RUNNING = true;

    // Sort by selected algorithm
    sort(sortMethod, CANVAS_RENDER.getArray());

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

function sort(sortMethod, array){
    

    const choosenSort = validSorts[sortMethod]();
    if (choosenSort) {
        choosenSort.subscribe(CANVAS_RENDER);
        console.log("Calling ", sortMethod);
        choosenSort.sort(array);
        choosenSort.unsubscribe(CANVAS_RENDER);
    }
}

function abort() {
    RUNNING = false;

    toggleOptionsFinish();
}

function generateArray() {
    genMethod = document.getElementById("generatingAlgorithm").value;

    arraySize = parseInt(document.getElementById("arraySize").value);
    

    const choosenGen = validGenerations[genMethod];
    if (choosenGen) {
        console.log("Generating Array with", genMethod);
        CANVAS_RENDER.setArray(choosenGen());
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
    generateArray();
    renderPage();
}