import LightBulb from "./LightBulb";
import IState from "./IState";

export default class OffState implements IState {

    bulb: LightBulb;

    constructor(bulb: LightBulb) {
        this.bulb = bulb;
    }

    /**
     * @override
     */
    transitionTo(nextState: IState): void {
        this.bulb.setCurrentState(nextState);
    }

    /**
     * @override
     */
    displayState(): void {
        console.log("Light bulb is turned off");
    }

}