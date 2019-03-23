import { Component, OnInit } from '@angular/core';
import { WebconfService } from '../webconf.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  
  consoleOptions = ['Presets','Components', 'Articles']
  consoleCurrent = 0;


  /* PRESETS */
  selectedPreset;
  presets = [];

  /* ARTICLES */
  articles = [];
  selectedArticle = null;
  selectedArticleIndex = null;

  /* pokazuje listu kada je odabran console mode */
  listView = true;
  /* pokazuje detalje itema iz liste */
  detailView = false;

  detailModes = ['default', 'settings'];
  detailMode = this.detailModes[0];

  editorMode = false;
  insertDiv = null;

  constructor(private wcs: WebconfService, private ss: DataService) {
    this.presets = this.wcs.Presets;
    this.articles = ss.articles;
  }

  ngOnInit() {
  }

  selectItem(i) {
    if (this.consoleCurrent == 0) {
      this.selectedPreset = i;

    }
    else if (this.consoleCurrent == 2) {
      this.selectedArticleIndex = i;
      this.selectedArticle = this.articles[i];
    }
    this.listView = false;
    this.detailView = true;
    this.editorMode = true;
  }
  toListView() {
    this.scratch();
    this.listView = true;
    this.detailView = false;
  }

  consoleMode() {
    this.scratch();
    this.listView=true; this.detailView=false;
    (this.consoleCurrent===2) 
      ? this.consoleCurrent=0
      : this.consoleCurrent++;
  }

  newItem() {
    this.presets.push(
      {
        name: 'newPreset',
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
    );
  }

  toggleSettings() {
    (this.detailMode !== this.detailModes[1]) ? this.detailMode = this.detailModes[1] : this.detailMode = this.detailModes[0];
  }

  scratch() {
    this.selectedArticle = null;
    this.selectedPreset = null;
    this.selectedArticleIndex = null;
    this.editorMode = false;
    this.insertDiv = null;
    this.detailMode = this.detailModes[0];
  }

  elementClick(el) {
    if (this.insertDiv === null) { this.insertDiv = el; }
    else if (this.insertDiv === el) { this.insertDiv = null}
    else { this.insertDiv = el }
    
  }

  checkExist(el) {
    let ret;

    (this.wcs.Presets[this.selectedPreset].activeElements.includes(el)) ? ret = 'exist' : ret = 'notExist';
    (this.insertDiv == el) ? ret += ' editing':'';
    return ret;
  }

  insertDivUpdate(event) {
    this.insertDiv = event;
  }

}
