import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  //In dieser Komponente werden Projekte definiert, die später an die Kindkomponent (app-project-card) übergeben werden sollen.
  
  projects = {} as Project[];
 
  isCollapsed: boolean = true;

  //Sprachen - Languages
  typescript: boolean = false;
  java: boolean =false;
  sql: boolean = false;


  //Frameworks
  angular: boolean = false;
  springboot: boolean = false;
  springsecurity: boolean = false;

  filtering: boolean = false;

  //Template
  thymeleaf: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Hung Luu - Portfolio');
  }

  // ist eine Methode die initialisiert wird, sobald die Komponente aufgerufen wird. Wie eine "automatische Methode" die invoked wird
  ngOnInit(): void {
    this.projects = this.projectService.GetProject();
  }



  Filter() {
    let filterTags : Tag[] = [];

    // Wenn wir die Funktion aufrufen und die checkbox wurde gechecked, dann wird dier bestimmte Tag zu den filterTags gepusht
if(this.typescript) {
  filterTags.push(Tag.TYPESCRIPT);
}
if(this.angular) {
  filterTags.push(Tag.ANGULAR);
}
if(this.java) {
  filterTags.push(Tag.JAVA);
}
if(this.sql) {
  filterTags.push(Tag.SQL);
}
if(this.springboot) {
  filterTags.push(Tag.SPRING_BOOT);
}
if(this.springsecurity) {
  filterTags.push(Tag.SPRING_SECURITY);
}
if(this.thymeleaf) {
  filterTags.push(Tag.THYMELEAF);
}

  if(this.java || this.angular || this.sql || this.springboot || this.thymeleaf || this. springsecurity || this.typescript) {
    this.filtering = true;
  }
  else {
    this.filtering = false;
  }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.java = false;
    this.angular = false;
    this.sql = false;
    this.springboot = false;
    this.thymeleaf = false;
    this.springsecurity = false;
    this.typescript = false;

    this.filtering = false;

    this.projects = this.projectService.GetProject();
  }


}
