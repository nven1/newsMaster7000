import { Component, OnInit, OnChanges } from '@angular/core';
import { WebconfService } from '../webconf.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit, OnChanges {
  
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

  detailModes = ['default', 'settings', 'style'];
  detailMode = this.detailModes[0];

  editorMode = false;
  resizeMode = false;
  insertDiv = null;

  currentElementStyles = null;

  constructor(private wcs: WebconfService, private ss: DataService) {
    this.presets = this.wcs.Presets;
    this.articles = ss.articles;
  }

  ngOnInit() {
  }
  ngOnChanges(change) {
    console.log(change);

  }
/*   ngOnChanges(changes) {
    console.log('ayy');
    if(changes.insertDiv) {
      
      this.resizeMode = false;
    }
  } */

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
    this.resizeMode = false;
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
    if (this.detailMode == this.detailModes[2]) {
      this.elementStyle(this.insertDiv);
    }
  }
  elementDelete(el) {
    for (let i=0; i<this.wcs.Presets[this.selectedPreset].divs.length; i++) {
      if (this.wcs.Presets[this.selectedPreset].divs[i].id === el) {
        this.wcs.Presets[this.selectedPreset].divs.splice(i, 1);
        this.wcs.Presets[this.selectedPreset].activeElements.splice(i, 1);
        this.insertDiv = null;
      }
    }
  }
  elementResize(el) {
    this.insertDiv = el;
    this.resizeMode = !this.resizeMode;

  }
  elementStyle(el) {
    if(this.detailMode == this.detailModes[2] && el == null) {
      this.detailMode = this.detailModes[0]
    } else {
      this.insertDiv = el; this.detailMode = this.detailModes[2];
      for (let i=0; i<this.wcs.Presets[this.selectedPreset].divs.length; i++) {
        if (this.wcs.Presets[this.selectedPreset].divs[i].id === this.insertDiv) {
          this.currentElementStyles = this.wcs.Presets[this.selectedPreset].divs[i].style;
        }
      }
    }  
  }

  setStyle(x, y) {
    switch (x) {
      case 'textAlignLeft':
        for (let i=0; i<this.wcs.Presets[this.selectedPreset].divs.length; i++) {
          if (this.wcs.Presets[this.selectedPreset].divs[i].id === this.insertDiv) {
            this.wcs.Presets[this.selectedPreset].divs[i].style['text-align'] = 'left';
          }
        }
        break;
      case 'textAlignRight':
        for (let i=0; i<this.wcs.Presets[this.selectedPreset].divs.length; i++) {
          if (this.wcs.Presets[this.selectedPreset].divs[i].id === this.insertDiv) {
            this.wcs.Presets[this.selectedPreset].divs[i].style['text-align'] = 'right';
          }
        }
        break;
      case 'textAlignCenter':
        for (let i=0; i<this.wcs.Presets[this.selectedPreset].divs.length; i++) {
          if (this.wcs.Presets[this.selectedPreset].divs[i].id === this.insertDiv) {
            this.wcs.Presets[this.selectedPreset].divs[i].style['text-align'] = 'center';
          }
        }
        break;
      case 'textAlignJustify':
        for (let i=0; i<this.wcs.Presets[this.selectedPreset].divs.length; i++) {
          if (this.wcs.Presets[this.selectedPreset].divs[i].id === this.insertDiv) {
            this.wcs.Presets[this.selectedPreset].divs[i].style['text-align'] = 'justify';
          }
        }
        break;
      case 'padding':
        for (let i=0; i<this.wcs.Presets[this.selectedPreset].divs.length; i++) {
          if (this.wcs.Presets[this.selectedPreset].divs[i].id === this.insertDiv) {
            let p;
            if (this.currentElementStyles.padding && y == 'plus') {
              p = this.currentElementStyles.padding.replace('vh','');
              p = Number(p) + 1;
            }
            else if (this.currentElementStyles.padding && y == 'minus') {
              p = this.currentElementStyles.padding.replace('vh','');
              p = Number(p) - 1;
            }
            else { 
              p = 0; 
            }
            this.wcs.Presets[this.selectedPreset].divs[i].style['padding'] = p + 'vh';
          }
        }
        break;
      case 'fontSize':
        for (let i=0; i<this.wcs.Presets[this.selectedPreset].divs.length; i++) {
          if (this.wcs.Presets[this.selectedPreset].divs[i].id === this.insertDiv) {
            let p;
            if (this.currentElementStyles['font-size'] && y == 'plus') {
              p = this.currentElementStyles['font-size'].replace('px','');
              p = Number(p) + 1;
            }
            else if (this.currentElementStyles['font-size'] && y == 'minus') {
              p = this.currentElementStyles['font-size'].replace('px','');
              p = Number(p) - 1;
            }
            else {
              p = 10;
            }
            this.wcs.Presets[this.selectedPreset].divs[i].style['font-size'] = p + 'px';
          }
        }
        break;
      case 'radius':
        for (let i=0; i<this.wcs.Presets[this.selectedPreset].divs.length; i++) {
          if (this.wcs.Presets[this.selectedPreset].divs[i].id === this.insertDiv) {
            let p;
            if (this.currentElementStyles['border-radius'] && y == 'plus') {
              p = this.currentElementStyles['border-radius'].replace('px','');
              p = Number(p) + 1;
            }
            else if (this.currentElementStyles['border-radius'] && y == 'minus') {
              p = this.currentElementStyles['border-radius'].replace('px','');
              p = Number(p) - 1;
            }
            else {
              p = 0;
            }
            this.wcs.Presets[this.selectedPreset].divs[i].style['border-radius'] = p + 'px';
          }
        }
        break;
    
      default:
        break;
    }
  }

}
