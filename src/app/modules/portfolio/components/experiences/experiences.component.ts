import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Full Stack Voluntário',
        p: 'Instituto de Pesquisa da Diversidade Intercultural | Julho de 2023 - Outubro de 2023'
      },
      text: `
        <p>Continuação do TCC intitulado "Kalivôno: promovendo o acesso à língua Terena por meio de um app progressivo" do Curso Técnico Integrado em Informática. Em 2020, foi apresentada uma aplicação React para atacar a demanda. Entretanto, não há acesso à internet nas aldeias indígenas. Portanto, o dicionário eletrônico foi recriado em React Native e conta com a feature de baixar os termos Terena-Português e suas respectivas pronúncias para estudá-los em modo off-line.</p>
        <p>
          Clique <a href="https://kalivono.vercel.app/projeto" target="_blank">aqui</a> para saber mais
        </p>
      `
    },
    {
      summary: {
        strong: 'Desenvolvedor Full Stack Freelancer',
        p: 'Corpo de Bombeiros | Maio de 2021 - Março de 2022'
      },
      text: `
        <p>Desenvolvimento de uma aplicação de inspeção e registro das viaturas de combate ao incêndio do Corpo de Bombeiros do município de Aquidauana - MS. É digno de nota que a organização dos relatórios das viaturas de incêndio proporcionada pela aplicação resultou em um reajuste positivo para a corporação.</p>
        <p>
          Clique <a href="https://github.com/mdccg/controle-de-viaturas" target="_blank">aqui</a> para saber mais
        </p>
      `
    },
    {
      summary: {
        strong: 'Desenvolvedor Front-end Freelancer',
        p: 'Da Roça | Agosto de 2020 - Maio de 2021'
      },
      text: `<p>Desenvolvimento de um aplicativo de compras para uma fazenda urbana agroecológica do município de Aquidauana - MS.</p>`
    },
    {
      summary: {
        strong: 'Estagiário de TI',
        p: 'IFMS, Aquidauana | Setembro de 2019 - Dezembro de 2019'
      },
      text: `<p>Formatação de computadores, instalação de sistemas operacionais e desenvolvimento de aplicações.</p>`
    }
  ]);
}
