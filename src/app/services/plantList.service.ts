import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

/*
export enum PLANT_LIST_VIEW {
    MY_PLANTS = 0,
    ALL_PLANTS = 1,
}
  */

// TODO: Dieser Service ist eventuell überflüssig -> je nachdem wie wir die Pflanzenliste erstellen wollen
export class PlantListService {
    public listType!: string;

    
    //private _actions$: Subject<BtnAction[]> = new Subject<BtnAction[]>();

    //actions: Observable<BtnAction[]> = this._actions$.asObservable()


    setListType(type: string){
        this.listType = type;
    }

    getListType(){
        return this.listType
    }
}