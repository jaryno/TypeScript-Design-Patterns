import AbstractHandler from "./AbstractHandler";

export default class AmbulanceHandler extends AbstractHandler {
    
    /**
     * @override
     * @param incomingSuspect 
     */
    handle(incomingSuspect: string): void {

        if(incomingSuspect === "AMBULANCE") {
            console.log("Validate ID for: " + incomingSuspect);
            console.log("Do exhausive search");
            console.log("Do Minor interrogation");
            console.log("Check patient");
            return;
        }

        this.nextHandler.handle(incomingSuspect);
    }
}