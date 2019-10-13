import Invoker from "./Invoker";
import ICommand from "./ICommand";
import Receiver from "./Receiver";
import Light from "./Light";
import TurnOnCommand from "./TurnOnCommand";
import Motor from "./Motor";

export default class Client {

    private invoker: Invoker;
    private commandArray: Array<ICommand>;

    public static main(): void {
        let client: Client = new Client();
        client.run();
    }

    public run(): void {

        let receiver: Receiver = new Light("Flash light");
        let command: ICommand = new TurnOnCommand(receiver);
        this.commandArray = [];
        this.commandArray.push(command);

        this.invoker = new Invoker(command);
        this.invoker.executeCommand();

        let receiver2: Receiver = new Motor("motor");
        let command2: ICommand = new TurnOnCommand(receiver2);
        this.commandArray.push(command2);

        this.invoker.setCommand(command2);
        this.invoker.executeCommand();

        this.commandArray.forEach(commandBackup => {
            this.invoker.setCommand(commandBackup);
            this.invoker.undoCommand();
        });
    }
}