import IItrerableCollection from "./IIterableCollection";
import CustomIterableCollection from "./CustomIterableCollection";
import IIterator from "./IIterator";

let collection: IItrerableCollection<string> = new CustomIterableCollection();
let iter: IIterator<string> = collection.createIterator();

let i = 0;
while(iter.hasMore()) {
    let result = iter.getNext();
    console.log(++i + "> " + result);
}