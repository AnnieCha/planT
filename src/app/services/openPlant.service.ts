import { Injectable } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';

@Injectable({
    providedIn: 'root'
  })
  export class OpenPlantService {
    // TODO: suchbegriff statt daten, die in der suchfeld-component ermittelt werden
    editMode: boolean = false;
    updatePlantMode: boolean = false;
    ownName?: string;
    startDate?: Date;
    
    public setEditMode(editMode: boolean): void {
        this.editMode = editMode;
    }

    public getEditMode(): boolean {
        return this.editMode;
    }

    public setCurrentValues(ownName: string, nextWateringDay: Date): void{
        this.ownName = ownName;
        this.startDate = nextWateringDay;
    }

    public setUpdatePlantMode(updatePlantMode: boolean): void {
        this.updatePlantMode = updatePlantMode;
        console.log('updateplantmode setting', updatePlantMode);
    }

    public getUpdatePlantMode(): boolean {
        return this.updatePlantMode;
    }

    public getOwnName() {
        return this.ownName ? this.ownName : '';
    }

    public getStartDate(): Date {
        return this.startDate ? this.startDate : new Date();
    }
}