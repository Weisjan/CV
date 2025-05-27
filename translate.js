const translations = {
  pl: {
    Download: "Pobierz CV",
    DownloadLink: "/Jan_Weis_CV_PL.pdf",
    Switch: "EN",
    Contact: "Kontakt",
    AboutMe: "O mnie",
    AboutMeDescription:
      "Jestem inżynierem z silnym nastawieniem na rozwój w obszarze uczenia maszynowego oraz analizy danych. Cechuje mnie umiejętność pracy zespołowej, samodzielność w realizacji zadań oraz zaangażowanie w rozwój zarówno techniczny, jak i interpersonalny. Aktywnie uczestniczę w inicjatywach studenckich, co pozwala mi rozwijać umiejętności organizacyjne i przywódcze. Poza pracą techniczną rozwijam pasje, które uczą dyscypliny i kreatywności — gram na gitarze w zespole heavymetalowym, trenuję szachy i uczę się języka japońskiego.",
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
      "Dobra znajomość tworzenia stron internetowych w <strong>HTML</strong> i <strong>CSS</strong>",
    tech4:
      "Doświadczenie w pracy z <strong>Visual Studio Code</strong> i <strong>PyCharm</strong>",
    tech5: "Dobra znajomość systemu <strong>Git</strong>",
  },

  en: {
    Download: "Download CV",
    DownloadLink: "/Jan_Weis_CV_ENG.pdf",
    Switch: "PL",
    Contact: "Contact",
    AboutMe: "About Me",
    AboutMeDescription:
      "I am an engineer with a strong focus on development in the area of ​​machine learning and data analysis. I am characterized by teamwork skills, independence in carrying out tasks and commitment to both technical and interpersonal development. I actively participate in student initiatives, which allows me to develop organizational and leadership skills. Apart from technical work, I develop passions that teach discipline and creativity - I play the guitar in a band, I practice chess and I learn Japanese.",
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
      "Good knowledge of <strong>HTML</strong> and <strong>CSS</strong> Web development",
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
