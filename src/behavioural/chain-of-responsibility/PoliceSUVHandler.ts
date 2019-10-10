import AbstractHandler from "./AbstractHandler";

export default class PoliceSUVHandler extends AbstractHandler {
    
    /**
     * @override
     * @param incomingSuspect 
     */
    handle(incomingSuspect: string): void {

        if(incomingSuspect === "POLICE_SUV") {
            console.log("Validate ID for: " + incomingSuspect);
            console.log("Do exhausive search.");
            console.log("Give Access");
            return;
        }

        this.nextHandler.handle(incomingSuspect);
    }
}