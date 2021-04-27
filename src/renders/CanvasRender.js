class CanvasRender {
    

    constructor() {
        this.array;
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

    setArray(array) {
        this.array = array;
    }

    getArray() {
        return this.array;
    }

    setOffset(offset) {
        this.leftOffset = offset;
    }

    setBarWidth(barWidth) {
        this.barWidth = (barWidth < MINIMUM_BAR_SIZE) ? MINIMUM_BAR_SIZE : barWidth;
    }

    populateCanvas() {
        this.clear();
        //console.log("Populating");
        var i;
        var drawFrom = this.leftOffset;
        if (this.array){
            for (i = 0; i < this.array.length; i++) {
                this.drawBar(drawFrom, this.array[i], "black");
                drawFrom += this.barWidth + MINIMUM_BAR_SIZE;
            }
        }
        
    }

    update(event, data) {
        if (this.array) {
            const events = {
                compare(data) {
                    //console.log("Comparing: ", data);
                },
                swap(data) {
                    //console.log("Swaping: ", data);
                },
                rightPosition(data) {
                    //console.log(data, " is in correct position.");
                }
            }
            events[event](data);
        }
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBar(drawFrom, height, color) {
        //console.log(position, " ", height)

        this.context.beginPath();
        const h = (height * HEIGHT_SCALE);
        //console.log("Real Height: ", height, " Converted: ", h);
        this.context.rect(drawFrom, this.canvas.height - h, this.barWidth, h);
        this.context.fillStyle = color;
        this.context.fill();
    }
}