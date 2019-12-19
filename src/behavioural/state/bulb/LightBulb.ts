import IState from "./IState";
import OnState from "./OnState";
import OffState from "./OffState";

export default class LightBulb {

    private lightBulbStateMap: Map<IState, IState> = new Map();

    currentState: IState;

    constructor() {

        let onState = new OnState(this);
        let offState = new OffState(this);

        this.lightBulbStateMap.set(onState, offState);
        this.lightBulbStateMap.set(offState, onState);
        this.currentState = offState;
    }

    public setCurrentState(state: IState): void {
        this.currentState = state;
    }

    public displayState(): void {
        this.currentState.displayState();
    }

    public toggle(): void {
        this.currentState.transitionTo(this.lightBulbStateMap.get(this.currentState));
    }

}