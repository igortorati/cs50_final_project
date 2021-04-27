class InsertionSort{
    constructor() {
    }
    
    async sort() {
        var arraySize = ARRAY.length;
        var i, j;

        for (i = 0; i < arraySize && RUNNING; i++) {
            var pivot = ARRAY[i];
            var j = i - 1;

            while (j >= 0 && await compareGreater(j, j + 1) && RUNNING) {
                await swap(j, j + 1)
                j--;
            }
            
            CANVAS_RENDER.update("swap", [i, j + 1]);
            await sleep(SLEEP_TIME * SWAP_SLEEP_MODFIER);
            CANVAS_RENDER.update("finishSwap", [i, j + 1]);
            if (RUNNING){
                ARRAY[j + 1] = pivot;
            }
            
        }
        for (i = arraySize - 1; i >= 0; i--) {
            CANVAS_RENDER.update("rightPosition", [i]);
            await sleep(SLEEP_TIME);
        }
    }
}

