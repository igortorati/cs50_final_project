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
        i--;
        while (i--) {
            j = Math.floor(Math.random() * (i));
            array.push(values[j]);
            values.splice(j,1);
        }
        console.log(array);
        return array;
    }
}