class Counter {
    private static instanceCount: number = 0;

    constructor() {
        Counter.instanceCount++;
    }
    static getInstanceCount(): number {
        return Counter.instanceCount;
    }
}


const counter1 = new Counter();
const counter2 = new Counter();
const counter3 = new Counter();

console.log(`Number of instances created: ${Counter.getInstanceCount()}`); // Output: Number of instances created: 3