# Jan Weis – CV

Interaktywna strona internetowa - CV Jana Weisa. Strona obsługuje dwa języki (PL/EN), umożliwia pobranie pliku PDF

## Wymagania

- HTML5
- CSS3
- JavaScript
- Netlify (do hostingu)
- [Gofile.io](https://gofile.io/d/E8TL3I) (do przechowywania pliku PDF)

## Instalacja

1. Sklonuj repozytorium:

   git clone https://github.com/Weisjan/cv-project.git

2. Otwórz plik index.html w przeglądarce:

   start index.html

## Struktura plików

JanWeis-CV  
├── index.html  
├── style.css  
├── images
│ ├── avatar.jpg
│ └── icons
| └── ...
└── README.md

| No  | Plik       | Opis                                            |
| --- | ---------- | ----------------------------------------------- |
| 1   | index.html | Główna strona zawierająca strukturę CV          |
| 2   | style.css  | Stylizacja strony w oparciu o CSS               |
| 3   | images/    | Folder zawierający zdjęcie profilowe oraz ikony |
| 4   | README.md  | Plik Readme                                     |

## Opis działania

Strona index.html prezentuje CV i umożliwia jego dynamiczne tłumaczenie za pomocą JavaScript.

1. _Wygląd_: Strona zawiera sekcję lewą (profil, kontakt, umiejętności) oraz prawą (doświadczenie i edukacja).
2. _Tłumaczenie_: Przełącznik języka zmienia teksty między polskim i angielskim na żywo – bez przeładowywania strony.
3. _Pobieranie CV_: Kliknięcie przycisku „Download CV / Pobierz CV” przekierowuje użytkownika do pliku PDF hostowanego na Gofile.io.
4. _Stylizacja_: Całość stylizowana jest czystym CSS. Użyto fontu Montserrat i stonowanej kolorystyki.
5. _Hosting_: Projekt został wdrożony na [Netlify](https://janweis-cv.netlify.app), a status wdrożenia jest widoczny poniżej.

[![Netlify Status](https://api.netlify.com/api/v1/badges/704f99c4-4f8a-4304-90ab-320266d3a3d6/deploy-status)](https://app.netlify.com/sites/janweis-cv/deploys)

## Uwagi

- Domyślnym językiem strony jest angielski (EN)
- Przełącznik języka automatycznie zmienia zawartość bez odświeżania
- Plik PDF można zaktualizować podmieniając link DownloadLink w pliku JavaScript

## Autor

[Jan Weis](https://github.com/Weisjan)  
[github.com/Weisjan](https://github.com/Weisjan)
