import { PageRender } from "./renders/PageRender";
import { CanvasRender } from "./renders/CanvasRender";
import { BubbleSort } from "./algorithms/sortAlgorithm/BubbleSort";

function generatePage() {
    const windowWidth = window.innerWidth * CANVAS_WINDOW_WIDTH;
    const arraySize = parseInt(document.getElementById("arraySize").value);

    const { width, height } = calculateCanvasDimensions(windowWidth, arraySize);
    //console.log("CW: ", width, " CH: ", height);
    setCanvasDimension(width, height);

    barWidth = calculateBarWidth(windowWidth, arraySize);
    setBarWidth(barWidth);
    //console.log("barWidth:", barWidth);

    offset = calculateLeftOffset(windowWidth, arraySize, barWidth);
    //console.log("O:", offset)
}

function startSorting() {
    sortMethod = document.getElementById("sortingAlgorithm").value;
    var array = [3, 5, 2, 6, 1, 4];
    // Generate Array
    // Sort by selected algorithm
    sort(sortMethod, array);
}

function sort(sortMethod, array){
    const sort = {
        BubbleSort(array) {
            const s = new SortMethod(new BubbleSort(array));
            s.sort();
        }
    }
}