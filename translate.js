const translations = {
  pl: {
    Download: "Pobierz CV",
    DownloadLink: "https://gofile.io/d/I4Kxzx",
    Switch: "EN",
    Contact: "Kontakt",
    AboutMe: "O mnie",
    AboutMeDescription:
      "Jestem absolwentem studiów inżynierskich z rosnącym zainteresowaniem w dziedzinie uczenia maszynowego. Lubię pracować zespołowo, a jednocześnie jestem mocno zmotywowany do nauki i rozwoju. Aktywnie angażuję się w działalność organizacji studenckich. W wolnym czasie gram na gitarze w zespole muzycznym, interesuję się szachami i sportem, a także uczę się języka japońskiego.",
    Skills: "Umiejętności",
    CriticalThinking: "Krytyczne myślenie",
    Teamwork: "Praca zespołowa",
    Communication: "komunikatywność",
    Creativity: "Kreatywność",
    ProblemSolving: "Rozwiązywanie problemów",
    Experience: "Doświadczenie",
    DateAntrez1: "Październik 2023 - Styczeń 2025",
    Antrez1Description:
      "Opracowywanie, testowanie i wdrażanie oprogramowania medycznego w systemie OpenCare.",
    DateAntrez2: "Lipiec 2023 - Październik 2023",
    Antrez2Description:
      "Projektowanie i tworzenie modułów systemowych oraz rozwijanie umiejętności w zakresie integracji i programowania.",
    Education: "Edukacja",
    ML: "Kurs Machine Learning A-Z",
    MLDate: "Grudzień 2024 - Obecnie",
    IE: "Magister - Informatyka i Ekonometria",
    UG: "Uniwersytet Gdański",
    UGDate: "Październik 2024 - Obecnie",
    UGProfile: "Specjalizacja: Analiza danych - Big Data",
    ACIR: "Inżynier – Automatyka, Cybernetyka i Robotyka",
    PG: "Politechnika Gdańska",
    PGDate: "Październik 2020 - Marzec 2024",
    PGProfile: "Specjalizacja: Systemy decyzyjne i Robotyka",
    Projects: "Znaczące projekty akademickie",
    AntiPlagiarism: "System antyplagiatowy",
    AntiPlagiarismDescription:
      "System, który wykrywa i zaznacza podobieństwa w treści plików, w tym konwencje nazewnictwa, strukturę, funkcjonalność oraz podobieństwo do kodu wygenerowanego przez chat GPT.",
    NAO: "Nao Robot",
    NAODescription:
      "Oprogramowanie umożliwiające robotowi NAO wykonywanie wielu podstawowych poleceń przy jednoczesnej interakcji z użytkownikiem.",
    Timelapse: "Timelapse",
    TimelapseDescription:
      "System łączący nagrania z terenu kampusu Politechniki Gdańskiej za pomocą OpenCV i usuwający poruszające się obiekty (ludzi, samochody), w celu stworzenia efektu opuszczonego kampusu.",
    TechKnowledge: "Wiedza techniczna",
    tech1:
      "Doświadczenie w programowaniu w językach <strong>Python</strong>, <strong>C++</strong> i <strong>R</strong>",
    tech2:
      "Zdolność zarządzanie bazami danych za pomocą <strong>PostgreSQL</strong>",
    tech3:
      "Dobra znajomość tworzenia stron internetowych w <strong>HTML</strong>, <strong>CSS</strong> i <strong>JavaScript</strong>",
    tech4:
      "Największe doświadczenie w pracy z <strong>Visual Studio Code</strong> i <strong>PyCharm</strong>",
    tech5: "Dobra znajomość systemu <strong>Git</strong>",
  },

  en: {
    Download: "Download CV",
    DownloadLink: "https://gofile.io/d/I4Kxzx",
    Switch: "PL",
    Contact: "Contact",
    AboutMe: "About Me",
    AboutMeDescription:
      "I am a graduate of engineering studies with a growing interest in the field of machine learning.  I enjoy collaborating with others and thrive in team environments, while also being strongly motivated to continuously learn and improve my skills. I am actively involved in student organizations. In my free time, I play guitar in a music band, I'm interested in chess and sports, and I'm also learning Japanese.",
    Skills: "Skills",
    CriticalThinking: "Critical thinking",
    Teamwork: "Teamwork",
    Communication: "Communication",
    Creativity: "Creativity",
    ProblemSolving: "Problem solving",
    Experience: "Experience",
    DateAntrez1: "October 2023 - January 2025",
    Antrez1Description:
      "Responsible for the development, testing, and deployment of medical software as part of the OpenCare system.",
    DateAntrez2: "July 2023 - October 2023",
    Antrez2Description:
      "Involved in the design and development of system modules, with a focus on enhancing integration and programming skills.",
    Education: "Education",
    ML: "Machine Learning A-Z Course",
    MLDate: "December 2024 - Present",
    IE: "Master's degree - Informatics and Econometrics",
    UG: "University of Gdańsk",
    UGDate: "October 2024 - Present",
    UGProfile: "Profile: Big data analysis",
    ACIR: "Bachelor of Engineering – Automatic Control, Cybernetics and Robotics",
    PG: "Gdańsk University of Technology",
    PGDate: "October 2020 - March 2024",
    PGProfile: "Profile: Decision Systems and Robotics",
    Projects: "Significant Academic Projects ",
    AntiPlagiarism: "Anti-plagiarism System",
    AntiPlagiarismDescription:
      "System that detects and highlights similarities in file content, including naming conventions, structure, functionality, and resemblance to code generated by chat GPT",
    NAO: "Nao Robot",
    NAODescription:
      "Software enabling the NAO robot to perform a variety of basic commands while simultaneously interacting with the user in a dynamic environment",
    Timelapse: "Timelapse",
    TimelapseDescription:
      "A system that combines footage from the Gdańsk University of Technology campus using OpenCV and removes moving objects (such as people and cars) to create an abandoned campus effect.",
    TechKnowledge: "Technical Knowledge",
    tech1:
      "Experience in <strong>Python</strong>, <strong>C++</strong> and <strong>R</strong> Programming",
    tech2: "Ability to manage databases using <strong>PostgreSQL</strong>",
    tech3:
      "Good knowledge of <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong> Web development",
    tech4:
      "Most experienced with <strong>Visual Studio Code</strong> and <strong>PyCharm</strong>",
    tech5: "Good knowledge of <strong>Git</strong>",
  },
};

let currentLang = navigator.language.startsWith("pl") ? "pl" : "en";

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];

      if (key === "Download") {
        el.setAttribute("href", translations[lang]["DownloadLink"]);
      }
    }
  });
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "pl" : "en";
  translatePage(currentLang);
});

document.addEventListener("DOMContentLoaded", () => {
  translatePage(currentLang);
});
