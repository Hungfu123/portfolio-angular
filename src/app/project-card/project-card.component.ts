import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  //Hier wird die @Input()-Dekoration verwendet, um ein Property namens project zu definieren, 
  //das Daten vom Elternkomponent (portfolio.component.ts) empfängt. Der Typ ist Project, der durch die Projektmodelle definiert wird.
  @Input() project = {} as Project

  // auf card klicken -> modal
  // ? steht für optional
  bsModalRef?: BsModalRef;

// können open und closen modals
  constructor(private modalService: BsModalService) {

  }

  // Wenn auf details geklickt wird, dann wird ProjectModalComponent aufgerufen und dort können wir unser html style einfügen
  OpenProjectModal() {
    // gibt es properties für den inputdata. Wir können jede css klasse senden
    const modalOption: ModalOptions = {
      class: "modal-lg",
      // propertie kann man initialisieren. Hier wird Projekt Input in das modal reingeparsed
      initialState: {
        project: this.project

      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOption);
  }
}
