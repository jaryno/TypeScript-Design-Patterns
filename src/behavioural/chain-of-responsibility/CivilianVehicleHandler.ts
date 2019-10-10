import AbstractHandler from "./AbstractHandler";

export default class CivilianVehicleHandler extends AbstractHandler {
    
    /**
     * @override
     * @param incomingSuspect 
     */
    handle(incomingSuspect: string): void {

        if(incomingSuspect === "CIVILIAN_SUV") {
            console.log("Validate ID for: " + incomingSuspect);
            console.log("Do exhausive search.");
            console.log("Do Minor interrogation");
            return;
        }

        this.nextHandler.handle(incomingSuspect);
    }
}