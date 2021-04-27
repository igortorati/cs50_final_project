class InsertionSort{
    constructor() {
    }
    
    async sort() {
        var arraySize = ARRAY.length;
        var i, j;

        for (i = 0; i < arraySize && RUNNING; i++) {
            var pivot = ARRAY[i];
            var j = i - 1;

            while (j >= 0 && ARRAY[j] > pivot && RUNNING) {
                await this.swap(j, j + 1)
                j--;
            }
            
            CANVAS_RENDER.update("swap", [i, j + 1]);
            await sleep(SLEEP_TIME * SWAP_SLEEP_MODFIER);
            CANVAS_RENDER.update("finishSwap", [i, j + 1]);
            if (RUNNING){
                ARRAY[j + 1] = pivot;
            }
            
        }
    }

    async swap(p1, p2) {
        CANVAS_RENDER.update("swap", [p1, p2]);
        await sleep(SLEEP_TIME * SWAP_SLEEP_MODFIER);
        CANVAS_RENDER.update("finishSwap", [p1, p2]);
        if (RUNNING){
            var temp = ARRAY[p1];
            ARRAY[p1] = ARRAY[p2];
            ARRAY[p2] = temp;
        }
    }
}

