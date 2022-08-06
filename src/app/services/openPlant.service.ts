import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class OpenPlantService {
    // TODO: suchbegriff statt daten, die in der suchfeld-component ermittelt werden
    editMode: boolean = false;
    selectedPlant!: string; // später vielleicht eher Plant? 
    
    public setEditMode(editmode: boolean){
        this.editMode = editmode;
    }

    public getEditMode(){
        return this.editMode;
    }

    public setSelectedPlant(plant: string){
        this.selectedPlant = plant;
    }

    public getSelectedPlant(){
        return this.selectedPlant;
    }
}