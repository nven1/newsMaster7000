import { Component, OnInit } from '@angular/core';
import { WebconfService } from '../webconf.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {

  selectedPreset;
  presets = [];

  detailView = false;

  detailModes = ['default', 'settings', 'style'];
  detailMode = this.detailModes[0];

  editorMode = false;
  resizeMode = false;
  insertDiv = null;

  currentElementStyles = null;

  constructor(private wcs: WebconfService, private ss: DataService) {
    this.presets = this.wcs.Presets;
  }

  toggleSettings() {
    (this.detailMode !== this.detailModes[1]) ? this.detailMode = this.detailModes[1] : this.detailMode = this.detailModes[0];
  }

  scratch() {
    this.selectedPreset = null;
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

    (this.wcs.Presets[0].activeElements.includes(el)) ? ret = 'exist' : ret = 'notExist';
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
    for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
      if (this.wcs.Presets[0].divs[i].id === el) {
        this.wcs.Presets[0].divs.splice(i, 1);
        this.wcs.Presets[0].activeElements.splice(i, 1);
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
      for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
        if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
          this.currentElementStyles = this.wcs.Presets[0].divs[i].style;
        }
      }
    }  
  }

  setStyle(x, y) {
    switch (x) {
      case 'textAlignLeft':
        for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
          if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
            this.wcs.Presets[0].divs[i].style['text-align'] = 'left';
          }
        }
        break;
      case 'textAlignRight':
        for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
          if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
            this.wcs.Presets[0].divs[i].style['text-align'] = 'right';
          }
        }
        break;
      case 'textAlignCenter':
        for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
          if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
            this.wcs.Presets[0].divs[i].style['text-align'] = 'center';
          }
        }
        break;
      case 'textAlignJustify':
        for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
          if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
            this.wcs.Presets[0].divs[i].style['text-align'] = 'justify';
          }
        }
        break;
      case 'padding':
        for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
          if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
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
            this.wcs.Presets[0].divs[i].style['padding'] = p + 'vh';
          }
        }
        break;
      case 'fontSize':
        for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
          if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
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
            this.wcs.Presets[0].divs[i].style['font-size'] = p + 'px';
          }
        }
        break;
      case 'radius':
        for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
          if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
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
            this.wcs.Presets[0].divs[i].style['border-radius'] = p + 'px';
          }
        }
        break;
      case 'backColor':
        for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
          if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
            this.wcs.Presets[0].divs[i].style['background-color'] = y;
          }
        }
        break;
      case 'color':
        for (let i=0; i<this.wcs.Presets[0].divs.length; i++) {
          if (this.wcs.Presets[0].divs[i].id === this.insertDiv) {
            this.wcs.Presets[0].divs[i].style['color'] = y;
          }
        }
        break;
    
      default:
        break;
    }
  }

}
