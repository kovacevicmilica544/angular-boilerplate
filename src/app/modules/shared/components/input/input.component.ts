import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public value;

  @Input() label;
  @Input() inputPlaceholder = '';
  @Output('inputValue') inputValueChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onChange(event) {
    this.inputValueChanged.emit(event);
  }
}
