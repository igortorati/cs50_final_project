class InsertionSort{
    constructor() {
    }
    
    async sort() {
        var arraySize = ARRAY.length;
        var i, j;

        for (i = 0; i < arraySize && RUNNING; i++) {
            var pivot = ARRAY[i];
            var j = i - 1;

            while (RUNNING && j >= 0 && await compareGreater(j, j + 1)) {
                await swap(j, j + 1)
                j--;
            }
            
            if (RUNNING){
                ARRAY[j + 1] = pivot;
            }
            
        }
        for (i = arraySize - 1; i >= 0 && RUNNING; i--) {
            CANVAS_RENDER.update("rightPosition", [i]);
            await sleep(SLEEP_TIME);
        }
    }
}

