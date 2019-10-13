export default interface IIterator<T> {

    getNext(): T;
    hasMore(): boolean;

}