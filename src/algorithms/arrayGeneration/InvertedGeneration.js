class InvertedGeneration {
    constructor() {

    }

    generate(arraySize) {
        var array = [];
        var i;
        for (i = arraySize; i > 0; i--) {
            array.push(i);
        }
        return array;
    }
}