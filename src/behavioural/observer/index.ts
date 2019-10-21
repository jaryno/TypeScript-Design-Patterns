import RadioStation from "./RadioStation";
import Person from "./Person";

let radio = new RadioStation();
let ob1 = new Person("Vlad");
let ob2 = new Person("Niko");
let ob3 = new Person("Roman");
let ob4 = new Person("Karel");

radio.notifyObservers();

radio.register(ob1);
radio.register(ob2);

radio.notifyObservers();

radio.register(ob3);
radio.updateGoldenNumber(4);

radio.unregister(ob1);
radio.unregister(ob2);
radio.register(ob4);
radio.updateGoldenNumber(10);
