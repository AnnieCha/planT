export class Plant {
    constructor(public plant_id: number, public name: string, public short_desc: string, public long_desc: string, public wateramount: number, public sunamount: number, public water_liter: number, public water_frequency: number, public imageUrl: string, public ownName?: string, public nextWateringDay?: Date){}
}