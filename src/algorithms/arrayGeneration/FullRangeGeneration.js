class FullRangeGeneration {
    constructor() {

    }

    generate(arraySize) {
        var values = [];
        var i;
        for (i = 1; i <= arraySize; i++) {
            values.push(i);
        }
        var array = [];
        var j;
        while (i--) {
            j = Math.floor(Math.random() * (i-1));
            array.push(values[j]);
            values.splice(j,1);
        }
        console.log(array);
        return array;
    }
}