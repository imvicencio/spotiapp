import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  verArtista(item: any) {
    let ArtistaId;
    if (item.type === 'artist') {
      ArtistaId = item.id;
    } else {
      ArtistaId = item.artists[0].id;
    }
    console.log(ArtistaId);

    this._router.navigate(['/artist', ArtistaId]);
  }
}
