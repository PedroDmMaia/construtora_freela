import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'empreendimentos',
    loadComponent: () => import('./pages/empreendimentos/empreendimentos.component').then(m => m.EmpreendimentosComponent)
  },
  {
    path: 'empreendimentos/:slug',
    loadComponent: () => import('./pages/empreendimento-detalhe/empreendimento-detalhe.component').then(m => m.EmpreendimentoDetalheComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent)
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog-post/blog-post.component').then(m => m.BlogPostComponent)
  },
  {
    path: 'trabalhe-conosco',
    loadComponent: () => import('./pages/trabalhe-conosco/trabalhe-conosco.component').then(m => m.TrabalheConoscoComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
