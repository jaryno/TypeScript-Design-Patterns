import Memento from "./Memento";

export default class Originator {

    private article: string;

    constructor() {
    }

    public setArticle(article: string): void {
        this.article = article;
    }

    public getArticle(): string {
        return this.article;
    }

    public save(): Memento {
        return new Memento(this.article)
    }

    public restore(m: Memento): void {
        this.article = m.getState();
    }
}