import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-anillamiento',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './anillamiento.component.html',
  styleUrl: './anillamiento.component.css'
})
export class AnillamientoComponent {
  environmentalProgram = {
    title: 'Sensibilización y educación ambiental',
    paragraphs: [
      'Desarrollamos programas de educación y sensibilización ambiental dirigidos a centros educativos, asociaciones, familias y público general, con el objetivo de fomentar el conocimiento, el respeto y la conservación de los ecosistemas de la marisma del Guadalquivir.',
      'Nuestras actividades combinan el aprendizaje con la experiencia directa en la naturaleza, incluyendo proyectos de conservación, excursiones interpretativas y dinámicas participativas que permiten descubrir el valor ecológico de este entorno único.'
    ],
    brazoDelEsteIntro: 'En el entorno del Brazo del Este organizamos visitas guiadas y actividades de concienciación ambiental adaptadas a diferentes públicos.',
    schools: 'Con los centros educativos desarrollamos programas didácticos mediante dinámicas participativas, talleres y actividades adaptadas a cada nivel formativo, promoviendo el aprendizaje sobre la biodiversidad, los humedales y la conservación del medio natural.',
    publicIntro: 'Para el público general ofrecemos experiencias educativas y de ocio como:',
    publicActivities: [
      'Visitas interpretativas por la marisma',
      'Escape rooms ambientales',
      'Minitalleres de observación de aves',
      'Actividades de interpretación del paisaje y los ecosistemas de las marismas',
      'Iniciativas participativas de conservación y sensibilización ambiental'
    ],
    closing: 'Todas nuestras actividades buscan acercar la naturaleza a las personas de una forma dinámica, participativa y divertida, fomentando el compromiso con la protección del patrimonio natural.'
  };

  wetlandVideos = [
    {
      title: 'Los Palacios y Villafranca celebra el Día Mundial de los Humedales',
      url: 'https://www.youtube.com/watch?v=tVZ14i6Xh7o'
    },
    {
      title: 'Los Palacios celebra el Día Internacional de los Humedales',
      url: 'https://www.youtube.com/watch?v=L4Tt3AVpq18'
    }
  ];

