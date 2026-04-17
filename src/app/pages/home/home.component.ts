import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EMPREENDIMENTOS, Empreendimento, getFeaturedEmpreendimentos } from '../../shared/data/empreendimentos.data';

interface Diferencial {
  icon: SafeHtml;
  title: string;
  description: string;
}

interface Depoimento {
  name: string;
  text: string;
  contexto: string;
  avatar: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private sanitizer = inject(DomSanitizer);
  
  empreendimentos: Empreendimento[] = getFeaturedEmpreendimentos();
  diferenciais: Diferencial[] = [];
  
  depoimentos: Depoimento[] = [
    {
      name: 'Fernanda Oliveira',
      text: 'A pavimentação da rua do nosso bairro ficou impecável. A equipe sinalizou bem a obra, respondeu rápido às dúvidas da comunidade e entregou no prazo combinado com a prefeitura.',
      contexto: 'Asfalto — loteamento',
      avatar: '/18.jpeg'
    },
    {
      name: 'Ricardo Mendes',
      text: 'Contratamos a abertura de vala e a implantação da rede de esgoto com recomposição do asfalto. Tudo executado com máquina e equipe próprias; relatório e fotos em cada etapa.',
      contexto: 'Rede de esgoto',
      avatar: '/18.jpeg'
    },
    {
      name: 'Ana Paula Santos',
      text: 'Precisávamos fechar o canteiro com tapume e posicionar os containers. O munck desembarcou certinho, sem ruído com a vizinhança. Profissionais de verdade.',
      contexto: 'Fechamento de canteiro',
      avatar: '/18.jpeg'
    }
  ];

  constructor() {
    this.initDiferenciais();
  }

  private initDiferenciais() {
    const icons = [
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>`
    ];

    const data = [
      { title: 'Qualidade de execução', description: 'Controle de materiais, dosagem em pavimentação e acabamento de valas e pavimento conforme especificação técnica.' },
      { title: 'Máquinas e frota', description: 'Retroescavadeira, caminhão basculante, munck e equipamentos de compactação para agilizar o serviço com segurança.' },
      { title: 'Prazo e cronograma', description: 'Planejamento de frentes de trabalho e cumprimento do que foi acordado com o contratante e fiscalização.' },
      { title: 'Segurança e NR', description: 'EPI para todos, isolamento de áreas e CIPA quando aplicável — obra organizada é obra segura.' },
      { title: 'Meio ambiente', description: 'Contenção de sedimentos perto de cursos d\'água e retirada responsável de resíduos de escavação.' },
      { title: 'Transparência', description: 'Alinhamento frequente com a contratante, medição e relatórios do avanço físico da obra.' }
    ];

    this.diferenciais = data.map((item, index) => ({
      icon: this.sanitizer.bypassSecurityTrustHtml(icons[index]),
      title: item.title,
      description: item.description
    }));
  }

  onSubmit(event: Event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  }
}
