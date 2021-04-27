var RUNNING = false;

function start() {
    sortMethod = document.getElementById("sortingAlgorithm").value;
    toggleOptionsStart();

    RUNNING = true;

    // Sort by selected algorithm
    sort(sortMethod, CanvasRender.getArray());

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
    const validSorts = {
        BubbleSort() {
            return new BubbleSort();
        }
    }

    const choosenSort = validSorts[sortMethod]();
    if (choosenSort) {
        choosenSort.subscribe(CanvasRender);
        console.log("Calling ", sortMethod);
        choosenSort.sort(array);
    }
}

function abort() {
    RUNNING = false;

    toggleOptionsFinish();
}

function generateArray() {
    genMethod = document.getElementById("generatingAlgorithm").value;

    const validGenerations = {
        RandomGeneration() {
            arraySize = parseInt(document.getElementById("arraySize").value);
            return RandomGeneration.generate(arraySize);
        }
    }

    const choosenGen = validGenerations[genMethod];
    if (choosenGen) {
        console.log("Generating Array with ", genMethod);
        CanvasRender.setArray(choosenGen());
    }
}

function onPageCreate() {
    CanvasRender.setCanvas(document.getElementById("sortingCanvas"));

    generateArray();

    renderPage();
}

function renderPage() {
    generatePage();
    CanvasRender.setOffset(offset);
    CanvasRender.setBarWidth(barWidth);
    CanvasRender.populateCanvas();
}

function changeArraySize() {
    generateArray();
    renderPage();
}