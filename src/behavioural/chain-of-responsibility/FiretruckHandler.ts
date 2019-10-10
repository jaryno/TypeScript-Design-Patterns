import AbstractHandler from "./AbstractHandler";

export default class FiretruckHandler extends AbstractHandler {
    
    /**
     * @override
     * @param incomingSuspect 
     */
    handle(incomingSuspect: string): void {

        if(incomingSuspect === "FIRE_TRUCK") {
            console.log("Validate ID for: " + incomingSuspect);
            return;
        }

        this.nextHandler.handle(incomingSuspect);
    }
}