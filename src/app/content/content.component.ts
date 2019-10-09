import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../_data/data.service';

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
  }

/*   setArticle(i) {
    this.selectedArticle = this.articles[i];
    this.selectedArticleIndex = i;
  } */

/*   consoleMode() {
    (this.consoleCurrent==2) ? this.consoleCurrent=0 : this.consoleCurrent++;
  } */

  removeTag(i) {
    this.selectedArticle.tags.splice(i, 1);
  }
  addTag(input) {
    if (input.value != '') {
      this.selectedArticle.tags.push(input.value);
      input.value = '';
    }

  }
/*   saveArticleChanges() {
    this.ss.articles[this.selectedArticleIndex] = this.selectedArticle;
    alert('saved');
  } */

  addTLDR(event) {
    this.selectedArticle.tldr.push({value:event.target.value});
    event.target.value = '';
  }
  removeTLDR(i) {
    this.selectedArticle.tldr.splice(i, 1);
  }

/*   toggleEditMode() {
    this.editModeContent = !this.editModeContent;
  } */
/*   tldrSwitch() {
    this.tldrEnabled = !this.tldrEnabled;
  } */

  changeCategory(input) {
    if (input.value != '') {
      this.selectedArticle.category.push(input.value);
      input.value = '';
    }

  }
  removeCategory(i) {
    this.selectedArticle.category.splice(i, 1);
  }

  addParagraph() {
    this.selectedArticle.paragraphs.push({value:'Paragraph'});
  }

}
