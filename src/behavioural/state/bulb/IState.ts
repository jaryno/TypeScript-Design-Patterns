export default interface IState {
    transitionTo(state: IState): void;
    displayState(): void;
}