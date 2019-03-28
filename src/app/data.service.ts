import { Injectable } from '@angular/core';
import { Article } from '../app/article'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  websiteName: string = 'neveNews';

  categories = ['tech', 'sport']
  tags = ['apple', 'android', 'handball', 'FC Barcelona', 'Design', 'Croatia', 'Angular', 'Javascript', 'JS', 'HTML', 'Hearthstone', 'Warcraft', 'Blizzard']
  authors = ['Neven Zdelar']

  articles = [
    new Article(
      1,
      'Vijest broj 1', 
      this.categories[0], 
      'Kratki sadrzaj o onome sto se dogodilo. Maksimalno oko 100 znakova',
      ['Too long', 'Didnt read', 'vijest u crticama'],
      ['Paragraph 1', 'Paragraph 1', 'Paragraph 1', 'Paragraph 1'],
      'itsAThumbnail.jpg',
      ['1.jpg', '2.jpg'],
      [this.tags[0], this.tags[2], this.tags[2], this.tags[5], this.tags[4], this.tags[3]],
      this.authors[0],
      '06/02/2019'
      )
  ]

  placeholder = new Article(
    0,
    'a placeholder article', 
    this.categories[0], 
    'this article is a placeholder article',
    ['tldr1', 'tldr2', 'tldr3', 'tldr4', 'tldr5'],
    ['Paragraph 1', 'Paragraph 1', 'Paragraph 1', 'Paragraph 1'],
    'placeholder.jpg',
    ['placeholder1.jpg', 'placeholder2.jpg'],
    [this.tags[0], this.tags[2], this.tags[2], this.tags[5], this.tags[4], this.tags[3]],
    this.authors[0],
    '06/02/2019'
    )


  constructor() { }
}
