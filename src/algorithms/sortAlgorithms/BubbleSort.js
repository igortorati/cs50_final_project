class BubbleSort{
    constructor() {
    }
    
    async sort() {
        var i, j, temp;
        var finished;
        const arraySize = ARRAY.length
        for (i = 0; i < arraySize - 1 && !finished && RUNNING; i++) {
            finished = true;
            for (j = 0; j < arraySize - i - 1 && RUNNING; j++) {
                CANVAS_RENDER.update("compare", [j, j+1]);
                await sleep(SLEEP_TIME);
                if (ARRAY[j] > ARRAY[j+1] && RUNNING) {
                    CANVAS_RENDER.update("swap", [j, j+1]);
                    this.swap(j, j+1);
                    finished = false;
                    await sleep(SLEEP_TIME * SWAP_SLEEP_MODFIER);
                    CANVAS_RENDER.update("finishSwap", [j, j+1]);
                } else {
                    CANVAS_RENDER.update("finishCompare", [j, j+1]);
                }
                
            }
            if(RUNNING) {
                CANVAS_RENDER.update("rightPosition", [arraySize - i - 1]);
            }
        }
        for (j = 0; j < arraySize - i && RUNNING; j++) {
            CANVAS_RENDER.update("rightPosition", [j]);
        }
    }

    swap(p1, p2) {
        var temp = ARRAY[p1];
        ARRAY[p1] = ARRAY[p2];
        ARRAY[p2] = temp;
    }
}