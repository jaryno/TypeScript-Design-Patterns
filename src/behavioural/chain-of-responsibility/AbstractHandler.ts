import Handler from "./Handler";

export default abstract class AbstractHandler implements Handler {
    
    protected nextHandler: Handler;

    public setNextHandler(nextHandler: Handler) {
        this.nextHandler = nextHandler;
    }
    
    abstract handle(incomingSuspect: string): void;
}