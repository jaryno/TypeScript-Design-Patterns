import ISubject from "./ISubject";
import IObserver from "./IObserver";

export default class RadioStation implements ISubject {

    private myObservers: Array<IObserver> = [];
    private goldenNumber: number = 2;

    /**
     * @override
     */
    register(o: IObserver): void {
        this.myObservers.push(o);
    }    
    
    /**
     * @override
     */
    unregister(o: IObserver): void {
        this.myObservers = this.myObservers.filter(observer => o != observer);
    }

    /**
     * @override
     */
    notifyObservers(): void {
        for(let observer of this.myObservers) {
            observer.notifyMe(this.goldenNumber);
        }
    }

    public updateGoldenNumber(i: number): void {
        this.goldenNumber = i;
        this.notifyObservers();
    }


}