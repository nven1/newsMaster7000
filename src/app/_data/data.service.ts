import { Injectable } from '@angular/core';
import { Article } from './article'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  websiteName: string = 'neveNews';

  categories = ['tech', 'sport']
  tags = ['apple', 'android', 'handball', 'FC Barcelonaddddddddddddd', 'Design', 'Croatia', 'Angular', 'Javascript', 'JS', 'HTML', 'Hearthstone', 'Warcraft', 'Blizzard']
  authors = ['Neven Zdelar']

  articles = [
    new Article(
      1,
      'Vijest broj 1', 
      [this.categories[0]], 
      'Kratki sadrzaj o onome sto se dogodilo. Maksimalno oko 100 znakova',
      [{value:'Too long; Didnt read'}, {value:'Vijest u crticama'}],
      [{value:'Paragraph 1'}, {value:'Paragraph 2'}, {value:'Paragraph 3'}, {value:'Paragraph 4'}],
      'itsAThumbnail.jpg',
      ['1.jpg', '2.jpg'],
      [this.tags[0], this.tags[2], this.tags[2], this.tags[5]],
      this.authors[0],
      '06/02/2019'
      )
  ]

  placeholder = new Article(
    0,
    'a placeholder article', 
    [this.categories[0]], 
    'this article is a placeholder article',
    [{value:'Too long; Didnt read'}, {value:'Vijest u crticama'}],
    [{value:'Paragraph 1'}, {value:'Paragraph 2'}, {value:'Paragraph 3'}, {value:'Paragraph 4'}],
    'placeholder.jpg',
    ['placeholder1.jpg', 'placeholder2.jpg'],
    [this.tags[0], this.tags[2], this.tags[2], this.tags[5], this.tags[4], this.tags[3]],
    this.authors[0],
    '06/02/2019'
    )


  constructor() { }
}
