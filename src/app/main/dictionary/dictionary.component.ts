import { Component, OnInit } from '@angular/core';
import { Word } from './word';
import { WordsService } from './words.service';

const emptyWord: Word = {
  id: null,
  word: '',
  definition: '',
}

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit{

  words = [];
  selectedWord = emptyWord;
  originalTitle = '';

  constructor(private wordService: WordsService) { }

  ngOnInit(): void {
    this.fetchWords();
  }

  selectWord(word) {
    this.selectedWord = {...word};
    this.originalTitle = word.name;
  }

  fetchWords() {
    this.wordService.all().subscribe((result:any) => this.words = result)
  }

  saveWord(word) {
    if(word.id) {
      this.updateWord(word);
    } else {
      this.createWord(word);
    }
  }

  updateWord(word) {
    this.wordService.update(word).subscribe(result => this.fetchWords());
  }

  createWord(word) {
    this.wordService.create(word).subscribe(result => this.fetchWords());
  }

  reset() {
    this.selectWord({...emptyWord});
  }

}
