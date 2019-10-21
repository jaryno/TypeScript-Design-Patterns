import IObserver from "./IObserver";

export default interface ISubject {

    register(o: IObserver): void;
    unregister(o: IObserver): void;

    notifyObservers(): void;


}