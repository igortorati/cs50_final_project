class SelectionSort{
    constructor() {
    }
    
    async sort() {
        var arraySize = ARRAY.length;
        var i, j;
        for (i = 0; i < arraySize - 1 && RUNNING; i++) {
            var minPosition = i;
            for (j = i + 1; j < arraySize && RUNNING; j++) {
                CANVAS_RENDER.update("compare", [minPosition, j]);
                var temp = minPosition;
                if (ARRAY[j] < ARRAY[minPosition] && RUNNING) {
                    minPosition = j;
                }
                await sleep(SLEEP_TIME);
                CANVAS_RENDER.update("finishCompare", [temp, j]);
            }
            if (RUNNING) {
                if (minPosition != i) {
                    this.swap(minPosition, i);
                    CANVAS_RENDER.update("swap", [minPosition, i]);
                    await sleep(SLEEP_TIME * SWAP_SLEEP_MODFIER);
                    CANVAS_RENDER.update("finishSwap", [minPosition, i]);
                }
                CANVAS_RENDER.update("rightPosition", [i]);
            }
        }
        CANVAS_RENDER.update("rightPosition", [arraySize - 1]);
    }

    swap(p1, p2) {
        var temp = ARRAY[p1];
        ARRAY[p1] = ARRAY[p2];
        ARRAY[p2] = temp;
    }
}

