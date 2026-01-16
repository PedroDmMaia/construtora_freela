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
  empreendimento: string;
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
      text: 'A Construtora Premium superou todas as nossas expectativas. O apartamento foi entregue impecável, com acabamentos de primeira qualidade. A equipe foi atenciosa durante todo o processo.',
      empreendimento: 'Reserva Jardins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Ricardo Mendes',
      text: 'Investir em um empreendimento da Construtora Premium foi a melhor decisão. Além da valorização do imóvel, a qualidade de vida que ganhamos não tem preço.',
      empreendimento: 'Vista Paulista',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      name: 'Ana Paula Santos',
      text: 'Do primeiro contato até a entrega das chaves, tudo foi perfeito. A transparência e o profissionalismo da equipe fizeram toda a diferença. Recomendo de olhos fechados!',
      empreendimento: 'Parque das Artes',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
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
      { title: 'Garantia de Qualidade', description: 'Compromisso com os mais altos padrões de construção, materiais premium e acabamentos impecáveis.' },
      { title: 'Localizações Premium', description: 'Empreendimentos estrategicamente posicionados nas melhores regiões da cidade.' },
      { title: 'Pontualidade na Entrega', description: 'Histórico impecável de entregas no prazo, respeitando o cronograma acordado.' },
      { title: 'Atendimento Personalizado', description: 'Equipe dedicada para acompanhar cada cliente desde a escolha até a entrega.' },
      { title: 'Design Exclusivo', description: 'Projetos assinados por renomados arquitetos, combinando estética e funcionalidade.' },
      { title: 'Sustentabilidade', description: 'Práticas sustentáveis em todas as etapas, pensando no futuro do planeta.' }
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
