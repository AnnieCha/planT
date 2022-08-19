import { Wateringevent } from "./wateringevent";

export class CalenderDay {
    public events: any = new Array(0);

    constructor(public name: string){ }

    setWateringevent(event: Wateringevent) {
        console.log("hi im in12312"+ this.name + event.ownName);

        var len = this.events.length +1;
        var newEvents = new Array(len);
        for (let i=0; i<len; i++) {
            console.log("hi im FOR"+ this.name + event.ownName);
            if (i==len-1) {
                newEvents[i] = event;
            } else {
                console.log("hi im FOR else"+ this.name + event.ownName);
                newEvents[i] = this.events[i];
            }
        }
        this.events = newEvents;
    }

}
