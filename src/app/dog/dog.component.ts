import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styles: [
  ]
})
export class DogComponent implements OnInit {
  dogs: any = [];
  errorMessage: string = '';
  sub!: any;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.sub = this.dogService.getDogs().subscribe(
      data => {
        this.dogs = data;
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
