import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  type!: string;

  constructor(private _router: Router,) { 
  }

  ngOnInit(): void {
    this.type = this._router.url;
    this.type = this.type.replace("/", "").toUpperCase();
  }

}
