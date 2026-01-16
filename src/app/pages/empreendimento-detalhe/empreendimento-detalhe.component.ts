import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { getEmpreendimentoBySlug, Empreendimento, EMPREENDIMENTOS } from '../../shared/data/empreendimentos.data';

@Component({
  selector: 'app-empreendimento-detalhe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './empreendimento-detalhe.component.html',
  styleUrl: './empreendimento-detalhe.component.scss'
})
export class EmpreendimentoDetalheComponent implements OnInit {
  private route = inject(ActivatedRoute);
  
  empreendimento: Empreendimento | undefined;
  outrosEmpreendimentos: Empreendimento[] = [];
  currentImageIndex = 0;
  showGalleryModal = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.empreendimento = getEmpreendimentoBySlug(slug);
      
      if (this.empreendimento) {
        this.outrosEmpreendimentos = EMPREENDIMENTOS
          .filter(e => e.id !== this.empreendimento!.id)
          .slice(0, 3);
      }
    });
  }

  openGallery(index: number) {
    this.currentImageIndex = index;
    this.showGalleryModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeGallery() {
    this.showGalleryModal = false;
    document.body.style.overflow = '';
  }

  nextImage() {
    if (this.empreendimento) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.empreendimento.gallery.length;
    }
  }

  prevImage() {
    if (this.empreendimento) {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.empreendimento.gallery.length - 1 
        : this.currentImageIndex - 1;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    alert('Solicitação enviada! Entraremos em contato em breve.');
  }
}
