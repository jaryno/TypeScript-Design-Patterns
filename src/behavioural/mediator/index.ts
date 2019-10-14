import ConcreteMediator from "./ConcreteMediator";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

let mediator = new ConcreteMediator();

let componentA = new ComponentA(mediator);
let componentB = new ComponentB(mediator);

mediator.register(componentA);
mediator.register(componentB);

componentA.send();
console.log("---------------------");
componentB.send();
