import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Ironman';
  public age: number = 45;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }


  public getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  public changeHero():void{
    this.name = 'Jonathan';
  }

  public changeAge():void{
    this.age = 18;
  }

  public resetForm():void{
    this.name = 'Ironman';
    this.age = 45;
  }

}
