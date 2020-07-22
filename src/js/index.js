import "../scss/main.scss";
import "../js/skills.js"
import {render_project} from "../js/templates"

console.log("Hi, I'm Paweł - nice to meet you 🚀");

const repository = "https://api.github.com/users/pawel26/repos?sort=created&direction=asc"

fetch_projects(repository)


function fetch_projects(repo_url){
  fetch(repo_url)
    .then((res) => res.json())
    .then((res) => {
      const container = document.querySelector('.projects-grid--js');
      for (let repo of res) {
          const {description, homepage, html_url, name, fork} = repo;

          if (description && !fork){
              container.innerHTML += render_project(
                name, description, homepage, html_url
                );
          } 
      }
    })
    .catch((e) => console.log(e));
}
