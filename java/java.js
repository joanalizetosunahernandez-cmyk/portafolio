// Objeto con todo el contenido traducible
const translations = {
    'es': {
        title: "Portafolio - Joana Lizet Osuna Hernandez",
        header_name: "Joana Lizet Osuna Hernandez",
        header_title: "Desarrolladora Web — Front-end",
        nav_home: "Inicio",
        nav_projects: "Proyectos",
        nav_skills: "Habilidades",
        nav_about: "Sobre mí",
        intro_greeting: "Hola — soy Joana",
        intro_role: "Desarrolladora Front-End | Experiencia en HTML, CSS, JavaScript",
        intro_portfolio_desc: "Portafolio — Diseño neutro y animaciones sutiles",
        intro_main_desc: "Diseño y desarrollo de interfaces accesibles y responsivas. Aquí encontrarás mis proyectos más relevantes, habilidades técnicas y mi CV descargable.",
        proj1_title: "Proyecto: Sitio de Portafolio (Demo)",
        proj1_desc: "Portafolio responsive creado con HTML/CSS y JavaScript. Implementa navegación accesible y animaciones sutiles.",
        proj_view_demo: "Ver demo",
        proj2_title: "Proyecto: App de Tareas (Demo)",
        proj2_desc: "Aplicación sencilla para gestionar tareas con almacenamiento local, buena semántica y accesibilidad.",
        proj_view_code: "Ver código",
        cv_download: "Descargar CV (PDF)",
        contact_me: "Contactar",
        about_me_title: "Sobre mí",
        about_me_desc: "Soy estudiante / profesional en Tecnologías de la Información con interés en interfaces y experiencia de usuario. Me apasiona transformar diseños en páginas accesibles y optimizadas.",
        about_me_education_title: "Formación",
        about_me_education_desc: "Licenciatura / Técnico en Desarrollo Web — Universidad / Escuela (Año)",
        sidebar_skills_title: "Habilidades",
        sidebar_certs_title: "Certificaciones",
        sidebar_certs_desc: "Coloca aquí enlaces o imágenes de certificaciones.",
        sidebar_languages_title: "Idiomas",
        sidebar_contact_title: "Contacto rápido",
        sidebar_notes_title: "Notas para entrega",
        sidebar_note1: "Incluye al menos 2 proyectos reales con enlaces activos.",
        sidebar_note2: "Sube tu CV como cv.pdf en la misma carpeta.",
        sidebar_note3: "Reemplaza las imágenes de perfil y enlaces sociales.",
        footer_copyright: "&copy; 2025 Joana Lizet Osuna Hernandez — Portafolio profesional"
    },
    'en': {
        title: "Portfolio - Joana Lizet Osuna Hernandez",
        header_name: "Joana Lizet Osuna Hernandez",
        header_title: "Web Developer — Front-end",
        nav_home: "Home",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_about: "About me",
        intro_greeting: "Hello — I'm Joana",
        intro_role: "Front-End Developer | Experience in HTML, CSS, JavaScript",
        intro_portfolio_desc: "Portfolio — Neutral design and subtle animations",
        intro_main_desc: "Design and development of accessible and responsive interfaces. Here you will find my most relevant projects, technical skills, and downloadable CV.",
        proj1_title: "Project: Portfolio Site (Demo)",
        proj1_desc: "Responsive portfolio created with HTML/CSS and JavaScript. Implements accessible navigation and subtle animations.",
        proj_view_demo: "View demo",
        proj2_title: "Project: To-Do App (Demo)",
        proj2_desc: "Simple application to manage tasks with local storage, good semantics, and accessibility.",
        proj_view_code: "View code",
        cv_download: "Download CV (PDF)",
        contact_me: "Contact",
        about_me_title: "About me",
        about_me_desc: "I am an IT student/professional interested in user interfaces and experience. I am passionate about transforming designs into accessible and optimized pages.",
        about_me_education_title: "Education",
        about_me_education_desc: "Bachelor's / Technician in Web Development — University / School (Year)",
        sidebar_skills_title: "Skills",
        sidebar_certs_title: "Certifications",
        sidebar_certs_desc: "Place certification links or images here.",
        sidebar_languages_title: "Languages",
        sidebar_contact_title: "Quick Contact",
        sidebar_notes_title: "Notes for submission",
        sidebar_note1: "Include at least 2 real projects with active links.",
        sidebar_note2: "Upload your CV as cv.pdf in the same folder.",
        sidebar_note3: "Replace profile images and social links.",
        footer_copyright: "&copy; 2025 Joana Lizet Osuna Hernandez — Professional Portfolio"
    },
    'fr': {
        title: "Portfolio - Joana Lizet Osuna Hernandez",
        header_name: "Joana Lizet Osuna Hernandez",
        header_title: "Développeuse Web — Front-end",
        nav_home: "Accueil",
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_about: "À propos de moi",
        intro_greeting: "Bonjour — je suis Joana",
        intro_role: "Développeuse Front-End | Expérience en HTML, CSS, JavaScript",
        intro_portfolio_desc: "Portfolio — Design neutre et animations subtiles",
        intro_main_desc: "Conception et développement d'interfaces accessibles et responsives. Vous trouverez ici mes projets les plus pertinents, mes compétences techniques et mon CV téléchargeable.",
        proj1_title: "Projet: Site de Portfolio (Démo)",
        proj1_desc: "Portfolio responsive créé avec HTML/CSS et JavaScript. Implémente une navigation accessible et des animations subtiles.",
        proj_view_demo: "Voir la démo",
        proj2_title: "Projet: Application de tâches (Démo)",
        proj2_desc: "Application simple pour gérer les tâches avec stockage local, bonne sémantique et accessibilité.",
        proj_view_code: "Voir le code",
        cv_download: "Télécharger CV (PDF)",
        contact_me: "Contacter",
        about_me_title: "À propos de moi",
        about_me_desc: "Je suis étudiante / professionnelle en Technologies de l'Information avec un intérêt pour les interfaces et l'expérience utilisateur. Je suis passionnée par la transformation des designs en pages accessibles et optimisées.",
        about_me_education_title: "Formation",
        about_me_education_desc: "Licence / Technicien en développement Web — Université / École (Année)",
        sidebar_skills_title: "Compétences",
        sidebar_certs_title: "Certifications",
        sidebar_certs_desc: "Placez ici les liens ou les images des certifications.",
        sidebar_languages_title: "Langues",
        sidebar_contact_title: "Contact rapide",
        sidebar_notes_title: "Notes pour la soumission",
        sidebar_note1: "Inclure au moins 2 projets réels avec des liens actifs.",
        sidebar_note2: "Téléchargez votre CV au format cv.pdf dans le même dossier.",
        sidebar_note3: "Remplacez les images de profil et les liens sociaux.",
        footer_copyright: "&copy; 2025 Joana Lizet Osuna Hernandez — Portfolio professionnel"
    }
};

// Función para cambiar el idioma
function setLang(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // Usar innerHTML para el copyright
        }
    });

    // Actualizar el atributo lang de HTML
    document.documentElement.lang = lang; 

    // Actualizar botones de idioma activos
    document.querySelectorAll('.lang-selector button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.lang-selector button[onclick="setLang('${lang}')"]`).classList.add('active');
}

// Lógica del menú de hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    setLang('es'); // Establece el idioma por defecto al cargar la página (ej. español)

    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerButton.addEventListener('click', () => {
        hamburgerButton.classList.toggle('open');
        navLinks.classList.toggle('open');
        hamburgerButton.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    // Cerrar menú al hacer clic en un enlace (para UX móvil)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                hamburgerButton.classList.remove('open');
                navLinks.classList.remove('open');
                hamburgerButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
});