import Component from "./Component";
import IMediator from "./IMediator";

export default class ComponentA extends Component {

    constructor(m: IMediator) {
        super("Component-A", m);
    }


    /**
     * @override
     */
    public send(): void {
        let message = "I am good.";
        console.log("A is sending: " + message);
        this.mediator.notify(this, message);
    }    
    
    /**
     * @override
     * @param message 
     */
    public receive(message: string): void {
        console.log("Component A got: " + message);
    }


}