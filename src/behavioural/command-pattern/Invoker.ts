import ICommand from "./ICommand";

export default class Invoker {

    private command: ICommand;

    constructor(command: ICommand) {
        this.command = command;
    }

    public setCommand(command: ICommand): void {
        this.command = command;
    }

    public executeCommand() {
        this.command.execute();
    }

    public undoCommand() {
        this.command.undo();
    }
}