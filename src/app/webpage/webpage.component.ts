import { Component, OnInit, Input, HostListener, ElementRef, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { WebconfService } from '../_data/webconf.service';
import { DataService } from '../_data/data.service';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit, OnChanges {
  presets = [];
  divs = null;

  @Input() selectedPreset = 0;
  @Input() editorMode;
  @Input() insertDiv;

  @Output() insertDivUpdate = new EventEmitter<string>();

  @ViewChild('temp') temp:ElementRef;
  @ViewChild('elementMenu') elementMenu:ElementRef;
  @ViewChild('divOverlay') divOverlay:ElementRef;

  articles;


  dragMode = 0;  // 0 not dragging, 1 currently dragging, 2 mouseup, drag finished, create div
  newElement = false;  // when clicked on an element not yet existing

  sizeNewDivOK;
  
  aCol; aRow;
  bCol; bRow;
  height; width;

  selection = false;
  Grid = [];

  

  constructor(private wcs:WebconfService, private art: DataService) {
    this.presets = wcs.Presets;
    this.createGrid(20,20);  
    this.articles = art.articles[0];
    this.editorMode = true;
  }

  ngOnChanges(changes) {
    if (this.selectedPreset!==undefined) {
      this.divs = this.presets[this.selectedPreset].divs;

      if(changes.insertDiv) {
        this.dragMode = 0;
        this.selection = false;
        if (this.wcs.Presets[this.selectedPreset].activeElements.includes(changes.insertDiv.currentValue)) {
          /* document.getElementById(changes.insertDiv.currentValue).style.border = '1px solid black'; */
          this.newElement = false;
        }
        else if (this.insertDiv == null) {
          this.newElement = null;
        }
        else {
          this.newElement = true;
        }
      }
/*       if(changes.selectedPreset) {
        this.editorMode = false;
        this.insertDiv = null;
      } */
    }

    
    
  }

  ngOnInit() {
  }

  getPresetStyle() {
    if (this.selectedPreset!==undefined) {
      return this.presets[this.selectedPreset].style;
    }
  }

  selectDiv(event) {
  }

  setGrid() {
    return this.wcs.Grid;
  }

  tileDragStart(event) {
    if (this.newElement == true) {
      this.dragMode = 1;
      this.aRow = Number(event.target.style.gridRowStart);
      this.aCol = Number(event.target.style.gridColumnStart);

      this.selection = true;
    }

    

  }
  tileDragOver(event) {
    if (this.dragMode == 1) {
      //  moguce eliminirati this.row i this.col, kasnije po potrebi
      this.bRow = Number(event.target.style.gridRowStart);
      this.bCol = Number(event.target.style.gridColumnStart);
      
      let aRow = this.aRow, bRow = this.bRow, aCol = this.aCol, bCol = this.bCol;

      if (this.bRow<this.aRow) {
        aRow ++;
      } else {
        bRow ++;
      }
      if (this.bCol<this.aCol) {
        aCol ++;
      } else {
        bCol ++;     
      }
      this.height = Math.abs(aRow - bRow);
      this.width = Math.abs(aCol - bCol);

      
      this.temp.nativeElement.style.gridArea = aRow+'/'+aCol+'/'+bRow+'/'+bCol;

      if (
        (this.insertDiv == 'title' && this.height>=2 && this.width>=5) ||
        (this.insertDiv == 'shortDescription' && this.height>=2 && this.width>=5) ||
        (this.insertDiv == 'tldr' && this.height>=4 && this.width>=3) ||
        (this.insertDiv == 'paragraphs' && this.height>=6 && this.width>=7) ||
        (this.insertDiv == 'gallery' && this.height>=5 && this.width>=5) ||
        (this.insertDiv == 'meta' && this.height>=1 && this.width>=3) 
        ) {
        this.sizeNewDivOK = true;
        this.temp.nativeElement.style.backgroundColor = 'green'
      } else {
        this.temp.nativeElement.style.backgroundColor = 'red';
        this.sizeNewDivOK = false;
      }   
    }

  }
  @HostListener('mouseup', ['$event'])
  tileDragEnd(event) {
    (this.dragMode = 1) ? this.dragMode = 2:'';
    (!this.sizeNewDivOK) ? this.selection = false: '';
  }

  createGrid(a,b) {
    for (let i = 1; i<=a; i++) {
      for (let j = 1; j<=b; j++) {
        this.Grid.push({
          gridArea:i+'/'+j,
          id:i+'-'+j,
          row:i,
          col:j
        })
      }
    }
  }

  setDiv() {
    /* if (this.wcs.Presets[this.selectedPreset].divs.includes({id:'title'})) */
    this.wcs.Presets[this.selectedPreset].divs.push(
      {
        id:this.insertDiv,
        class: this.insertDiv,
        style: {
          'grid-area':this.temp.nativeElement.style.gridArea,
          'background-color':'yellow',
          'z-index':10,
          'padding':'0vh',
          'font-size':'16px',
          'border-radius':'0px',
          'text-align':'left'
        },
        height: this.height,
        width: this.width
      },
    )
    this.wcs.Presets[this.selectedPreset].activeElements.push(this.insertDiv);
    this.selection = false;
    this.newElement = null;
    this.sizeNewDivOK = null;
    this.dragMode = 0;
    this.height = this.width = null;
  }

  divClick(div) {
    this.insertDivUpdate.emit(div.id);
  }
  tileClick() {
    this.insertDivUpdate.emit(null);
  }
  setClass(div) {
    let i;
    (div.id=='meta' && div.height<=2) ? i = 'flexMeta' : i = 'gridMeta';


    return i;
  }

}
