import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-care-instruction',
  templateUrl: './care-instruction.component.html',
  styleUrls: ['./care-instruction.component.scss']
})
export class CareInstructionComponent implements OnInit {
  //@Alisa: Diese Variable müsste auch mit dem Innerjoint befüllt werden, für die update-methode, die beim abhaken getriggert wird
  // brauchen wir folgende Daten: plant_id, ownName, water_frequency, wahrscheinlich über Input von Care-accordion, die daten brauchst du ja eh
  // um diese anzuzeigen
  myPlantEvent: any;

  constructor(private _userService: UserService, private _eventService: EventService, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }
  updateEvent(): void {
    const today: Date = new Date();
    const nextWateringDay: Date = new Date();
    // @Alisa: hier gerne einmal extra in der Datenbank überprüfen, ob das funktioniert, bin mir da nicht ganz sicher :D
    nextWateringDay.setDate(today.getDate() + this.myPlantEvent.water_frequency)

    const updatedPlant = { 'startDate': nextWateringDay, 'user_id': this._userService.getCurrentUserId(), 'ownName': this.myPlantEvent.ownName, 'plant_id': this.myPlantEvent.plant_id }
    this._eventService.updateEvent(updatedPlant).subscribe(result => {
      if (result.affectedRows == 1) {
        this._snackBar.open(this.myPlantEvent.ownName + ' erfolgreich gegossen.', 'Ok', {
          duration: 2000
        });
      } else {
        console.log('Fehler');
      }
    })
  }
}
