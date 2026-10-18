import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  instagramPosts: InstagramPost[] = [];

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    fetch('/api/instagram')
      .then(response => response.ok ? response.json() : [])
      .then(posts => this.instagramPosts = Array.isArray(posts) ? posts.slice(0, 4) : [])
      .catch(() => this.instagramPosts = []);
  }

  // NOTICIAS (Actualizadas con Fuente y Enlace)
  news = [
    {
      title: 'Los Palacios y ANEA firman un convenio para reforzar la protección del patrimonio natural',
      text: 'El Ayuntamiento de Los Palacios y Villafranca y el Grupo para la Defensa de la Naturaleza ANEA han firmado un convenio de colaboración destinado a reforzar las acciones de conservación, divulgación y protección del patrimonio natural del municipio.',
      image: 'pespunte.webp',
      source: 'El Pespunte',
      url: 'https://www.elpespunte.es/articulo/palacios-villafranca/palacios-villafranca-anea-firman-convenio-reforzar-proteccion-patrimonio-natural/20260522121808135004.html'
    },
    {
      title: 'El Taller Alas a Escala organizado por el Grupo Ecologista ANEA, exposición de réplicas de aves autóctonas',
      text: 'El Grupo Ecologista ANEA en colaboración con el Ayuntamiento de Los Palacios y Villafranca desarrolla el taller formativo “Alas a Escala”, una propuesta para iniciarse en la ornitología y la observación de aves a través de una experiencia educativa única.',
      image: 'ayuntamiento.jpg',
      source: 'Ayto. Los Palacios',
      url: 'https://www.lospalacios.org/Noticia/2028/ayuntamiento-y-anea-acuerdan-iniciativas-para-la-conservacion-y-divulgacion-de-los-espacios-naturales-de-los-palacios-y-villafranca'
    },
    {
      title: 'ANEA Y EL AYUNTAMIENTO PALACIEGO DAN A CONOCER EL VALOR NATURAL DEL CERRO DE LAS CIGÜEÑAS',
      text: 'En torno a medio centenar de personas participó en la visita interpretativa al Cerro de las Cigüeñas, una actividad organizada por la asociación ecologista Anea y la Delegación de Cultura con motivo del Día Internacional de los Humedales.',
      image: 'new1.png',
      source: 'RTV Los Palacios y Vfca.',
      url: 'https://www.rtvlospalacios.com/noticias-de-los-palacios-y-villafranca/44652/0/EL-AYUNTAMIENTO-DE-LOS-PALACIOS-Y-VILLAFRANCA-Y-LA-ASOCIACION-ANEA-FIRMAN-UN-CONVENIO-PARA-IMPULSAR-LA-CONSERVACION-DEL-ENTORNO-NATURAL/' 
    }
  ];

}