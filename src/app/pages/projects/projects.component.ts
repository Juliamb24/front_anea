import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  proyectos = [
    {
      titulo: 'Proyecto de sensibilización y educación ambiental',
      resumen: 'Programas para centros educativos, asociaciones, familias y público general que acercan la conservación de la marisma del Guadalquivir.',
      textoCompleto: [
        'Desarrollamos programas de educación y sensibilización ambiental dirigidos a centros educativos, asociaciones, familias y público general, con el objetivo de fomentar el conocimiento, el respeto y la conservación de los ecosistemas de la marisma del Guadalquivir.',
        'Nuestras actividades combinan el aprendizaje con la experiencia directa en la naturaleza, incluyendo proyectos de conservación, excursiones interpretativas y dinámicas participativas que permiten descubrir el valor ecológico de este entorno único.'
      ],
      imagenes: ['/cerceta.webp', '/new1.png', '/abejaruco.png']
    },
    {
      titulo: 'Actividades educativas en el Brazo del Este',
      resumen: 'Visitas, talleres y propuestas de concienciación ambiental adaptadas a centros educativos y público general.',
      textoCompleto: [
        'En el entorno del Brazo del Este organizamos visitas guiadas y actividades de concienciación ambiental adaptadas a diferentes públicos.',
        'Con los centros educativos desarrollamos programas didácticos mediante dinámicas participativas, talleres y actividades adaptadas a cada nivel formativo, promoviendo el aprendizaje sobre la biodiversidad, los humedales y la conservación del medio natural.',
        'Para el público general ofrecemos experiencias educativas y de ocio. Todas nuestras actividades buscan acercar la naturaleza a las personas de una forma dinámica, participativa y divertida, fomentando el compromiso con la protección del patrimonio natural.'
      ],
      lista: [
        'Visitas interpretativas por la marisma',
        'Escape rooms ambientales',
        'Minitalleres de observación de aves',
        'Actividades de interpretación del paisaje y los ecosistemas de las marismas',
        'Iniciativas participativas de conservación y sensibilización ambiental'
      ],
      imagenes: ['/new1.png', '/cerceta.webp', '/cigueña.jpg']
    },
    {
      titulo: 'Taller de interpretación y observación de avifauna en el Brazo del Este',
      resumen: 'Iniciación a la observación e identificación de las aves de los humedales con juegos y actividades prácticas.',
      textoCompleto: [
        'Este taller está dirigido a personas que desean iniciarse en la observación e identificación de las aves presentes en los humedales. Durante la actividad se explican los conceptos básicos para reconocer las especies más frecuentes, proporcionando claves de identificación, técnicas de observación y consejos prácticos para mejorar la eficacia en el campo.',
        'Con el objetivo de hacer el aprendizaje más dinámico y participativo, el taller se complementa con juegos y actividades que permiten afianzar los conocimientos adquiridos de una forma práctica, amena y divertida.'
      ],
      imagenes: ['/abejaruco.png', '/cigueña.jpg', '/cerceta.webp']
    },
    {
      titulo: 'Visitas guiadas por el Brazo del Este',
      resumen: 'Recorridos para conocer los hábitats, las especies y los valores naturales y culturales de este humedal.',
      textoCompleto: [
        'Nuestras visitas guiadas ofrecen una experiencia única para descubrir el extraordinario valor natural del Brazo del Este, uno de los humedales más importantes de la marisma del Guadalquivir. A lo largo del recorrido, los participantes conocen la biodiversidad del entorno, su funcionamiento ecológico y la importancia de su conservación.',
        'Durante la actividad se interpretan los diferentes hábitats presentes en la marisma, se observan las especies de flora y fauna más representativas y se explican aspectos relacionados con la migración de las aves, la gestión del humedal y los valores ambientales y culturales de este espacio natural.',
        'Las visitas se adaptan a diferentes públicos, desde centros educativos hasta asociaciones, grupos organizados y público general, ofreciendo una experiencia didáctica, participativa y enriquecedora en pleno contacto con la naturaleza.'
      ],
      imagenes: ['/cigueña.jpg', '/cerceta.webp', '/new1.png'],
      videos: [
        { titulo: 'Los Palacios y Villafranca celebra el Día Mundial de los Humedales', url: 'https://www.youtube.com/watch?v=tVZ14i6Xh7o' },
        { titulo: 'Los Palacios celebra el Día Internacional de los Humedales', url: 'https://www.youtube.com/watch?v=L4Tt3AVpq18' }
      ]
    },
    {
      titulo: 'Ruta interpretativa y observación de avifauna en el Humedal Cerro de las Cigüeñas',
      resumen: 'Jornada con charla sobre conservación, observación de aves, rastros de mamíferos y reptiles del entorno.',
      textoCompleto: [
        'Durante esta jornada, los participantes descubrieron la importancia ecológica del Humedal Cerro de las Cigüeñas a través de una charla sobre la conservación de los humedales y los proyectos desarrollados para su protección.',
        'La actividad se completó con una sesión de observación de avifauna, un taller de reconocimiento de rastros de mamíferos y una charla sobre los reptiles del entorno, ofreciendo una experiencia práctica y participativa para conocer la biodiversidad de este espacio.'
      ],
      imagenes: ['/new1.png', '/lechuza.png', '/alzacola.jpg']
    },
    {
      titulo: 'Encuentro de mujeres, aves y naturaleza',
      resumen: 'Jornada de convivencia, ruta interpretativa y acercamiento al anillamiento científico con mujeres rurales.',
      textoCompleto: [
        'Celebramos una jornada dedicada a poner en valor el papel de la mujer rural en la conservación del patrimonio natural, fomentando el aprendizaje, la convivencia y la sensibilización ambiental a través de las aves y la naturaleza.',
        'La actividad incluyó una sesión de anillamiento científico, donde las participantes pudieron conocer de cerca diferentes especies de aves y descubrir la importancia de esta técnica para su estudio y conservación. Posteriormente, se realizó una ruta interpretativa por el entorno para conocer la biodiversidad del espacio y la importancia de preservar estos ecosistemas.',
        'La jornada finalizó con un espacio de convivencia e intercambio de experiencias, fortaleciendo la conexión entre mujeres rurales unidas por su interés en la naturaleza, la conservación y el desarrollo sostenible del medio rural.'
      ],
      imagenes: ['/ayuntamiento.jpg', '/new1.png', '/cerceta.webp']
    },
    {
      titulo: 'Plantación en el Humedal Cerro de las Cigüeñas',
      resumen: 'Restauración ambiental mediante la plantación de especies vegetales adaptadas al humedal.',
      textoCompleto: [
        'Llevamos a cabo una jornada de plantación en el Humedal Cerro de las Cigüeñas con el objetivo de contribuir a la restauración ambiental y mejorar la biodiversidad de este espacio natural.',
        'Durante la actividad, las personas participantes colaboraron en la plantación de especies vegetales adaptadas al humedal, contribuyendo a la recuperación del ecosistema y reforzando su compromiso con la conservación del medio ambiente.'
      ],
      imagenes: ['/new1.png', '/alzacola.jpg', '/cerceta.png']
    },
    {
      titulo: 'Taller de cajas nido en la Dehesa de la Atalaya',
      resumen: 'Construcción e instalación de cajas nido, paseo interpretativo y charlas sobre la biodiversidad del estuario.',
      textoCompleto: [
        'Organizamos un taller de construcción e instalación de cajas nido en la Dehesa de la Atalaya con el objetivo de favorecer la conservación de las aves y fomentar la participación ciudadana en la protección de la biodiversidad.',
        'Durante la jornada, las personas participantes montaron cajas nido, realizaron un paseo interpretativo por el entorno natural y asistieron a charlas divulgativas sobre la fauna, la flora y la importancia de conservar los ecosistemas del estuario del Guadalquivir.',
        'Esta actividad permitió acercar a los asistentes al medio natural de una forma práctica y participativa, promoviendo el conocimiento de la biodiversidad y el compromiso con la conservación de este valioso entorno.'
      ],
      imagenes: ['/new1.png', '/cigueña.jpg', '/abejaruco.png']
    }
  ];

}