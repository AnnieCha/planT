import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export enum PLANT_LIST_VIEW {
    MY_PLANTS = 0,
    ALL_PLANTS = 1,
}

export enum LIST_MODE {
    INFO_MODE = 0,
    EDIT_MODE = 1,
}
  

// TODO: Dieser Service ist eventuell überflüssig -> je nachdem wie wir die Pflanzenliste erstellen wollen
export class PlantListService {
    public listType!: string;

    setListType(type: string){
        this.listType = type;
    }

    getListType(){
        return this.listType
    }
}