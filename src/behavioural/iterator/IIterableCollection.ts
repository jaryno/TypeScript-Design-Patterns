import IIterator from "./IIterator";

export default interface IItrerableCollection<T> {

    createIterator(): IIterator<T>;

}