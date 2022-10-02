import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
        medium: this.formBuilder.control('Movies'),
        name: this.formBuilder.control('', Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        category: this.formBuilder.control(''),
        year: this.formBuilder.control(''),
        
      });
  }
  
  ngOnInit(){}


  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}