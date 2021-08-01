import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  saysmth() {
    console.log("jjfasdlh");
    
  }
 password="";
 lenght=0
 includeLetters=false
 includeNumbers = false
 includeSymbols = false

 changeInput(value: string){
 
    const parsedvalue = parseInt (value)
    
    if (!isNaN(parsedvalue)) {
      length= parsedvalue 
    }  
  }

  changeincludeLetters() {
   
    this.includeLetters = true
    }

    changeincludeNumbers(){
      this.includeNumbers = !this.includeNumbers
    }
    changeincludeSymbols() {
      this.includeSymbols = !this.includeSymbols
    }
  onButtonClick(){
    console.log(this.includeSymbols)
    this.password="itsalreadyyours";
  }
}

