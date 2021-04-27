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
                if (RUNNING && await compareGreater(j, j + 1)) {
                    await swap(j, j+1);
                    finished = false;
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
}