import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Value {
  icon: SafeHtml;
  title: string;
  description: string;
}

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  private sanitizer = inject(DomSanitizer);

  timeline: TimelineItem[] = [
    { year: '1999', title: 'Fundação', description: 'A Construtora Premium nasce com a missão de transformar o mercado imobiliário de alto padrão.' },
    { year: '2005', title: 'Expansão', description: 'Alcançamos a marca de 20 empreendimentos entregues e expandimos nossa atuação.' },
    { year: '2012', title: 'Reconhecimento', description: 'Recebemos o prêmio de melhor construtora da região pelo 5º ano consecutivo.' },
    { year: '2018', title: 'Inovação', description: 'Implementamos práticas sustentáveis em todos os nossos projetos.' },
    { year: '2024', title: 'Liderança', description: 'Consolidamos nossa posição como líder em empreendimentos de luxo.' }
  ];

  team: TeamMember[] = [
    { name: 'Carlos Eduardo Silva', role: 'CEO & Fundador', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
    { name: 'Ana Maria Santos', role: 'Diretora de Projetos', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    { name: 'Roberto Oliveira', role: 'Diretor de Engenharia', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
    { name: 'Mariana Costa', role: 'Diretora Comercial', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' }
  ];

  values: Value[] = [];

  constructor() {
    this.initValues();
  }

  private initValues() {
    const icons = [
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
      `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
    ];

    const data = [
      { title: 'Integridade', description: 'Agimos com ética e transparência em todas as nossas relações.' },
      { title: 'Excelência', description: 'Buscamos a perfeição em cada detalhe dos nossos projetos.' },
      { title: 'Pessoas', description: 'Valorizamos nossos colaboradores, clientes e parceiros.' },
      { title: 'Compromisso', description: 'Cumprimos prazos e entregamos o que prometemos.' }
    ];

    this.values = data.map((item, index) => ({
      icon: this.sanitizer.bypassSecurityTrustHtml(icons[index]),
      title: item.title,
      description: item.description
    }));
  }
}
