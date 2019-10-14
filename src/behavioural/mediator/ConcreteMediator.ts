import IMediator from "./IMediator";
import Component from "./Component";

export default class ConcreteMediator implements IMediator {
    
    private readonly COMPONENT_A = "Component-A";
    private readonly COMPONENT_B = "Component-B";

    private regCompMap: Record<string, Component> = {};

    notify(sender: Component, message: string): void {
        let senderName = sender.getName();

        if(senderName === this.COMPONENT_A) {
            this.reactOnA(message);
        } else if(senderName === this.COMPONENT_B) {
            this.reactOnB(message);
        }
    }
    
    register(component: Component): void {
        this.regCompMap[component.getName()] = component;
    }

    private reactOnA(message: string) {
        console.log("Mediator is in action: ");
        this.regCompMap[this.COMPONENT_A].receive(message);
    }

    private reactOnB(message: string) {
        console.log("Mediator is in action: ");
        this.regCompMap[this.COMPONENT_B].receive(message);

    }

}