import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-care-instruction',
  templateUrl: './care-instruction.component.html',
  styleUrls: ['./care-instruction.component.scss']
})
export class CareInstructionComponent implements OnInit {
  //@Alisa: dies hier wird benötigt, damit beim Checken einer Checkbox die update-Methode aus der Care-Accordion Component getriggert wird (siehe ebenfalls in plant-detail)
  @Output() plantDeleted = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
