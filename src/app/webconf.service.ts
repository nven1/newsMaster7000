import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebconfService {

  constructor() { }
  Grid = {
    'display':'grid',
    'grid-template-rows': 'repeat(20, 1fr)',
    'grid-template-columns': 'repeat(20, 1fr)',
    'height':'100vh',
    'width':'100%'
  }
  Presets: any = [
    {
      name: 'test',
      style: {
        'display':'grid',
        'grid-template-rows': 'repeat(20, 1fr)',
        'grid-template-columns': 'repeat(20, 1fr)',
        'height':'100vh',
        'width':'100%'
      },
      activeElements:[],
      divs: []
    },
    {
      name: 'default',
      style: {
        'display':'grid',
        'grid-template-rows': 'repeat(20, 1fr)',
        'grid-template-columns': 'repeat(20, 1fr)',
        'background-color':'gray',
        'height':'100vh',
        'width':'100%'
      },
      activeElements:['title', 'paragraphs', 'tldr', 'meta'],
      divs: [
        {
          id:'nav',
          class: 'nav',
          style: {
            'grid-area':'1/1/3/21',
            'background-color':'yellow'
          }
        },
        {
          id:'content',
          class: 'content',
          style: {
            'grid-area':'3/1/21/21',
            'background-color':'white'
          }
        },
        {
          id:'title',
          class: 'title',
          style: {
            'grid-area':'1/1/3/21',
          }
        },
        {
          id:'paragraphs',
          class: 'paragraphs',
          style: {
            'grid-area':'4/2/21/15',
            'background-color':'green'
          }
        },
        {
          id:'tldr',
          class: 'tldr',
          style: {
            'grid-area':'4/16/9/20',
            'background-color':'red'
          }
        },
        {
          id:'meta',
          class: 'meta',
          style: {
            'grid-area':'10/16/20/20',
            'background-color':'grey'
          }
        },
      ]
    },

    {
      name: 'default2',
      style: {
        'display':'grid',
        'grid-template-rows': 'repeat(20, 1fr)',
        'grid-template-columns': 'repeat(20, 1fr)',
        'background-color':'gray',
        'height':'100vh',
        'width':'100%'
      },
      activeElements:['title', 'paragraphs', 'tldr'],
      divs: [
        {
          id:'title',
          class: 'title',
          style: {
            'grid-area':'1/1/1/span 20',
            'background-color':'red'
          }
        },
        {
          id:'tldr',
          class: 'tldr',
          style: {
            'grid-area':'2/1/3/21',
            'background-color':'white'
          }
        },
        {
          id:'paragraphs',
          class: 'paragraphs',
          style: {
            'grid-area':'3/1/4/21',
            'background-color':'white'
          }
        },
      ]
    },

    {
      name: 'dnevnik',
      style: {
        'display':'grid',
        'grid-template-rows': 'repeat(20, 1fr)',
        'grid-template-columns': 'repeat(20, 1fr)',
        'background-color':'white',
        'height':'100vh',
        'width':'100%'
      },
      activeElements:[],
      divs: [
        {
          id:'naviii',
          class: 'nav',
          style: {
            'grid-area':'1/1/1/span 20',
            'background-color':'green'
          }
        },
        {
          id:'contentiiii',
          class: 'content',
          style: {
            'grid-area':'2/1/21/21',
            'background-color':'white'
          }
        },
        {
          id:'ayyy',
          class: 'lmao',
          style: {
            'grid-area':'2/2',
            'background-color':'black'
          }
        },
      ]
    }
  ]
}
