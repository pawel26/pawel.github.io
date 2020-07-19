import "../scss/main.scss";


function render_list_item(value) {
    return `<li class="skills-list__item">${value}</li>`;
}

function render_project(name, description, homepage, html_url){
    const template = ` <article class="project">
       <div class="project__window">
         <span class="project__circle"></span>
         <span class="project__circle"></span>
         <span class="project__circle"></span>
       </div>
       <div class="project__content">
         <img src="img/github.svg" alt="" />
         <h3 class="project__grid project__title">
           <span class="project__label">project:</span>
           <span>${name}</span>
         </h3>
         <p class="project__grid project__grid--description">
           <span class="project__label">description:</span
           ><span>${description}</span>
         </p>
         <p class="project__grid">
           <span class="project__label">demo:</span
           ><span
             >&lt;<a
               target="_blank"
               rel="noopener noreferrer"
               class="project__link"
               href="${homepage}"
               title="${name} - demo"
               >see_here</a
             >&gt;</span
           >
         </p>
         <p class="project__grid">
           <span class="project__label">github:</span>
           <span>
             &lt;<a
               class="project__link"
               href="${html_url}"
               target="_blank"
               rel="noopener noreferrer"
               title="${name} - code"
               >source_code</a
             >&gt;
           </span>
         </p>
       </div>
     </article>`;
    return template;
}

export default render_list_item