  activities = [
    {
      title: 'Taller de interpretación y observación de avifauna en el Brazo del Este',
      paragraphs: [
        'Este taller está dirigido a personas que desean iniciarse en la observación e identificación de las aves presentes en los humedales. Durante la actividad se explican los conceptos básicos para reconocer las especies más frecuentes, proporcionando claves de identificación, técnicas de observación y consejos prácticos para mejorar la eficacia en el campo.',
        'Con el objetivo de hacer el aprendizaje más dinámico y participativo, el taller se complementa con juegos y actividades que permiten afianzar los conocimientos adquiridos de una forma práctica, amena y divertida.'
      ]
    },
    {
      title: 'Visitas guiadas por el Brazo del Este',
      paragraphs: [
        'Nuestras visitas guiadas ofrecen una experiencia única para descubrir el extraordinario valor natural del Brazo del Este, uno de los humedales más importantes de la marisma del Guadalquivir. A lo largo del recorrido, los participantes conocen la biodiversidad del entorno, su funcionamiento ecológico y la importancia de su conservación.',
        'Durante la actividad se interpretan los diferentes hábitats presentes en la marisma, se observan las especies de flora y fauna más representativas y se explican aspectos relacionados con la migración de las aves, la gestión del humedal y los valores ambientales y culturales de este espacio natural.',
        'Las visitas se adaptan a diferentes públicos, desde centros educativos hasta asociaciones, grupos organizados y público general, ofreciendo una experiencia didáctica, participativa y enriquecedora en pleno contacto con la naturaleza.'
      ]
    },
    {
      title: 'Taller de cajas nido en la Dehesa de la Atalaya',
      paragraphs: [
        'Organizamos un taller de construcción e instalación de cajas nido en la Dehesa de la Atalaya con el objetivo de favorecer la conservación de las aves y fomentar la participación ciudadana en la protección de la biodiversidad.',
        'Durante la jornada, las personas participantes montaron cajas nido, realizaron un paseo interpretativo por el entorno natural y asistieron a charlas divulgativas sobre la fauna, la flora y la importancia de conservar los ecosistemas del estuario del Guadalquivir.',
        'Esta actividad permitió acercar a los asistentes al medio natural de una forma práctica y participativa, promoviendo el conocimiento de la biodiversidad y el compromiso con la conservación de este valioso entorno.'
      ]
    },
    {
      title: 'Ruta interpretativa y observación de avifauna en el Humedal Cerro de las Cigüeñas',
      paragraphs: [
        'Durante esta jornada, los participantes descubrieron la importancia ecológica del Humedal Cerro de las Cigüeñas a través de una charla sobre la conservación de los humedales y los proyectos desarrollados para su protección.',
        'La actividad se completó con una sesión de observación de avifauna, un taller de reconocimiento de rastros de mamíferos y una charla sobre los reptiles del entorno, ofreciendo una experiencia práctica y participativa para conocer la biodiversidad de este espacio.'
      ]
    },
    {
      title: 'Encuentro de mujeres, aves y naturaleza',
      paragraphs: [
        'Celebramos una jornada dedicada a poner en valor el papel de la mujer rural en la conservación del patrimonio natural, fomentando el aprendizaje, la convivencia y la sensibilización ambiental a través de las aves y la naturaleza.',
        'La actividad incluyó una sesión de anillamiento científico, donde las participantes pudieron conocer de cerca diferentes especies de aves y descubrir la importancia de esta técnica para su estudio y conservación. Posteriormente, se realizó una ruta interpretativa por el entorno para conocer la biodiversidad del espacio y la importancia de preservar estos ecosistemas.',
        'La jornada finalizó con un espacio de convivencia e intercambio de experiencias, fortaleciendo la conexión entre mujeres rurales unidas por su interés en la naturaleza, la conservación y el desarrollo sostenible del medio rural.'
      ]
    },
    {
      title: 'Plantación en el Humedal Cerro de las Cigüeñas',
      paragraphs: [
        'Llevamos a cabo una jornada de plantación en el Humedal Cerro de las Cigüeñas con el objetivo de contribuir a la restauración ambiental y mejorar la biodiversidad de este espacio natural.',
        'Durante la actividad, las personas participantes colaboraron en la plantación de especies vegetales adaptadas al humedal, contribuyendo a la recuperación del ecosistema y reforzando su compromiso con la conservación del medio ambiente.'
      ]
    }
  ];

  birds = [
    {
      title: 'Cerceta pardilla',
      text: 'Una de las aves acuáticas más amenazadas de Europa. La pérdida y degradación de los humedales son algunas de sus principales amenazas.',
      image: 'cerceta.png'
    },
    {
      title: 'Lechuza común',
      text: 'Rapaz nocturna de vuelo silencioso que ayuda a mantener el equilibrio de los ecosistemas agrícolas al alimentarse de roedores.',
      image: 'lechuza.png'
    },
    {
      title: 'Alzacola rojizo',
      text: 'Especie ligada a los paisajes agrícolas tradicionales, cuya presencia es un indicador de la biodiversidad rural.',
      image: 'alzacola.jpg'
    },
    {
      title: 'Abejaruco europeo',
      text: 'Visitante estival de colores vivos que captura insectos al vuelo y anida en taludes de tierra.',
      image: 'abejaruco.png'
    },
    {
      title: 'Cernícalo vulgar',
      text: 'Pequeña rapaz diurna que contribuye al equilibrio de los campos gracias a su dieta de insectos y pequeños roedores.',
      image: 'cernicalo.png'
    },
    {
      title: 'Cigüeña blanca',
      text: 'Ave emblemática de los humedales y zonas inundables, ligada al paisaje natural y cultural de la comarca.',
      image: 'cigueña.jpg'
    }
  ];
}
