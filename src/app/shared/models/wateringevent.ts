export class Wateringevent {
    public weekdayString: string = "";

    constructor(public plant_id: number, public nextWateringDay: Date, public ownName: string, public weekday: number){}

    setWeekdayString(week: string) {
        this.weekdayString = week;
    }
}
