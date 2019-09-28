import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-localstorage';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  correctAns;
  wrongAns;
  data;
  marks: any;

  constructor(private loclstor: LocalStorageService) { }

  ngOnInit() {
    
    this.data = (JSON.parse(this.loclstor.get('allQuestion')));
    this.correctAns = (JSON.parse(this.loclstor.get('corrans')));
    this.wrongAns = (JSON.parse(this.loclstor.get('wrong')));
    this.marks = (JSON.parse(this.loclstor.get('mark')));
    

    console.log('All Data-->',this.data);
    console.log('Correct-->',this.correctAns);
    console.log('Wrong-->',this.wrongAns);

    // this.showResult();
    
  }


  showResult(){
    if(this.marks == 0){
      alert('Please Attempt Questions');
    }
  }

}
