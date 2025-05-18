# CV

An interactive web page – Jan Weis’s CV. The site supports two languages (PL/EN) and allows downloading a PDF file.

## Requirements

- HTML5  
- CSS3  
- JavaScript  
- Netlify (for hosting)  

## Installation

1. Clone the repository:
```sh
   git clone https://github.com/Weisjan/cv-project.git
```
2. Open the `index.html` file in your browser or visit the live site: [janweis-cv](https://janweis-cv.netlify.app)

## File Structure

```
CV  
├── index.html  
├── style.css
├── translate.js  
├── images
│   ├── avatar.jpg
│   └── icons
|       └── ...
├── Jan_Weis_CV_ENG.pdf
├── Jan_Weis_CV_PL.pdf
└── README.md
```

| No  | File        | Description                                         |
| --- | ----------- | --------------------------------------------------- |
| 1   | index.html  | Main page containing the CV structure               |
| 2   | style.css   | Page styling using CSS                              |
| 3   | translate.js| Language translation handling                       |
| 4   | images/     | Folder containing profile photo and icons           |
| 5   | README.md   | This readme file                                    |

The project is deployed on [Netlify](https://janweis-cv.netlify.app), and the deployment status is shown below.

[![Netlify Status](https://api.netlify.com/api/v1/badges/704f99c4-4f8a-4304-90ab-320266d3a3d6/deploy-status)](https://app.netlify.com/sites/janweis-cv/deploys)

## Notes

- The default site language is English (EN)  
- The language switcher dynamically updates the content without page refresh  


## Author

[Jan Weis](https://github.com/Weisjan)
