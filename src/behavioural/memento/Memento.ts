export default class Memento {

    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }

    public setState(state: string) {
        this.state = state;
    }

}