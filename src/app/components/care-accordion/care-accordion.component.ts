import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

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
    children: [{name: 'Gießen Aloe Vera'}, {name: 'Gießen Palme'}, {name: 'Gießen Palme2'}],
  },
  {
    name: 'Morgen',
    children: [{name: 'Gießen Aloe Vera'}, {name: 'Gießen Palme'}, {name: 'Gießen Palme2'}],
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

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
