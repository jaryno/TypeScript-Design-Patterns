import Component from "./Component";
import IMediator from "./IMediator";

export default class ComponentB extends Component {

    constructor(m: IMediator) {
        super("Component-B", m);
    }


    /**
     * @override
     */
    public send(): void {
        let message = "Hey! What's up.";
        console.log("B is sending: " + message);
        this.mediator.notify(this, message);
    }    
    
    /**
     * @override
     * @param message 
     */
    public receive(message: string): void {
        console.log("Component B got: " + message);
    }


}