import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export enum PLANT_LIST_VIEW {
    MY_PLANTS = 0,
    ALL_PLANTS = 1,
}

export interface BtnAction {
    icon: string;
    btnText: string;
}

// TODO: Dieser Service ist eventuell überflüssig -> je nachdem wie wir die Pflanzenliste erstellen wollen
export class PlantListService {
    
    public listType!: string;
    //default action für beide modi
   

    private _actions$: Subject<BtnAction[]> = new Subject<BtnAction[]>();

    actions: Observable<BtnAction[]> = this._actions$.asObservable()

    setListType(type: string){
        this.listType = type;
    }

    getListType(){
        return this.listType
    }
}