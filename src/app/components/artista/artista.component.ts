import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;

  constructor(
    private _router: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {
    this.loading = true;

    this._router.params.subscribe((params) => {
      this._spotifyService.getArtista(params['id']).subscribe((data) => {
        console.log(data);
        this.artista = data;
        this.loading = false;
      });
    });
  }
}
