export class Card {
    title: string
    price:number
    users:number
    storage:number
    publicProjects:number
    communityAccess:number
    privateProjects:number
    phoneSupport:number
    freeSubDomains:number
    ud:number
    monthlyStatus:number

    constructor(t,p,u,s,pub,c, pp, ps,fs,ms,d)
    {
        this.title= t
        this.communityAccess = c;
        this.freeSubDomains= fs;
        this.monthlyStatus = ms;
        this.phoneSupport = ps;
        this.price = p;
        this.privateProjects = pp;
        this.publicProjects = pub;
        this.users = u;
        this.storage = s
        this.ud = d

    }

}