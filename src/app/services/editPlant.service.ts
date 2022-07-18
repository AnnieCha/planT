import { Plant } from '../shared/models/plant';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class EditPlantService {
    public ownName?: string;
    public startDate?: Date;

    public setOwnName(name: string){
        this.ownName = name;
    }

    public setStartDate(date: Date){
        this.startDate = date;
    }

    public getOwnName() {
        return this.ownName;
    }

    public getStartDate() {
        return this.startDate;
    }

}