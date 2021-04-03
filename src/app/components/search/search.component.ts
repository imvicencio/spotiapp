import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) {}

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);
    this._spotifyService.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }
}
