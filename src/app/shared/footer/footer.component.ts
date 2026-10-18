import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule], // <-- Imprescindible para que funcionen los routerLink
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Variables para controlar la pestañota
  modalAbierta: boolean = false;
  tituloModal: string = '';
  contenidoModal: string = '';

  // Función que se activa al hacer click en los enlaces
abrirLegal(tipo: string) {
    this.modalAbierta = true;

    if (tipo === 'privacidad') {
      this.tituloModal = 'Política de Privacidad';
      this.contenidoModal = `
        <b>1. Compromiso de Transparencia</b><br>
        En ANEA (Asociación por el Medio Ambiente) nos tomamos muy en serio la confianza que depositas en nosotros. Esta Política de Privacidad describe cómo tratamos tus datos de forma honesta, segura y minimizando al máximo nuestro impacto digital.<br><br>
        
        <b>2. ¿Qué datos recogemos y para qué?</b><br>
        Cuando nos escribes a través de nuestro correo electrónico o interactúas en nuestras redes sociales, los únicos datos que gestionamos son tu nombre, dirección de email y los mensajes que decidas enviarnos. Utilizamos esta información exclusivamente para:<br>
        • Responder a tus consultas e iniciativas.<br>
        • Gestionar colaboraciones, propuestas de voluntariado o actividades ecologistas.<br>
        • Informarte sobre proyectos de la asociación si así lo has solicitado.<br><br>
        
        <b>3. Base Legal y Legitimación</b><br>
        El tratamiento de tus datos se basa en el consentimiento explícito que nos otorgas al ponerte en contacto con nosotros o al participar activamente en nuestras plataformas.<br><br>
        
        <b>4. Conservación de Datos</b><br>
        Mantendremos tus datos personales solo durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados o mientras no solicites su supresión, cumpliendo siempre con los plazos legales vigentes.<br><br>
        
        <b>5. Derechos del Usuario</b><br>
        Tienes pleno derecho a acceder a tus datos personales, rectificar cualquier información inexacta, solicitar su eliminación cuando ya no sean necesarios o revocar el consentimiento prestado. Para ejercer cualquiera de estos derechos, puedes escribirnos directamente de forma gratuita a nuestro correo electrónico: <b>aneaecologista@gmail.com</b>.
      `;
    } 
    else if (tipo === 'terminos') {
      this.tituloModal = 'Términos y Condiciones de Uso';
      this.contenidoModal = `
        <b>1. Propósito de la Web</b><br>
        Este sitio web es un espacio digital informativo y comunitario de ANEA destinado a la difusión de actividades ecologistas, proyectos de conservación medioambiental, noticias y vías de colaboración ciudadana.<br><br>
        
        <b>2. Uso Correcto de la Plataforma</b><br>
        Como usuario, te comprometes a hacer un uso responsable y pacífico del sitio web, respetando los valores de convivencia y respeto al entorno que promueve la asociación. Queda estrictamente prohibido utilizar esta web o sus canales de contacto para la difusión de contenidos ilícitos, ofensivos, comerciales no autorizados (spam) o dañinos.<br><br>
        
        <b>3. Propiedad Intelectual y Uso Compartido</b><br>
        Los contenidos propios (textos, fotografías originales e identidad de ANEA) publicados en este sitio tienen como fin educar y concienciar. Animamos a compartir la información siempre que se cite adecuadamente la fuente original y no se utilice con fines comerciales o de lucro personal.<br><br>
        
        <b>4. Enlaces a Terceros</b><br>
        Para tu comodidad y ampliación de información, nuestra web incluye enlaces a plataformas externas (como Instagram y Facebook). ANEA no se hace responsable de las políticas, prácticas o contenidos de esos sitios web externos.<br><br>
        
        <b>5. Modificaciones</b><br>
        ANEA se reserva el derecho de actualizar o modificar estos términos cuando sea necesario para adaptarlos a nuevas normativas o a la evolución de nuestras actividades de protección ambiental.
      `;
    } 
    else if (tipo === 'cookies') {
      this.tituloModal = 'Política de Cookies';
      this.contenidoModal = `
        <b>1. ¿Qué es una Cookie?</b><br>
        Una cookie es un pequeño archivo de texto que se descarga en tu navegador cuando visitas casi cualquier página web. Su objetivo es hacer que la web funcione de manera fluida y se adapte a tus preferencias de navegación.<br><br>
        
        <b>2. Filosofía de ANEA sobre las Cookies</b><br>
        En coherencia con nuestros principios éticos, buscamos un entorno digital lo más limpio, ligero y respetuoso posible. Por ello:<br>
        • <b>No</b> utilizamos cookies de rastreo masivo.<br>
        • <b>No</b> vendemos ni compartimos tu información con empresas de publicidad de terceros.<br><br>
        
        <b>3. Tipos de Cookies que utilizamos</b><br>
        • <b>Cookies Técnicas y Esenciales:</b> Son estrictamente necesarias para el correcto funcionamiento de la página web (por ejemplo, para mantener el estado de tus interacciones en la sesión actual o recordar si has aceptado este aviso).<br>
        • <b>Cookies Analíticas Sutiles:</b> Podemos utilizar herramientas estadísticas básicas y anónimas que nos ayudan a comprender qué secciones de la web resultan más interesantes para nuestra comunidad, con el único fin de mejorar los contenidos.<br><br>
        
        <b>4. Cómo controlar tus Cookies</b><br>
        Puedes restringir, bloquear o borrar las cookies de este o cualquier otro sitio web configurando las opciones directamente en tu navegador (Chrome, Firefox, Safari, Edge, etc.). Si bloqueas por completo las cookies técnicas, es posible que algunas funciones visuales de la web no rindan al 100%.
      `;
    }
  }
  // Función para cerrar la ventana
  cerrarModal() {
    this.modalAbierta = false;
    this.tituloModal = '';
    this.contenidoModal = '';
  }
}