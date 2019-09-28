import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {LocalStorageService} from 'ngx-localstorage';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.css']
})
export class QuizeComponent implements OnInit {

  submit = [];
  correct = [];
  wrong =[];
  finalScore;
  marks = 0;  

  quize = [
    { 
      'id' : '1',
      'Question' : 'Sample Question 1',
      'options': [ 'ABCD','PQR', 'XYZ', 'JKL'],
      'answer' : 'ABCD'
    },
    
    { 
      'id' : '2',
      'Question' : 'Question 2',
      'options': [ 'ABCD2','PQR2', 'XYZ2', 'JKL2'],
      'answer' : 'PQR2'
    },
    { 
      'id' : '3',
      'Question' : 'Question 3',
      'options': [ 'ABCD3','PQR3', 'XYZ3', 'JKL3'],
      'answer' : 'XYZ3'      
    },
    { 
      'id' : '4',
      'Question' : 'Question 4',
      'options': [ 'ABCD4','PQR4', 'XYZ4', 'JKL4'],
      'answer' : 'XYZ5'      
    },
    { 
      'id' : '5',
      'Question' : 'Question 5',
      'options': [ 'ABCD5','PQR5', 'XYZ5', 'JKL5'],
      'answer' : 'XYZ5'      
    }
  ];

  constructor(private router: Router, private loclstor: LocalStorageService) { }

  ngOnInit() {
    this.loclstor.set('allQuestion', JSON.stringify(this.quize));
  }
  
  // check answer
  check(e,ans,ques){
    console.log('Event-->',e.target.checked);
    let quesId = ques.id;
    if(e.target.checked){
      console.log('Option-->',ans);
      console.log('Question-->',ques.id);

      this.submit.push({quesId,ans});
    }
    console.log('FINAL ANSWER KEY-->',this.submit);
  }

  //Submit sheet
  submitPaper(){
    // alert('YES');  
    
    
      for(let i = 0, j= 0 ; i < this.quize.length, j< this.submit.length ; i++, j++){
        
          if(this.quize[i].id == this.submit[j].quesId && this.quize[i].answer === this.submit[j].ans){
           
              let _key = this.submit[j].quesId;
              let _val = this.submit[j].ans;
            this.correct.push({_key,_val});
             this.marks++;
            console.log('YES');
          }else{
            let _key = this.submit[j].quesId;
              let _val = this.submit[j].ans;

            console.log('NO');
            this.wrong.push({_key,_val});
          }
       
      }
      console.log('CORRECT ANSWER',this.correct);
      this.loclstor.set('corrans', JSON.stringify(this.correct));
      this.loclstor.set('wrong', JSON.stringify(this.wrong));
      this.loclstor.set('mark', JSON.stringify(this.marks));
    this.router.navigate(['/result']);
  }
}
