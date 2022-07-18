import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {EventService} from 'src/app/services/event.service';

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

  constructor(private _eventService: EventService) {
    // this.dataSource.data = TREE_DATA;
    var data =  _eventService.getCurrenPlant("Heute");
    console.log(data);
    TREE_DATA[0].children = data.children;
    console.log(TREE_DATA);
    this.dataSource.data = TREE_DATA;
  }
  
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
