import ICommand from "./ICommand";
import Receiver from "./Receiver";

export default class TurnOnCommand implements ICommand {

    private receiver: Receiver;

    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.on();
    }
    undo(): void {
        this.receiver.off();
    }
}