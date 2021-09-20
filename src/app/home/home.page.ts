import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  heigh: number;
  weight: number;
  bmi: number;
  description: string;
  imgSrc: string;

  constructor() {}

  selectDescriptionAndImg(){
    if(this.bmi < 18.5){
      this.description = 'Underweight';
      this.imgSrc= '../../assets/bmi/underweight.png';
    }else if(this.bmi < 25){
      this.description = 'Normal';
      this.imgSrc= '../../assets/bmi/normal.png';
    }else if(this.bmi < 30){
      this.description = 'Overweight';
      this.imgSrc= '../../assets/bmi/overweight.png';
    }else if(this.bmi < 35){
      this.description = 'Obese';
      this.imgSrc= '../../assets/bmi/obese.png';
    }else{
      this.description = 'Extermely Obese';
      this.imgSrc= '../../assets/bmi/ext_obese.png';
    }

  }

  bmiCalculation(){
    this.bmi = this.weight /(this.heigh*this.heigh)*10000;
    this.selectDescriptionAndImg();
  }

}
