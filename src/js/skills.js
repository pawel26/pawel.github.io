import {render_list_item} from "../js/templates"


const languagesAndFrameworks = [
    "Python", "Golang", 
    "Lua", "JS", 
    "Django", "Django Rest Framework", 
    "Flask", "py.test", 
    "React", "HTML/CSS/SCSS"
]
const tools = [
    "PostgreSQL", "SQLAlchemy", 
    "Git", "Jenkins", 
    "Sentry", "Vagrant", 
    "Docker", "Celery", 
    "Redis", "Ansible basics"
]
const additional_skills = [
    "Agile", "TDD", 
    "SOLID", "Design patterns", 
    "Clean architecture", "CI/CD processes"
]


const container = document.querySelector('.skills-list--js');
const tools_container = document.querySelector('.skills-list--blue--js');
const additional_container = document.querySelector('.skills-list--dot--js');

build_skills(languagesAndFrameworks, container)
build_skills(tools, tools_container)
build_skills(additional_skills, additional_container)

function build_skills(skills_set, containter){
    for (let item of skills_set) {
        containter.innerHTML += render_list_item(item);
    }
};