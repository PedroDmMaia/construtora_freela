import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EMPREENDIMENTOS, Empreendimento } from '../../shared/data/empreendimentos.data';

@Component({
  selector: 'app-empreendimentos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './empreendimentos.component.html',
  styleUrl: './empreendimentos.component.scss'
})
export class EmpreendimentosComponent {
  empreendimentos: Empreendimento[] = EMPREENDIMENTOS;
  filteredEmpreendimentos: Empreendimento[] = EMPREENDIMENTOS;
  
  filters = {
    status: '',
    neighborhood: ''
  };

  neighborhoods = [...new Set(EMPREENDIMENTOS.map(e => e.neighborhood))];
  statuses = [...new Set(EMPREENDIMENTOS.map(e => e.status))];

  applyFilters() {
    this.filteredEmpreendimentos = this.empreendimentos.filter(emp => {
      const matchStatus = !this.filters.status || emp.status === this.filters.status;
      const matchNeighborhood = !this.filters.neighborhood || emp.neighborhood === this.filters.neighborhood;
      return matchStatus && matchNeighborhood;
    });
  }

  clearFilters() {
    this.filters = { status: '', neighborhood: '' };
    this.filteredEmpreendimentos = this.empreendimentos;
  }
}
