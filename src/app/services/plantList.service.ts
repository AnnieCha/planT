import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

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