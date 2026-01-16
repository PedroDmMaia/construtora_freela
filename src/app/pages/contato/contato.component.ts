import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EMPREENDIMENTOS } from '../../shared/data/empreendimentos.data';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  empreendimentos = EMPREENDIMENTOS;
  
  formData = {
    name: '',
    email: '',
    phone: '',
    empreendimento: '',
    subject: '',
    message: ''
  };

  subjects = [
    'Informações sobre empreendimento',
    'Agendamento de visita',
    'Proposta comercial',
    'Pós-venda',
    'Outros assuntos'
  ];

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form data:', this.formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      empreendimento: '',
      subject: '',
      message: ''
    };
  }
}
