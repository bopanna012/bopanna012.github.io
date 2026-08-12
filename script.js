// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Language toggle (English default, German alternate)
const translations = {
  'nav.about': { en: 'About', de: 'Über mich' },
  'nav.skills': { en: 'Skills', de: 'Fähigkeiten' },
  'nav.experience': { en: 'Experience', de: 'Erfahrung' },
  'nav.education': { en: 'Education', de: 'Ausbildung' },
  'nav.projects': { en: 'Projects', de: 'Projekte' },
  'nav.certifications': { en: 'Certifications', de: 'Zertifizierungen' },
  'nav.languages': { en: 'Languages', de: 'Sprachen' },
  'nav.contact': { en: 'Contact', de: 'Kontakt' },

  'hero.greeting': { en: "Hi, I'm Yashu 👋", de: 'Hallo, ich bin Yashu 👋' },
  'hero.subtitle': { en: 'A cloud engineer learning to build and showcase my work.', de: 'Ein Cloud Engineer, der lernt, seine Arbeit aufzubauen und zu präsentieren.' },
  'hero.viewWork': { en: 'View My Work', de: 'Meine Arbeit ansehen' },
  'hero.downloadResume': { en: 'Download Resume', de: 'Lebenslauf herunterladen' },

  'stats.years': { en: 'Years Experience', de: 'Jahre Erfahrung' },
  'stats.projects': { en: 'Projects Completed', de: 'Abgeschlossene Projekte' },
  'stats.certifications': { en: 'Certifications', de: 'Zertifizierungen' },
  'stats.clients': { en: 'KPI Dashboards', de: 'KPI-Dashboards' },

  'about.heading': { en: 'About Me', de: 'Über mich' },
  'about.body': {
    en: "Master's student in Data Science with 4 years' experience as a Cloud Engineer and Implementation Consultant at ArisGlobal, cutting deployment time and project go-live cost by 15%. Strong hands-on foundation in SQL and Power BI — writing queries to extract, join and aggregate data from relational databases, and building dashboards and data models that turn raw operational data into clear, actionable insights. Experienced partnering with technical and non-technical stakeholders across Finance and Operations to document data logic and surface process inefficiencies. Now looking to bring that analytical rigour to data-driven roles across analytics, machine learning and business intelligence, with a strong interest in e-Mobility and fast-moving product environments.",
    de: 'Masterstudent in Data Science mit 4 Jahren Erfahrung als Cloud Engineer und Implementation Consultant bei ArisGlobal, wo ich die Bereitstellungszeit und die Projekt-Go-live-Kosten um 15 % senken konnte. Fundierte praktische Grundlage in SQL und Power BI — vom Schreiben von Abfragen zum Extrahieren, Verknüpfen und Aggregieren von Daten aus relationalen Datenbanken bis hin zum Aufbau von Dashboards und Datenmodellen, die rohe operative Daten in klare, umsetzbare Erkenntnisse verwandeln. Erfahren in der Zusammenarbeit mit technischen und nicht-technischen Stakeholdern aus den Bereichen Finance und Operations, um Datenlogik zu dokumentieren und Prozessineffizienzen aufzudecken. Ich möchte diese analytische Präzision nun in datengetriebene Rollen in den Bereichen Analytics, Machine Learning und Business Intelligence einbringen, mit besonderem Interesse an E-Mobilität und dynamischen Produktumgebungen.'
  },

  'skills.heading': { en: 'Skills', de: 'Fähigkeiten' },
  'skills.group.analytics': { en: 'Analytics & Reporting', de: 'Analyse & Reporting' },
  'skills.group.programming': { en: 'Programming & Databases', de: 'Programmierung & Datenbanken' },
  'skills.group.cloud': { en: 'Cloud & DevOps', de: 'Cloud & DevOps' },
  'skills.group.tools': { en: 'Tools', de: 'Tools' },

  'experience.heading': { en: 'Experience', de: 'Berufserfahrung' },
  'experience.bullet1': {
    en: 'Improved system performance and data integrity by optimizing SQL queries and database structures, and automated log file validation through a Linux shell script that flagged execution errors and specified issues — saving 30–40 working hours and 3–5% of allocated project go-live cost.',
    de: 'Verbesserte Systemleistung und Datenintegrität durch Optimierung von SQL-Abfragen und Datenbankstrukturen und automatisierte die Validierung von Logdateien mittels eines Linux-Shell-Skripts, das Ausführungsfehler und spezifische Probleme erkannte — wodurch 30–40 Arbeitsstunden und 3–5 % der veranschlagten Projekt-Go-live-Kosten eingespart wurden.'
  },
  'experience.bullet2': {
    en: 'Built and managed GitHub Actions CI/CD pipelines to automate deployments — triggering releases on push, sourcing configuration files from S3, and executing JAR builds for seamless, repeatable rollouts; managed multiple concurrent project deployments, delivering high-quality solutions under tight deadlines.',
    de: 'Erstellte und verwaltete GitHub Actions CI/CD-Pipelines zur Automatisierung von Deployments — Auslösen von Releases bei jedem Push, Beziehen von Konfigurationsdateien aus S3 und Ausführen von JAR-Builds für nahtlose, wiederholbare Rollouts; betreute mehrere parallele Projekt-Deployments und lieferte qualitativ hochwertige Lösungen unter engen Zeitvorgaben.'
  },
  'experience.bullet3': {
    en: 'Leveraged AWS services — EC2, Lambda, S3, RDS, Secrets Manager, Systems Manager, CloudWatch, and Auto Scaling — including serverless architectures, to enhance system scalability, security, and performance across deployments and release upgrades.',
    de: 'Nutzte AWS-Dienste — EC2, Lambda, S3, RDS, Secrets Manager, Systems Manager, CloudWatch und Auto Scaling — einschließlich serverloser Architekturen, um Skalierbarkeit, Sicherheit und Leistung bei Deployments und Release-Upgrades zu verbessern.'
  },
  'experience.bullet4': {
    en: 'Managed AWS and Datadog monitoring dashboards to proactively detect and resolve cloud and DevOps issues, reducing error resolution time by 20–30% compared to the previous approach.',
    de: 'Verwaltete AWS- und Datadog-Monitoring-Dashboards, um Cloud- und DevOps-Probleme proaktiv zu erkennen und zu beheben, wodurch die Fehlerbehebungszeit im Vergleich zum bisherigen Ansatz um 20–30 % reduziert wurde.'
  },
  'experience.bullet5': {
    en: 'Implemented Auth0 as a newly adopted third-party identity provider for the project, configuring SSO and passwordless authentication across multiple customer tenants.',
    de: 'Implementierte Auth0 als neu eingeführten Drittanbieter-Identitätsdienst für das Projekt und konfigurierte SSO sowie passwortlose Authentifizierung für mehrere Kunden-Mandanten.'
  },
  'experience.bullet6': {
    en: 'Established the setup process for onboarding customers onto the new platform, defining a consistent, secure configuration standard for connections, credentials, and access policies.',
    de: 'Etablierte den Einrichtungsprozess für das Onboarding von Kunden auf die neue Plattform und definierte einen einheitlichen, sicheren Konfigurationsstandard für Verbindungen, Zugangsdaten und Zugriffsrichtlinien.'
  },

  'education.heading': { en: 'Education', de: 'Ausbildung' },
  'education.master': { en: "Master's in Data Science", de: 'Master in Data Science' },
  'education.bachelor': { en: "Bachelor's in Computer Science", de: 'Bachelor in Informatik' },

  'projects.heading': { en: 'Projects', de: 'Projekte' },
  'projects.supplyChain': {
    en: "A data-visualization study of global maritime trade (2019–2026) using IMF PortWatch's daily, satellite-derived AIS data for ~90,000 vessels. Answers 10 analytical questions on how the 2023–24 Red Sea and Panama Canal disruptions rerouted trade rather than shrinking it, via a shared pipeline feeding both a notebook and a live dashboard.",
    de: 'Eine Datenvisualisierungsstudie zum globalen Seehandel (2019–2026) auf Basis der täglichen, satellitengestützten AIS-Daten von IMF PortWatch für rund 90.000 Schiffe. Beantwortet 10 analytische Fragen dazu, wie die Störungen im Roten Meer und im Panamakanal 2023–24 den Handel eher umgeleitet als verringert haben — über eine gemeinsame Pipeline, die sowohl ein Notebook als auch ein Live-Dashboard speist.'
  },
  'projects.llmCaching': {
    en: 'A hybrid caching layer for LLM applications that checks an exact-match cache, then a semantic cache (sentence-embedding similarity via FAISS) before falling back to a local LLM — cutting latency, cost, and repeated inference. Includes a benchmarking and threshold-tuning framework for cache-hit quality.',
    de: 'Eine hybride Caching-Schicht für LLM-Anwendungen, die zunächst einen Exact-Match-Cache und anschließend einen semantischen Cache (Ähnlichkeit von Satz-Embeddings via FAISS) prüft, bevor auf ein lokales LLM zurückgegriffen wird — wodurch Latenz, Kosten und wiederholte Inferenz reduziert werden. Enthält ein Benchmarking- und Schwellenwert-Tuning-Framework zur Bewertung der Cache-Trefferqualität.'
  },
  'projects.cropRecommendation': {
    en: 'A machine-learning system that recommends the best-suited crop for a plot of land from its soil nutrients (N/P/K) and climate (temperature, humidity, pH, rainfall), trained on the Kaggle Crop Recommendation dataset (2,200 records, 22 crop classes). Ships as a Streamlit app with explainable feature importances plus a Power BI dashboard for exploring the data.',
    de: 'Ein Machine-Learning-System, das anhand von Bodennährstoffen (N/P/K) und Klimadaten (Temperatur, Luftfeuchtigkeit, pH-Wert, Niederschlag) die am besten geeignete Anbaupflanze für eine Fläche empfiehlt, trainiert auf dem Kaggle-Datensatz „Crop Recommendation" (2.200 Datensätze, 22 Pflanzenklassen). Enthält eine Streamlit-App mit erklärbaren Feature-Wichtigkeiten sowie ein Power-BI-Dashboard zur Datenexploration.'
  },
  'projects.biodiversity': {
    en: 'An end-to-end ML pipeline for weakly-labelled bird-sound classification, built around the Kaggle BirdCLEF 2026 dataset. Converts field-recorded audio into Log-Mel spectrograms and classifies them with a 2D CNN using Multiple-Instance-Learning pooling over frame-level predictions, since only file-level species tags are available. A Streamlit dashboard lets you upload audio and view spectrograms, species predictions, and confidence scores.',
    de: 'Eine durchgängige ML-Pipeline zur schwach gelabelten Klassifikation von Vogelstimmen, aufgebaut auf dem Kaggle-Datensatz BirdCLEF 2026. Wandelt im Feld aufgenommene Audiodaten in Log-Mel-Spektrogramme um und klassifiziert sie mit einem 2D-CNN unter Verwendung von Multiple-Instance-Learning-Pooling über Frame-Level-Vorhersagen, da nur Artenkennzeichnungen auf Dateiebene vorliegen. Ein Streamlit-Dashboard ermöglicht das Hochladen von Audiodateien sowie die Anzeige von Spektrogrammen, Artvorhersagen und Konfidenzwerten.'
  },
  'projects.retailInventory': {
    en: 'A full-stack decision-support system for retail inventory management: a normalized multi-store, multi-supplier PostgreSQL schema with live stock-health monitoring, reorder alerts, and days-to-expiry tracking. Derived-field logic (stock status, reorder alerts, capacity) is implemented once on the backend and imported directly by the frontend so the UI can never disagree with the API.',
    de: 'Ein Full-Stack-Entscheidungsunterstützungssystem für das Bestandsmanagement im Einzelhandel: ein normalisiertes PostgreSQL-Schema für mehrere Filialen und Lieferanten mit Live-Überwachung des Lagerzustands, Nachbestellwarnungen und Verfolgung der Resttage bis zum Ablaufdatum. Die abgeleitete Feldlogik (Lagerstatus, Nachbestellwarnungen, Kapazität) ist einmalig im Backend implementiert und wird direkt vom Frontend übernommen, sodass die Oberfläche nie von der API abweichen kann.'
  },
  'links.github': { en: 'View on GitHub', de: 'Auf GitHub ansehen' },
  'links.demo': { en: 'Live Demo', de: 'Live-Demo' },

  'certifications.heading': { en: 'Certifications & Honors', de: 'Zertifizierungen & Auszeichnungen' },
  'certifications.valueChampion': { en: 'Recognized for delivering the Roche project go-live with zero production issues.', de: 'Ausgezeichnet für den erfolgreichen Go-live des Roche-Projekts ohne Produktionsprobleme.' },
  'certifications.bestTeam': { en: 'Achieved the title in the ArisGlobal ELEVATE award for the successful implementation of four live projects within a brief timeframe.', de: 'Erhielt die Auszeichnung im Rahmen des ArisGlobal-ELEVATE-Awards für die erfolgreiche Umsetzung von vier Live-Projekten innerhalb kurzer Zeit.' },
  'certifications.spotAward': { en: 'Awarded for rapidly mastering core cloud technologies and contributing to the live production environment within a short onboarding period.', de: 'Ausgezeichnet für die schnelle Beherrschung zentraler Cloud-Technologien und den Beitrag zur Live-Produktionsumgebung innerhalb einer kurzen Einarbeitungszeit.' },

  'languages.heading': { en: 'Languages', de: 'Sprachen' },
  'languages.english': { en: 'English — C1', de: 'Englisch — C1' },
  'languages.german': { en: 'German — A2', de: 'Deutsch — A2' },

  'contact.heading': { en: 'Contact', de: 'Kontakt' },
  'contact.emailLabel': { en: 'Email:', de: 'E-Mail:' },
  'contact.name': { en: 'Name', de: 'Name' },
  'contact.emailField': { en: 'Email', de: 'E-Mail' },
  'contact.message': { en: 'Message', de: 'Nachricht' },
  'contact.send': { en: 'Send Message', de: 'Nachricht senden' },

  'skipLink': { en: 'Skip to content', de: 'Zum Inhalt springen' },
  'footer.builtWith': { en: 'Built with HTML, CSS & JS.', de: 'Erstellt mit HTML, CSS & JS.' }
};

const langOptions = document.querySelectorAll('.lang-option');
function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const entry = translations[el.getAttribute('data-i18n')];
    if (entry) el.textContent = entry[lang];
  });
  langOptions.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}
const savedLang = localStorage.getItem('lang') === 'de' ? 'de' : 'en';
applyLanguage(savedLang);
langOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    localStorage.setItem('lang', btn.dataset.lang);
    applyLanguage(btn.dataset.lang);
  });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
function syncThemeIcon() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}
syncThemeIcon();
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  syncThemeIcon();
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    document.getElementById('navMenu').classList.remove('open');
  });
});

// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});

// Back-to-top button
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll progress bar
const progressBar = document.getElementById('progressBar');
function updateProgressBar() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = percent + '%';
  backToTop.classList.toggle('visible', window.scrollY > 400);
}
window.addEventListener('scroll', updateProgressBar);
updateProgressBar();

// Scroll-reveal animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Active nav link on scroll
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = [...navLinks]
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

sections.forEach(section => activeObserver.observe(section));