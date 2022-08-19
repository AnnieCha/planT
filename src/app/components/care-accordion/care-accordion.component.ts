import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {EventService} from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';

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
export class CareAccordionComponent {

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
  //@Alisa: Diese Variable müsste auch mit dem Innerjoint befüllt werden, für die update-methode, die beim abhaken getriggert wird
  // brauchen wir folgende Daten: plant_id, ownName, water_frequency
  private _myPlant: any;
    
    constructor(private _eventService: EventService, private _userService: UserService, private _snackBar: MatSnackBar,) {
    // this.dataSource.data = TREE_DATA;
    var data =  _eventService.getCurrenPlant("Heute");
    console.log(data);
    TREE_DATA[0].children = data.children;
    console.log(TREE_DATA);
    this.dataSource.data = TREE_DATA;
  }
  
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  // @Alisa vergleichbar mit onPlantDelete in plant-list-component, wird dem child-component care instruction übergeben
  updateEvent(): void {
    const today: Date = new Date();
    const nextWateringDay: Date = new Date();
    // @Alisa: hier gerne einmal extra in der Datenbank überprüfen, ob das funktioniert, bin mir da nicht ganz sicher :D
    nextWateringDay.setDate(today.getDate() + this._myPlant.water_frequency)

    const updatedPlant = { 'user_id': this._userService.getCurrentUserId(), 'plant_id': this._myPlant.plant_id, 'ownName': this._myPlant.ownName, 'startDate': nextWateringDay }
    this._eventService.updateEvent(updatedPlant).subscribe(result => {
      if(result.affectedRows == 1){
        this._snackBar.open(this._myPlant.ownName + ' erfolgreich gegossen.', 'Ok', {
          duration: 2000
        });
      } else {
        console.log('Fehler');
      }
    })
  }

}
