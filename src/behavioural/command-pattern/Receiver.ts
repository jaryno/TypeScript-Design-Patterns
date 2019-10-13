export default abstract class Receiver {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract on(): void;
    abstract off(): void;

}