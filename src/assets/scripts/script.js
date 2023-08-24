/*
* code from https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/
*
*/

function changeLanguage() {
  const selectedValue = document.getElementById('language').value;

  if (selectedValue) {
    description.textContent = language[selectedValue].description;
    contactMe.textContent = language[selectedValue].contactMe;
    optionEn.textContent = language[selectedValue].optionEn;
    optionPt.textContent = language[selectedValue].optionPt;
  }
};

const language = {
  en: {
    title: 'Bruna Carlota',
    description: "I'm a frontend developer. My main hobbies are reading, watching movies and discovering new artists on Spotify! I am creative, very collaborative and committed! I'm also always up for challenges!",
    skills: 'HTML, CSS, Javascript, React, Typescript, CI/CD, Pair programming, scrum, kanban',
    contactMe: "For more about me, here is my contact",
    optionEn: "English",
    optionPt: "Portuguese"
  },
  pt: {
    title: 'Bruna Carlota',
    description: "Meus principais hobbies são ler, assistir filmes e descobrir novos artistas no Spotify! Sou criativa, determinada e comprometida! Sempre topo desafios!",
    skills: 'HTML, CSS, Javascript, React, Typescript, CI/CD, Pair programming, scrum, kanban',
    contactMe: "Para saber mais, entre em contato comigo",
    optionEn: "Inglês",
    optionPt: "Português"
  }
};