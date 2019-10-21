import Memento from "./Memento";

export default class CareTaker {
    
    private history: Array<Memento>;
    private currState: number = -1;

    constructor() {
        this.history = [];
    }

    public addMemento(m: Memento): void {
        this.history.push(m);
        this.currState = this.history.length - 1;
    }

    public getMemento(index: number): Memento {
        return this.history[index];
    }

    public undo(): Memento {
        console.log("Undoing state...");
        if(this.currState <= 0) {
            this.currState = 0;
            return this.getMemento(0);
        }

        this.currState--;
        return this.getMemento(this.currState);
    }

    public redo(): Memento {
        console.log("Redoing state...");
        if(this.currState >= this.history.length - 1) {
            this.currState = this.history.length - 1;
            return this.getMemento(this.currState);
        }

        this.currState++;
        return this.getMemento(this.currState);
    }
}