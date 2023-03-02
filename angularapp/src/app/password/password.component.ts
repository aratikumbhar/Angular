import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password ="";


  onChangeLength(value:string){
 const parsedValue = parseInt(value);

   if(!isNaN(parsedValue)){
      this.length = parsedValue;
      }
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseLetters() {
 this.includeLetters =  !this.includeLetters;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
  
onButtonClick(){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const number = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += number;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
}
}
