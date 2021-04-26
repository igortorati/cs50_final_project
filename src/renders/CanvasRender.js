class CanvasRender {
    constructor() {

    }

    update(event, data) {
        const events = {
            compare(data) {
                console.log("Comparing: ", data);
            },
            swap(data) {
                console.log("Swaping: ", data);
            },
            rightPosition(data) {
                console.log(data, " is in correct position.");
            }
        }
    }
}