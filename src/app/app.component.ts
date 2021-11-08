import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public cells: any[] = new Array(9).fill(null);
  public indexesOfX: number[] = [];
  public indexesOfO: number[] = [];
  public gameOver: boolean = false;
  public winner: string = '';

  public winnerArray: Array<number>[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  public count: number = 0;

  setAction(index: number): void {
    if (this.cells[index] === null) {
      if (this.count % 2 === 0) {
        this.cells[index] = 'X';
        this.indexesOfX.push(index);
      } else {
        this.cells[index] = 'O';
        this.indexesOfO.push(index);
      }
      this.isWinner();
      this.count++;
    }
  }

  isWinner(): void {
    if(this.winnerArray.some(elem => elem.join('') === this.indexesOfX.join(''))){
      this.winner = "X";
      this.gameOver = true;
    }
    if(this.winnerArray.some(elem => elem.join('') === this.indexesOfO.join(''))){
      this.winner = "O";
      this.gameOver = true;
    }
  }

  returnDefaultParams(): void {
    this.gameOver = false;
    this.count = 0;
    this.winner = '';
    this.cells = new Array(9).fill(null);
    this.indexesOfX = [];
    this.indexesOfO = [];
  }

  ngOnInit() {}
}
