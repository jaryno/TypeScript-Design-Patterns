import Originator from "./Originator";
import CareTaker from "./CareTaker";

let originator = new Originator();
let careTaker = new CareTaker();

originator.setArticle("State 1");
careTaker.addMemento(originator.save());
printState(originator);

originator.setArticle("State 2");
careTaker.addMemento(originator.save());
printState(originator);

originator.restore(careTaker.undo());
printState(originator);

originator.restore(careTaker.redo());
printState(originator);

function printState(o: Originator) {
    console.log("Current state: " + o.getArticle());
}