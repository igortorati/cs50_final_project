class CanvasRender {
    

    constructor() {
        this.canvas;
        this.context;
        this.leftOffset;
        this.barWidth = MINIMUM_BAR_SIZE;
    }

    setCanvas (canvas) {
        this.canvas = canvas;
        this.setContext(canvas.getContext("2d"));
    }

    setContext(context) {
        this.context = context;
    }

    getOffset() {
        return this.leftOffset;
    }

    setOffset(offset) {
        this.leftOffset = offset;
    }

    setBarWidth(barWidth) {
        this.barWidth = (barWidth < MINIMUM_BAR_SIZE) ? MINIMUM_BAR_SIZE : barWidth;
    }

    getBarWidth() {
        return this.barWidth;
    }

    populateCanvas() {
        this.clear();
        //console.log("Populating");
        var i;
        var drawFrom = this.leftOffset;
        if (ARRAY){
            for (i = 0; i < ARRAY.length; i++) {
                this.drawBar(drawFrom, ARRAY[i], "black");
                drawFrom += this.barWidth + MINIMUM_BAR_SIZE;
            }
            for (i = 0; i < ORDERED.length; i++) {
                var basePosition = MINIMUM_BAR_MARGIN * ORDERED[i] + this.leftOffset;
                var drawFrom = ORDERED[i] * this.barWidth + basePosition;
                this.drawBar(drawFrom, ARRAY[ORDERED[i]], "green");
                drawFrom += this.barWidth + MINIMUM_BAR_SIZE;
            }
        }        
    }

    update(event, data) {
        if (ARRAY) {
            const events = {
                compare(data) {
                    //console.log("Comparing: ", data);
                    data.forEach(element => {
                        const basePosition = MINIMUM_BAR_MARGIN * element + CANVAS_RENDER.getOffset();
                        const drawFrom = element * CANVAS_RENDER.getBarWidth() + basePosition;
                        CANVAS_RENDER.drawBar(drawFrom, ARRAY[element], "#a3a3a3");
                    });
                },
                swap(data) {
                    //console.log("Swaping: ", data);
                    CANVAS_RENDER.populateCanvas();
                    data.forEach(element => {
                        const basePosition = MINIMUM_BAR_MARGIN * element + CANVAS_RENDER.getOffset();
                        const drawFrom = element * CANVAS_RENDER.getBarWidth() + basePosition;
                        CANVAS_RENDER.drawBar(drawFrom, ARRAY[element], "red");
                    });
                },
                rightPosition(data) {
                    //console.log(data, " is in correct position.");
                    ORDERED.push(data[0]);
                    var basePosition = MINIMUM_BAR_MARGIN * data[0] + CANVAS_RENDER.getOffset();
                    var drawFrom = data[0] * CANVAS_RENDER.getBarWidth() + basePosition;
                    CANVAS_RENDER.drawBar(drawFrom, ARRAY[data[0]], "green");
                    drawFrom += CANVAS_RENDER.barWidth + MINIMUM_BAR_SIZE;
                },
                finishCompare(data) {
                    //console.log("Comparing: ", data);
                    data.forEach(element => {
                        const basePosition = MINIMUM_BAR_MARGIN * element + CANVAS_RENDER.getOffset();
                        const drawFrom = element * CANVAS_RENDER.getBarWidth() + basePosition;
                        CANVAS_RENDER.drawBar(drawFrom, ARRAY[element], "black");
                    });
                },
                finishSwap(data) {
                    //console.log("Swaping: ", data);
                    CANVAS_RENDER.populateCanvas();
                    data.forEach(element => {
                        const basePosition = MINIMUM_BAR_MARGIN * element + CANVAS_RENDER.getOffset();
                        const drawFrom = element * CANVAS_RENDER.getBarWidth() + basePosition;
                        CANVAS_RENDER.drawBar(drawFrom, ARRAY[element], "black");
                    });
                }

            }

            events[event](data);
        }
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBar(drawFrom, height, color) {
        //console.log(drawFrom, " ", height)
        const h = (height * HEIGHT_SCALE);
        //console.log("Real Height: ", height, " Converted: ", h);
        this.context.fillStyle = color;
        this.context.fillRect(drawFrom, this.canvas.height - h, this.barWidth, h);
    }

    
}
