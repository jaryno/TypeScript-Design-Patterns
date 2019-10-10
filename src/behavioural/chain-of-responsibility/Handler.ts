export default interface Handler {

    setNextHandler(handler: Handler): void;

    handle(incomingSuspect: string): void;

}