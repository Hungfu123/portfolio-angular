import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Portfolio Website',
      summary: 'Eine eigene Porfolio Webseite, um meine Projekte darstellen zu können',
      description: '',
      projectLink: 'https://github.com/Hungfu123/portfolio-angular',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },

    {
      id: 1,
      name: 'RoomMate',
      summary: 'Raum Reservierungs App mit präferierter Ausstattung',
      description: 'RoomMate ist eine innovative Raummanagement-Webanwendung, die mit Spring Boot und Java entwickelt wurde. Ziel ist es, wissenschaftlichen Angestellten die Reservierung von Büroplätzen mit spezifischer Hardware für bestimmte Zeiträume zu ermöglichen. Die Anwendung bietet regulären Benutzern die Möglichkeit, Plätze zu reservieren, während Administrator:innen Platzinformationen verwalten, Ausstattung ändern und Reservierungen managen können. Die Suche nach Plätzen ist mit Filteroptionen für Ausstattung und Zeiträume ausgestattet. Die Integration mit dem fiktiven KeyMaster-System ermöglicht zudem das Freigeben von Türen zu bestimmten Zeiten. Technologisch basiert das System auf Spring Security für die Sicherheit und Thymeleaf für die Benutzeroberfläche. RoomMate bietet somit nicht nur Raumoptimierung, sondern auch eine effiziente Nutzung von Sicherheits- und Webtechnologien für eine optimale Nutzererfahrung an der Universität.',
      projectLink: 'https://github.com/Hungfu123/roomMate',
      pictures: ["assets/roomMate.jpg", "assets/RoomMate-UI.jpg", "assets/roomMate-search.jpg", "assets/roomMate-booking.jpg", "assets/roomMate-success.jpg"  ],
      tags: [Tag.SPRING_BOOT, Tag.JAVA, Tag.SQL, Tag.SPRING_SECURITY, Tag.THYMELEAF],
    },

    {
      id: 2,
      name: 'Blog Web App',
      summary: 'Blog App, wo User ihre eigenen Einträge posten und kommentieren können',
      description: 'Ich habe eine moderne Blog-Webanwendung entwickelt, die auf Spring Boot und Java SQL basiert. Mit Spring JPA habe ich eine nahtlose Datenbankintegration realisiert. Diese Anwendung ermöglicht es Benutzern, mühelos eigene Beiträge zu verfassen und Kommentare zu hinterlassen. Durch die Implementierung eines übersichtlichen Admin-Bereichs wird eine effektive Verwaltung gewährleistet. Die Anmeldung ist durch die Integration von Spring Security sicher gestaltet. Die Benutzeroberfläche wurde durch die Verwendung von HTML, Thymeleaf und CSS Bootstrap ansprechend gestaltet, um eine intuitive und ansprechende Benutzererfahrung zu bieten.',
      projectLink: 'https://github.com/Hungfu123/web-blog-app',
      pictures: ["assets/blogapp.jpg", "assets/blogapp-test.jpg","assets/blogapp-kommentare.jpg", "assets/blogapp-anmelden.jpg", "assets/blogapp-admin.jpg", ],
      tags: [Tag.SPRING_BOOT, Tag.JAVA, Tag.SQL, Tag.SPRING_SECURITY, Tag.THYMELEAF],
    },
    {
      id: 3,
      name: 'RESTful Web Services einer Planzen-Plattform (ONGOING)',
      summary: 'Plattform zur Katalogisierung und Pflege städtischer Bepflanzung',
      description: 'Ich habe ein fortschrittliches RESTful Web Service entwickelt, das eine Plattform für die Katalogisierung und Pflege städtischer Bepflanzung ermöglicht. Nutzer, als "Bürger" bezeichnet, können Pflanzen eintragen, an gärtnerischen Maßnahmen teilnehmen und ihren Wohnort angeben. Jede Pflanze hat deutsche und lateinische Bezeichnungen, ein Pflanzdatum und kann von einem Gärtner gepflanzt oder als wildwachsend betrachtet werden. Pflegemaßnahmen, die an einem bestimmten Datum stattfinden, können von Bürgern und einem Gärtner durchgeführt werden. Gärtner haben Spezialisierungen, erstellen Pflegeprotokolle und bewerten Maßnahmen (Skala: 1 - 5).',
      projectLink: 'ONGOING',
      pictures: ["assets/pflanzen.jpg", "assets/pflanzen.jpg"],
      tags: [Tag.JAVA, Tag.SQL, Tag.SPRING_BOOT],
    },
    {
      id: 4,
      name: 'SplitMoneyApp',
      summary: 'Anwendung ohne UI, um Ausgaben gerecht zu verteilen',
      description: 'Die SplitMoneyApp ist eine kleine Anwendung ohne Benutzeroberfläche (UI), die entwickelt wurde, um mit Streams und Datenstrukturen zu arbeiten. Sie bietet eine Lösung für das Aufteilen von Ausgaben, insbesondere in Situationen, in denen mehrere Personen unterschiedliche Beträge bezahlt haben. ',
      projectLink: 'https://github.com/Hungfu123/SplitMoneyApp',
      pictures: [],
      tags: [Tag.JAVA],
    }

  ];

  // Wird genutzt um daten zu fetchen von API Endpunkten und diese an Komponenten zu supplyen
  constructor() { }


  GetProject(){
    return this.projects;
  }

  // Project nach der entsprechenden ID wird zurückgegeben 
  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id == id);

    if(project === undefined) {
      throw new TypeError("There is no project that matches the id: '" +id);
    }

    return project;
  }

// gefiltertes projektobjekt wird zurückgegeben
  GetProjectByFilter(filterTags: Tag[]) {
    // Ein leeres Array filteredProjects wird erstellt, um die Projekte zu speichern, die den Filterkriterien entsprechen
    let filteredProjects: Project[] =[];

    this.projects.forEach(function(project) {
      let foundAll = true;
// Gehe jedes Element durch ob die Tag enthalten sind. Dabei werden die Projekte 
      filterTags.forEach(function (filterTag) {
        if(project.tags.includes(filterTag) == false) {
          foundAll =false;
        }
      });
// Alle Projekte die den boolean true haben, werden gefiltert in die Liste hinzugefügt
      if(foundAll) {
        filteredProjects.push(project);
      }

    });
    // Die gefilterte Projekt Liste wird zurückgegeben
    return filteredProjects;
  }
}
