import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfe1-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    sessionStorage.setItem('appId', 'THIS IS SAMPLE APP ID');
  }
}
