import { Injectable } from '@angular/core';
import { Character } from './Character';

@Injectable(
)
export class CharacterService {
  ExampleCharacters:Array<Character> = [{"Name":"[Example]Juan Garcia", "Cliches":["Biotic Hitman: 4", " Conman: 3", " Artist: 3"]},
   {"Name":"[Example]Kevin Jameson", "Cliches":["Too old for this: 4", " Marksman: 3", " Brawler: 3"]},
  {"Name":"[Example]Wallace", "Cliches":["Gaian Juggernaught: 4", " Geomancer: 4", " Playboy: 2"]},
  {"Name":"[Example]Govess", "Cliches":["Gnome Tinkerer: 4", " Bard: 3", " Illusionist: 2", " Business Man: 1"]}];
   Characters:Array<Character>=[];

  constructor() { 
    if (JSON.parse(localStorage.getItem('characters')) === null){
      localStorage.setItem('characters', JSON.stringify(this.ExampleCharacters))
    }
    this.getCharacters();
  }

  ngOnInit() {
  }

  getCharacters(){
    this.Characters = JSON.parse(localStorage.getItem('characters'));
  }

  addCharacter(n:string, c:Array<string>) {
    this.getCharacters();
    this.Characters.push(new Character(n, c));
    localStorage.setItem('characters', JSON.stringify(this.Characters))
  }
}
