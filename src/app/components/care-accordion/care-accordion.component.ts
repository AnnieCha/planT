import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { Wateringevent } from 'src/app/shared/models/wateringevent';
import { Observable, map } from 'rxjs';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {EventService} from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { CalenderDay } from 'src/app/shared/models/calenderDay';

interface CareEventNode {
  name: string;
  children?: SingleInformation[];
}

interface SingleInformation {
  name: string;
}  


const TREE_DATA: CareEventNode[] = [
  {
    name: 'Heute',
    children: [{name: 'Gießen Aloe Vera'}, {name: 'Gießen Palme'}, {name: 'Gießen Palme am Fenster'}],
  },
  {
    name: 'Morgen',
    children: [{name: 'Gießen Ficus'}, {name: 'Gießen Monstrera'}, {name: 'Gießen Palme am Fenster'}],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-care-accordion',
  templateUrl: './care-accordion.component.html',
  styleUrls: ['./care-accordion.component.scss']
})

export class CareAccordionComponent implements OnInit {
  events$?: Observable<Wateringevent[]>;
  days: CalenderDay[] = new Array(7);
  weekdays: string[] = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  private _transformer = (node: CareEventNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
 
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    
    constructor(private _eventService: EventService, private _userService: UserService) {
    // this.dataSource.data = TREE_DATA;
    this._eventService.getMyEvents(this._userService.getCurrentUserId());
    this.events$ = this._eventService.currentEvents$?.pipe(
      map((events: Wateringevent[]) => (events ? events.filter((event: Wateringevent) => !!event) : []))
    );
    this.eventsToDays();
    var data =  _eventService.getCurrenPlant("Heute");
    console.log(data);
    TREE_DATA[0].children = data.children;
    console.log(TREE_DATA);
    this.dataSource.data = TREE_DATA;
  }
  
  ngOnInit(): void {
    
  }


  eventsToDays() {
    this.events$?.forEach( event => {
      var count = 0;
      for (let i=0; i<event.length; i++) {
        event[i].weekdayString = this.weekdays[event[i].weekday-1];
        var wateringDate = new Date(event[i].nextWateringDay);
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        if(today.setHours(0,0,0,0) == wateringDate.setHours(0,0,0,0)) {
          if (this.days.length <1) {
            this.days[0] = new CalenderDay(event[i].weekdayString);
            count++;
          }
          this.days[0].setWateringevent(event[i]);
        } else if (tomorrow.setHours(0,0,0,0) == wateringDate.setHours(0,0,0,0)) {
          if (this.days.length <2) {
            this.days[1] = new CalenderDay(event[i].weekdayString);
            count++;
          }
          this.days[1].setWateringevent(event[i]);
        } else {
          console.log(wateringDate+"NOOT   ");
        }
        /*
        if()
        this.days[0] = new CalenderDay(1);

        switch(event[i].weekday) { 
          case 1: { 
             //statements; 
             break; 
          } 
          case 2: { 
             //statements; 
             break; 
          } 
          case 3: { 
             //statements; 
             break; 
          } 
          case 4: { 
             //statements; 
             break; 
          } 
          case 5: { 
             //statements; 
             break; 
          } 
          case 6: { 
             //statements; 
             break; 
          }
          
          default: { 
             //statements; 
             break; 
          } 
       } */
      }
    })

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
