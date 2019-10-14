import Component from "./Component";

export default interface IMediator {

    notify(sender: Component, message: string): void;

    register(component: Component): void;
}