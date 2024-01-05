import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enums/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/projects/aquidapet.png',
      alt: 'Logotipo do projeto de localização de pets desaparecidos "AquidaPet"',
      title: 'Projeto de localização de pets desaparecidos "AquidaPet"',
      width: '202px',
      height: '130px',
      description: '<p>Projeto de localização de pets desaparecidos "AquidaPet"</p>',
      links: [
        { name: 'Conheça o projeto', href: 'https://github.com/mdccg/aquidapet-showcase' }
      ]
    },
    {
      src: 'assets/projects/ai-que-fome.png',
      alt: 'Logotipo do projeto de avaliação de refeições escolares "Ai, que fome!"',
      title: 'Projeto de avaliação de refeições escolares "Ai, que fome!"',
      width: '130px',
      height: '130px',
      description: '<p>Projeto de avaliação de refeições escolares "Ai, que fome!"</p>',
      links: [
        { name: 'Conheça o projeto', href: 'https://github.com/mdccg/ai-que-fome-showcase' }
      ]
    },
    {
      src: 'assets/projects/ctrl-vtr.png',
      alt: 'Logotipo do PWA de gestão de relatórios do Corpo de Bombeiros de Aquidauana',
      title: 'PWA de gestão de relatórios do Corpo de Bombeiros de Aquidauana',
      width: '130px',
      height: '130px',
      description: '<p>PWA de gestão de relatórios do Corpo de Bombeiros de Aquidauana</p>',
      links: [
        { name: 'Conheça o projeto', href: 'https://github.com/mdccg/controle-de-viaturas' }
      ]
    },
    {
      src: 'assets/projects/da-roca.png',
      alt: 'Logotipo do aplicativo de delivery para a fazenda urbana agroecológica local "Da Roça"',
      title: 'Aplicativo de delivery para a fazenda urbana agroecológica local "Da Roça"',
      width: '130px',
      height: '130px',
      description: '<p>Aplicativo de delivery para a fazenda urbana agroecológica local "Da Roça"</p>',
      links: [
        { name: 'Conheça o projeto', href: 'https://bitbucket.org/mdccg/da-roca' }
      ]
    },
    {
      src: 'assets/projects/kalivono.png',
      alt: 'Logotipo do dicionário bilíngue Terena-Português Kalivôno',
      title: 'Dicionário bilíngue Terena-Português Kalivôno',
      width: '130px',
      height: '130px',
      description: '<p>Dicionário bilíngue Terena-Português Kalivôno</p>',
      links: [
        { name: 'Aprenda Terena', href: 'https://kalivono.vercel.app' }
      ]
    }
  ]);

  public openDialog(data: IProjects): void {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
