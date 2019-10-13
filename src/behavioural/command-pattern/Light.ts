import Receiver from "./Receiver";

export default class Light extends Receiver {
    
    constructor(name: string) {
        super(name);
    }

    /**
     * @override
     */
    on(): void {
        console.log("Light is on");
    }

    /**
     * @override
     */
    off(): void {
        console.log("Light is off");
    }
}