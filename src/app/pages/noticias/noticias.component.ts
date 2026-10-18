import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  featuredStory = {
    date: '2026-10-14',
    dateLabel: '14 octubre 2026',
    category: 'DOÑANA · AGUA',
    title: 'Doñana: ayudas para retirar invernaderos y aliviar el acuífero',
    summary: 'El MITECO ha concedido 28,5 millones de euros para renaturalizar 407 hectáreas en el entorno de Doñana. La retirada de los invernaderos acogidos al programa podría reducir las extracciones del acuífero en 1,8 hm³ al año. La recuperación dependerá también de mantener el control del agua a largo plazo.',
    source: 'El País',
    url: 'https://elpais.com/clima-y-medio-ambiente/2026-10-14/donana-recibira-por-fin-las-ayudas-para-eliminar-cultivos-ilegales-y-regenerar-el-acuifero.html',
    image: 'cerceta.webp',
    imageAlt: 'Cerceta pardilla en un humedal andaluz'
  };

  stories = [
    {
      date: '2026-09-30',
      dateLabel: '30 septiembre 2026',
      category: 'LAS CABEZAS · BRAZO DEL ESTE',
      title: 'Una jornada local pone el foco en la cerceta pardilla',
      summary: 'El Ayuntamiento de Las Cabezas anunció un encuentro sobre la conservación de esta especie y el Brazo del Este, con participación de ANEA, WWF y especialistas. El programa incluyó una visita guiada al humedal y un espacio para hablar de cooperación y custodia del territorio.',
      source: 'Ayuntamiento de Las Cabezas de San Juan',
      url: 'https://lascabezasdesanjuan.es/es/actualidad/noticias/Las-Cabezas-de-San-Juan-acogera-el-proximo-8-de-octubre-la-jornada-sobre-la-conservacion-de-la-cerceta-pardilla-en-el-Brazo-del-Este/?urlBack=/es/index.html',
      image: 'cerceta.webp',
      imageAlt: 'Cerceta pardilla en su hábitat'
    },
    {
      date: '2026-09-16',
      dateLabel: '16 septiembre 2026',
      category: 'SEVILLA · BRAZO DEL ESTE',
      title: '84 hectáreas de humedal recuperadas junto a Doñana',
      summary: 'El MITECO finalizó la renaturalización de los antiguos meandros de Quintanilla y El Capitán, en el Brazo del Este. La actuación recupera zonas inundables e incorpora una laguna y puntos de observación de aves.',
      source: 'MITECO',
      url: 'https://www.miteco.gob.es/es/prensa/ultimas-noticias/2026/septiembre/el-miteco-finaliza-la-renaturalizacion-de-84-ha-de-humedal-en-el.html',
      image: 'cigueña.jpg',
      imageAlt: 'Cigüeña blanca en un humedal del Bajo Guadalquivir'
    },
    {
      date: '2026-06-23',
      dateLabel: '23 junio 2026',
      category: 'ESPECIES · CERCETA PARDILLA',
      title: 'Andalucía concentra el 63 % de la población española de cerceta pardilla',
      summary: 'Al cierre del proyecto LIFE, Andalucía registró 108 hembras reproductoras con pollos. En el Brazo del Este se recuperaron 50 hectáreas de marisma para crear nuevas zonas de alimentación y cría.',
      source: 'Junta de Andalucía',
      url: 'https://www.juntadeandalucia.es/organismos/sostenibilidadymedioambiente/servicios/actualidad/noticias/detalle/669445.html',
      image: 'cerceta.png',
      imageAlt: 'Cerceta pardilla, especie amenazada de los humedales'
    },
    {
      date: '2026-03-26',
      dateLabel: '26 marzo 2026',
      category: 'DOÑANA · AVIFAUNA',
      title: 'SEO/BirdLife recuerda que la recuperación de Doñana sigue siendo frágil',
      summary: 'Las lluvias favorecieron la inundación de la marisma y el censo de enero registró cerca de 386.000 aves acuáticas. La organización advierte de que un año húmedo no resuelve por sí solo la sobreexplotación del acuífero ni el deterioro del humedal.',
      source: 'Europa Press Andalucía',
      url: 'https://www.europapress.es/andalucia/huelva-00354/noticia-seo-birdlife-destaca-recuperacion-donana-fragil-temporal-20260326133642.html',
      image: 'lechuza.png',
      imageAlt: 'Ave silvestre de los ecosistemas andaluces'
    }
  ];

  threatenedBirds = [
    'Cerceta pardilla',
    'Focha moruna',
    'Malvasía cabeciblanca',
    'Porrón pardo',
    'Avetoro',
    'Garcilla cangrejera'
  ];

  threatenedBirdsUrl = 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/biodiversidad-y-vegetacion/fauna-amenazada/conservacion-y-recuperacion-de-especies-de-fauna-amenazada/aves-de-humedales';
}
