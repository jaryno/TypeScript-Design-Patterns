import Handler from "./Handler";
import CivilianVehicleHandler from "./CivilianVehicleHandler";
import FiretruckHandler from "./FiretruckHandler";
import AmbulanceHandler from "./AmbulanceHandler";
import PoliceSUVHandler from "./PoliceSUVHandler";

let civilianHandler = new CivilianVehicleHandler();
let firetruckHandler = new FiretruckHandler();
let ambulanceHandler = new AmbulanceHandler();
let policeSUVHandler = new PoliceSUVHandler();

civilianHandler.setNextHandler(firetruckHandler);
firetruckHandler.setNextHandler(ambulanceHandler);
ambulanceHandler.setNextHandler(policeSUVHandler);

function getVehicleHandler():Handler {
    return civilianHandler;
}

export function run() {

    let vehicleType = "POLICE_SUV";
    let vehicleHandler = getVehicleHandler();
    vehicleHandler.handle(vehicleType);
}