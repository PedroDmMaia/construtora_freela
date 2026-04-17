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
    { year: '1999', title: 'Fundação', description: 'Início da operação em obras de terraplenagem, redes e pequenos trechos de pavimentação.' },
    { year: '2005', title: 'Expansão', description: 'Ampliamos a frota de máquinas e passamos a atender contratos maiores em pavimentação e redes.' },
    { year: '2012', title: 'Reconhecimento', description: 'Certificações de qualidade e ampliação de carteira com prefeituras e concessionárias.' },
    { year: '2018', title: 'Sustentabilidade', description: 'Controles mais rigorosos em obras próximas a cursos d\'água e destinação correta de resíduos de escavação.' },
    { year: '2024', title: 'Infraestrutura', description: 'Reforçamos atuação em obras de saneamento, vias e fechamento de canteiros com padrão corporativo.' }
  ];

  team: TeamMember[] = [
    { name: 'Carlos Eduardo Silva', role: 'CEO & Fundador', image: '/18.jpeg' },
    { name: 'Ana Maria Santos', role: 'Diretora de Projetos', image: '/18.jpeg' },
    { name: 'Roberto Oliveira', role: 'Diretor de Engenharia', image: '/18.jpeg' },
    { name: 'Mariana Costa', role: 'Diretora Comercial', image: '/18.jpeg' }
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
      { title: 'Excelência', description: 'Do traço na vala ao acabamento no asfalto, padrão técnico em toda obra.' },
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
