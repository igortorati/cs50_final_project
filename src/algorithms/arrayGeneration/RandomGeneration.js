class RandomGeneration {
    constructor() {
        
    }

    generate(arraySize) {
        var array = [];
        var i;
        for (i = 0; i < arraySize; i++) {
            array.push(Math.floor(Math.random() * (arraySize - 1)) + 1);
        }
        return array;
    }
}