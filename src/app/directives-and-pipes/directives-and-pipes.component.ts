import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-and-pipes',
  templateUrl: './directives-and-pipes.component.html',
  styleUrls: ['./directives-and-pipes.component.css'],
})
export class DirectivesAndPipesComponent implements OnInit {
  date: Date = new Date();

  numbers = Array.from(Array(100).keys());

  constructor() {}

  ngOnInit(): void {}
}
