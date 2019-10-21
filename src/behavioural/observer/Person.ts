import IObserver from "./IObserver";

export default class Person implements IObserver {
    
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * @override 
     */
    notifyMe(i: number): void {
        console.log(`${this.name} got notified. Golden number is: ${i}`);
    }
}