export class SlideBanner{
    id: number;
    title: string;
    content: string;
    state: string;
    created: number;
    updated: number;
    status: number;
    constructor(id: number, title: string, content: string, state: string,
     created: number, updated: number, status: number) {
        this.title = title;
        this.content = content;
        this.state = state;
        this.created = created;
        this.updated = updated;
        this.status = status;
    } 
}