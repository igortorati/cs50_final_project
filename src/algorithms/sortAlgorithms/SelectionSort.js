class SelectionSort{
    constructor() {
    }
    
    async sort() {
        var arraySize = ARRAY.length;
        var i, j;
        for (i = 0; i < arraySize - 1 && RUNNING; i++) {
            var minPosition = i;
            for (j = i + 1; j < arraySize && RUNNING; j++) {
                if (await compareSmaller(j, minPosition) && RUNNING) {
                    minPosition = j;
                }
            }
            if (RUNNING) {
                if (minPosition != i) {
                    await swap(minPosition, i);
                }
                CANVAS_RENDER.update("rightPosition", [i]);
            }
        }
        CANVAS_RENDER.update("rightPosition", [arraySize - 1]);
    }
}

