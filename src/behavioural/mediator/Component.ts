import IMediator from "./IMediator";

export default abstract class Component {

    private name: string;
    protected mediator: IMediator;

    constructor(name: string, mediator: IMediator) {
        this.name = name;
        this.mediator = mediator;
    }

    public abstract send(): void;
    public abstract receive(message: string): void;

    public getName(): string {
        return this.name;
    }

}