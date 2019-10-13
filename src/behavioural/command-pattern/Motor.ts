import Receiver from "./Receiver";

export default class Motor extends Receiver {
    
    constructor(name: string) {
        super(name);
    }

    /**
     * @override
     */
    on(): void {
        console.log("Motor is on");
    }

    /**
     * @override
     */
    off(): void {
        console.log("Motor is off");
    }
}