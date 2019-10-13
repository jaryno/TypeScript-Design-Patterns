import IItrerableCollection from "./IIterableCollection";
import IIterator from "./IIterator";
import CustomIterableCollectionIterator from "./CustomIterableCollectionIterator";

export default class CustomIterableCollection implements IItrerableCollection<string> {

    internalArray: Array<string>;

    constructor() {
        this.internalArray = [];
        this.internalArray.push("I");
        this.internalArray.push("Love");
        this.internalArray.push("Binary");
    }
    
    public createIterator(): IIterator<string> {
        return new CustomIterableCollectionIterator(this);
    }

    public size(): number {
        return this.internalArray.length;
    }

    public getStringAtIndex(i: number): string {
        return this.internalArray[i];
    }



}