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
      title: 'Engenheiro(a) civil de campo',
      department: 'Obra',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Fiscalização de frentes de pavimentação e redes, medição, interface com contratante e cumprimento de ART quando aplicável.'
    },
    {
      id: 2,
      title: 'Mestre de obras',
      department: 'Obra',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Liderança da equipe de serventes e operadores, leitura de projeto, controle de cronograma diário e qualidade do serviço.'
    },
    {
      id: 3,
      title: 'Operador de retroescavadeira',
      department: 'Máquinas',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Abertura de valas, carregamento de caminhão basculante e movimentação de solo em obras de saneamento e terraplenagem.'
    },
    {
      id: 4,
      title: 'Técnico(a) em edificações / orçamentos',
      department: 'Engenharia',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Levantamento em campo, quantitativos, apoio a propostas comerciais e planilhas de serviço.'
    },
    {
      id: 5,
      title: 'Encarregado de logística de canteiro',
      department: 'Suprimentos',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Recebimento de materiais, organização de estoque temporário e apoio ao içamento de containers e chapas de tapume.'
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
      { title: 'EPI completo', description: 'Fornecimento conforme função e NR aplicável à obra.' },
      { title: 'Treinamentos', description: 'Integração e reciclagem em segurança do trabalho e procedimentos de campo.' },
      { title: 'Vale refeição / alimentação', description: 'Conforme política interna e sindicato da categoria, quando aplicável.' },
      { title: 'Transporte', description: 'Apoio logístico em obras em regiões atendidas pela empresa, quando contratado.' },
      { title: 'PISO da construção', description: 'Respeito às convenções da categoria em salário base.' },
      { title: 'Seguro e ambiente seguro', description: 'Seguro de vida coletivo em apólice vigente e cultura de reportar riscos no canteiro.' }
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
