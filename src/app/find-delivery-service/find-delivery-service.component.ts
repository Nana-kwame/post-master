import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-find-delivery-service',
  templateUrl: './find-delivery-service.component.html',
  styleUrls: ['./find-delivery-service.component.css']
})
export class FindDeliveryServiceComponent implements OnInit {
  options: FormGroup;
  
  constructor(fb: FormBuilder) { 
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

}
