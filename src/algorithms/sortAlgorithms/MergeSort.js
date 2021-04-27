class MergeSort {
    constructor() {
    }

    async merge(begin, middle, end) {
        var secondSubArrayBegin = middle + 1;
        if (RUNNING && await compareSmaller(middle, secondSubArrayBegin)) {
            return;
        }

        while (begin <= middle && secondSubArrayBegin <= end && RUNNING) {
            if (RUNNING && await compareSmaller(begin, secondSubArrayBegin)) {
                begin ++;
            } else {
                var pivot = secondSubArrayBegin;

                while (pivot != begin && RUNNING) {
                    
                    await swap(pivot, pivot - 1)
                    await CANVAS_RENDER.populateCanvas();
                    
                    pivot--;
                }

                await CANVAS_RENDER.populateCanvas();

                begin++;
                middle++;
                secondSubArrayBegin++;
            }
        }
    }

    async mergeSort(begin, end) {
        if (begin < end) {
            var middle = Math.floor((begin + end) / 2);

            await this.mergeSort(begin, middle);
            await this.mergeSort(middle + 1, end);

            await this.merge(begin, middle, end);
        }
    }

    async sort() {
        await this.mergeSort(0, ARRAY.length - 1);
        var i;
        for (i = 0; i < ARRAY.length && RUNNING; i++) {
            CANVAS_RENDER.update("rightPosition", [i]);
            await sleep(SLEEP_TIME);
        }
    }
}