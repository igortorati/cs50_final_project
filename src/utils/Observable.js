class Observable {
    constructor() {
        this.subscribers = [];
    }

    subscribe(object) {
        this.subscribers.push(object);
    }

    unsubscribe(object) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber != object);
    }

    notifyAll(event, data) {
        //console.log("Notifying all: ", event)
        this.subscribers.forEach(subscriber => subscriber.update(event, data));
    }
}