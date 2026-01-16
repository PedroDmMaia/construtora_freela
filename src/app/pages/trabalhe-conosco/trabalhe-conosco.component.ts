import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Vaga {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface Beneficio {
  icon: SafeHtml;
  title: string;
  description: string;
}

@Component({
  selector: 'app-trabalhe-conosco',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trabalhe-conosco.component.html',
  styleUrl: './trabalhe-conosco.component.scss'
})
export class TrabalheConoscoComponent {
  private sanitizer = inject(DomSanitizer);

  vagas: Vaga[] = [
    {
      id: 1,
      title: 'Engenheiro Civil Sênior',
      department: 'Engenharia',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Responsável pela gestão técnica de obras de alto padrão, liderança de equipes e garantia da qualidade dos projetos.'
    },
    {
      id: 2,
      title: 'Arquiteto de Projetos',
      department: 'Arquitetura',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Desenvolvimento de projetos arquitetônicos inovadores, acompanhamento de obras e interface com clientes.'
    },
    {
      id: 3,
      title: 'Consultor de Vendas',
      department: 'Comercial',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Atendimento consultivo a clientes de alto padrão, apresentação de empreendimentos e fechamento de negócios.'
    },
    {
      id: 4,
      title: 'Analista de Marketing Digital',
      department: 'Marketing',
      location: 'São Paulo, SP (Híbrido)',
      type: 'CLT',
      description: 'Gestão de campanhas digitais, produção de conteúdo e análise de performance para empreendimentos imobiliários.'
    },
    {
      id: 5,
      title: 'Coordenador de Obras',
      department: 'Engenharia',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Coordenação de múltiplos canteiros de obras, gestão de cronogramas e relacionamento com fornecedores.'
    }
  ];

  beneficios: Beneficio[] = [];

  selectedVaga: Vaga | null = null;
  showModal = false;

  constructor() {
    this.initBeneficios();
  }

  private initBeneficios() {
    const icons = [
      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,
      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    ];

    const data = [
      { title: 'Plano de Saúde', description: 'Cobertura completa para você e sua família' },
      { title: 'Desenvolvimento', description: 'Programas de capacitação e crescimento profissional' },
      { title: 'Ambiente Inspirador', description: 'Escritório moderno e equipe colaborativa' },
      { title: 'Home Office', description: 'Flexibilidade para trabalho remoto quando possível' },
      { title: 'Férias Flexíveis', description: 'Política de férias que respeita seu bem-estar' },
      { title: 'Seguro de Vida', description: 'Proteção e tranquilidade para você e sua família' }
    ];

    this.beneficios = data.map((item, index) => ({
      icon: this.sanitizer.bypassSecurityTrustHtml(icons[index]),
      title: item.title,
      description: item.description
    }));
  }

  openModal(vaga: Vaga) {
    this.selectedVaga = vaga;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    this.selectedVaga = null;
    document.body.style.overflow = '';
  }

  onSubmit(event: Event) {
    event.preventDefault();
    alert('Candidatura enviada com sucesso! Entraremos em contato em breve.');
    this.closeModal();
  }
}
