import { Component, VERSION } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  filterTerm!: string;

  userRecords = [
    {
      id: 1,
      name: 'Iphone 14 Pro Max',
      description: 'O mais novo queridinho da Apple!',
      type: 'Celulares e Smartphones',
      price: 8599,
      quantity: 21
    },
    {
      id: 2,
      name: 'Xaiomi MI20',
      description: 'Bateria de 8000mha, ótima para os fãs de jogos.',
      type: 'Celulares e Smartphones',
      price: 2599,
      quantity: 10
    },
    {
      id: 3,
      name: 'Samsung Note 20',
      description: 'durabilidade e confiabilidade.',
      type: 'Celulares e Smartphones',
      price: 5499,
      quantity: 45
    },
    {
      id: 4,
      name: 'Case anti-shock',
      description: 'Capa protetora para seu smart',
      type: 'Celulares e Smartphones',
      price: 199,
      quantity: 87
    },
    {
      id: 5,
      name: 'Apple watch',
      description: 'Veja suas notificações no relógio',
      type: 'Celulares e Smartphones',
      price: 3599,
      quantity: 123
    },
    {
      id: 6,
      name: 'Galaxy Watch',
      description: 'Veja suas notificações no relógio',
      type: 'Celulares e Smartphones',
      price: 199,
      quantity: 87
    },
    {
      id: 7,
      name: 'Moto G20',
      description: 'A nova geração do motorola.',
      type: 'Celulares e Smartphones',
      price: 1899,
      quantity: 46
    },
    {
      id: 8,
      name: 'Película Protetora',
      description: 'Proteja seu celular de quedas e arranhões.',
      type: 'Celulares e Smartphones',
      price: 80,
      quantity: 150
    },
    {
      id: 9,
    name: 'Blusa do Flamengo',
    description: 'Blusa do campeonato carioca 2022',
    type: 'Roupas',
    price: 199,
    quantity: 4
    },
    {
      id: 10,
    name: 'Geladeira Consul',
    description: 'A mais moderna da linha Consul',
    type: 'Cozinha',
    price: 27899,
    quantity: 5
    },
    {
      id: 11,
    name: 'Samsung S21',
    description: 'Nova geração Samsung',
    type: 'Celulares e Smartphones',
    price: 2599,
    quantity: 5
    },
    {
      id: 12,
    name: 'Fritadeira Elétrica sem Óleo/Air Fryer',
    description: 'faça batatas sem óleo',
    type: 'Eletrodomésticos',
    price: 2899,
    quantity: 276
    },
    {
      id: 13,
    name: 'Secador de Cabelo Taiff Style',
    description: '3 velocidades de secagem.',
    type: 'Eletrodomésticos',
    price: 209,
    quantity: 87
    },
    {
      id: 14,
    name: 'Lavadora de Roupas Consul',
    description: 'Moderna e simples',
    type: 'Eletrodomésticos',
    price: 151999,
    quantity: 100
    },
    {
      id: 15,
    name: 'IPhone 7',
    description: 'Ótima oportunidade',
    type: 'Celulares e Smartphones',
    price: 34999,
    quantity: 20
    },
    {
      id: 16,
    name: 'Impressora Multifuncional HP ',
    description: 'Ótima para seu home office',
    type: 'Informática',
    price: 37199,
    quantity: 48
    },
    {
      id: 17,
    name: 'Cadeira de Escritório Diretor Giratória',
    description: 'Ótima para seu home office',
    type: 'Informática',
    price: 25999,
    quantity: 154
    },
    {
      id: 18,
    name: 'Escrivaninha 2 Gavetas',
    description: 'Design minimalista',
    type: 'Móveis',
    price: 21999,
    quantity: 69
    }
  ];
}
