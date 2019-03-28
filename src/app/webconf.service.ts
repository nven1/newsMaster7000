import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebconfService {

  /* elementTypes = ['title', 'tldr', 'shortDescription', 'paragraphs', 'gallery', 'meta']; */
  elements = [
    {
      id:'title',
      title:'Title'
    },
    {
      id:'tldr',
      title:'TL;DR'
    },
    {
      id:'shortDescription',
      title:'Short Description'
    },
    {
      id:'paragraphs',
      title:'Paragraphs'
    },
    {
      id:'gallery',
      title:'Gallery'
    },
    {
      id:'meta',
      title:'Meta'
    },
  ]

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
          id:'title',
          class: 'title',
          style: {
            'grid-area':'1/1/3/21',
            'background-color':'yellow',
            'padding':'0vh',
            'font-size':'30px',
            'border-radius':'0px',
            'text-align':'center'
          }
        },
        {
          id:'paragraphs',
          class: 'paragraphs',
          style: {
            'grid-area':'4/2/21/15',
            'background-color':'green',
            'padding':'2vh',
            'font-size':'16px',
            'border-radius':'0px',
            'text-align':'center'
          }
        },
        {
          id:'tldr',
          class: 'tldr',
          style: {
            'grid-area':'4/16/9/20',
            'background-color':'red',
            'padding':'2vh',
            'font-size':'16px',
            'border-radius':'0px',
            'text-align':'left'
          }
        },
        {
          id:'meta',
          class: 'meta',
          style: {
            'grid-area':'10/16/20/20',
            'background-color':'grey',
            'padding':'2vh',
            'font-size':'16px',
            'border-radius':'0px',
            'text-align':'left'
          }
        },
      ]
    },
  ]
}
