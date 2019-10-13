import IIterator from "./IIterator";
import CustomIterableCollection from "./CustomIterableCollection";

export default class CustomIterableCollectionIterator implements IIterator<string> {

    private collection: CustomIterableCollection;

    private collectionSize: number;
    private currentIndex: number = -1;

    constructor(collection: CustomIterableCollection) {
        this.collection = collection;
        this.collectionSize = collection.size();    
    }

    /**
     * @override
     */
    getNext(): string {
        return this.collection.getStringAtIndex(++this.currentIndex);
    }

    /**
     * @override
     */
    hasMore(): boolean {
        return this.currentIndex + 1 < this.collectionSize;
    }
    

}