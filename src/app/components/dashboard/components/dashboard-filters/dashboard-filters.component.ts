import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dashboard-filters',
  templateUrl: './dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.scss']
})
export class DashboardFiltersComponent implements OnInit {
  @Input() countriesList: any;

  @Output() getFiltersData = new EventEmitter<any>();

  public form: FormGroup = new FormGroup({
    date: new FormControl(new Date()),
    country: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  public applyFilters() {
    this.getFiltersData.emit(this.form.value);
  }

  public clearFilters() {
    this.form.reset();
    this.form.patchValue({'date': new Date()});
    this.getFiltersData.emit(null);
  }
}
