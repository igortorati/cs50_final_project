import { Observable } from "../utils/Observable";

class BubbleSort extends Observable{
    constructor(array) {
        this.array = array;
    }
    
    sort() {
        var i, j, temp;
        var finished;
        const arraySize = this.array.length
        for (i = 0; i < arraySize - 1 && !finished; i++) {
            finished = true;
            for (j = 0; j < arraySize - i - 1; j++) {
                this.notifyAll("compare", [j, j+1]);
                if (this.array[j] > this.array[j+1]) {
                    this.notifyAll("swap", [j, j+1]);
                    this.swap(j, j+1);
                    finished = false;
                }
            }
            this.notifyAll("rightPosition", [arraySize - i - 1]);
        }
    }

    swap(p1, p2) {
        var temp = this.array[p1];
        this.array[p1] = this.array[p2];
        this.array[p2] = temp;
    }
}

