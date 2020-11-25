import { Injectable } from '@angular/core';
import { GAME_API_URL } from '../../../shared/const/const';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course, Game } from 'src/app/model/model';
import { map } from 'rxjs/internal/operators/map';
import { UserDomainService } from './user-domain.service';

@Injectable({
  providedIn: 'root'
})
export class GameDomainService {

  apiUrl = GAME_API_URL;

  constructor(
    private http: HttpClient,
    private userDomainService: UserDomainService
  ) { }

  ongoingGames: Game[] = [];
  completedGames: Game[] = [];
  myGames: Game[] = [];

  public fetchGames() {
    return this.http.get(this.apiUrl).pipe(map((response: any) => {
      return response.body;
    })).subscribe(data => {

      this.ongoingGames = data.filter(
        game => game.ongoing === true && game.players.filter(
          player => player.email === this.userDomainService.getThisUser().email).length === 0);
      this.completedGames = data.filter(game => game.ongoing === false);
      this.myGames = data.filter(
        game => game.ongoing === true && game.players.filter(
          player => player.email === this.userDomainService.getThisUser().email).length !== 0);
    });
  }

  public getAllOngoingGames(): Game[] {
    return this.ongoingGames;
  }

  public getCompletedGames(): Game[] {
    return this.completedGames;
  }

  public getMyGames(): Game[] {
    return this.myGames;
  }

  public deleteGame(name: string) {
    return this.http.delete(this.apiUrl,
      {
        params: {
          name: name
        }
      });
  }

  public saveGame(game: Game) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post(this.apiUrl, game, options);
  }

  public updateGame(game: Game) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.put(this.apiUrl, game, options);
  }
}
