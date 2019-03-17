import { Component, OnInit, Input, HostListener, ElementRef, OnChanges, ViewChild } from '@angular/core';
import { WebconfService } from '../webconf.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit, OnChanges {
  presets = [];
  divs = null;

  @Input() selectedPreset;
  @Input() editorMode;
  @Input() insertDiv;

  @ViewChild('temp') temp:ElementRef;
  @ViewChild('elementMenu') elementMenu:ElementRef;

  articles;


  dragMode = 0;
  newElement;

  sizeNewDivOK;
  
  aCol; aRow;
  bCol; bRow;

  selection = false;
  Grid = [];

  

  constructor(private wcs:WebconfService, private art: DataService) {
    this.presets = wcs.Presets;
    this.createGrid(20,20);  
    this.articles = art.articles[0];
  }

  ngOnChanges(changes) {
    if (this.selectedPreset!==undefined) {
      this.divs = this.presets[this.selectedPreset].divs;

      if(changes.insertDiv) {
        if (this.wcs.Presets[this.selectedPreset].activeElements.includes(changes.insertDiv.currentValue)) {
          document.getElementById(changes.insertDiv.currentValue).style.border = '1px solid black';
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
    if (this.newElement) {
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
      let height = Math.abs(aRow - bRow);
      let width = Math.abs(aCol - bCol);

      
      this.temp.nativeElement.style.gridArea = aRow+'/'+aCol+'/'+bRow+'/'+bCol;

      if (
        (this.insertDiv == 'title' && height>1 && width>5) ||
        (this.insertDiv == 'shortDescription' && height>5 && width>5) ||
        (this.insertDiv == 'tldr' && height>4 && width>5) ||
        (this.insertDiv == 'paragraphs' && height>9 && width>9) ||
        (this.insertDiv == 'gallery' && height>5 && width>5) ||
        (this.insertDiv == 'meta' && height>5 && width>4) 
        ) {
        this.sizeNewDivOK = true;
        this.temp.nativeElement.style.backgroundColor = 'green'
      } else {
        this.temp.nativeElement.style.backgroundColor = 'red';
      }   
    


    }

  }
  @HostListener('mouseup', ['$event'])
  tileDragEnd(event) {
    this.dragMode = 2;
    /* this.mouseX = event.x;
    this.mouseY = event.y; */
    
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
          'z-index':10
        }
      },
    )
    this.wcs.Presets[this.selectedPreset].activeElements.push(this.insertDiv);
    this.selection = false;
    this.insertDiv = undefined;
    this.newElement = null;
    this.sizeNewDivOK = null;
  }

}
