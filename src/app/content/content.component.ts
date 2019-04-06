import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  articles = [];
  categories = [];
  tags = [];
  selectedArticle;
  selectedArticleIndex = 0;
  tldrEnabled = null;

  consoleOptions = ['article', 'category', 'tag'];
  consoleCurrent = 0;

  editModeContent = false; 

  constructor(private ss:DataService) {
    this.articles = ss.articles;
    this.categories = ss.categories;
    this.tags = ss.tags;

    this.selectedArticle = this.articles[0];
  }

  ngOnInit() {
    
    
    console.log(this.selectedArticle);
  }

  setArticle(i) {
    this.selectedArticle = this.articles[i];
    this.selectedArticleIndex = i;
  }

  consoleMode() {
    (this.consoleCurrent==2) ? this.consoleCurrent=0 : this.consoleCurrent++;
  }
  removeTag(i) {
    this.selectedArticle.tags.splice(i, 1);
  }
  saveArticleChanges() {
    this.ss.articles[this.selectedArticleIndex] = this.selectedArticle;
    alert('saved');
  }

  addTLDR(event) {
    this.selectedArticle.tldr.push(event.target.value);
    event.target.value = '';
  }
  removeTLDR(i) {
    this.selectedArticle.tldr.splice(i, 1);
  }

  toggleEditMode() {
    this.editModeContent = !this.editModeContent;
  }
  tldrSwitch() {
    this.tldrEnabled = !this.tldrEnabled;
  }

}
