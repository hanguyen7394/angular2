export class Order{
    id: number;
    user_id: number;
    created:number;
    updated:number;
    status: number;
    constructor(id: number, user_id: number, created: number, updated: number, status: number){
        this.id = id;
        this.user_id = user_id;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}