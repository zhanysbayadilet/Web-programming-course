import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {SideBarCartComponent} from "../side-bar-cart/side-bar-cart.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() onPlusClick = new EventEmitter<boolean>();

  plusClick() {
    this.onPlusClick.emit(true);
  }
}
