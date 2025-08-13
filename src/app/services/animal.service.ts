import { Injectable } from '@angular/core';
import { Animal } from '../shared/interfaces/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animais: Animal[] = [
    {
      nome: "Gato-de-Pallas", 
      nomeCientifico: "Otocolobus manul", 
      nomeImagem: "gato-selvagem", 
      descricao: `Felino asiático de pequeno porte, com pelagem espessa e rosto achatado. 
      Vive em regiões frias e rochosas da Ásia Central, sendo conhecido por sua expressão única e hábitos discretos. 
      Alimenta-se de pequenos mamíferos e aves.`,
      favorito: false
    },
    {
      nome: "Girafa",
      nomeCientifico: "Giraffa camelopardalis",
      nomeImagem: "girafa",
      descricao: `Mamífero terrestre mais alto do mundo, com pescoço longo e manchas únicas. 
      Habita savanas africanas e se alimenta de folhas de árvores altas, como acácias. Vive em grupos e possui visão aguçada.`,
      favorito: false
    },
    {
      nome: "Macaco-japonês",
      nomeCientifico: "Macaca fuscata",
      nomeImagem: "macaco-japonês",
      descricao: `Também conhecido como macaco-das-neves, vive em regiões montanhosas do Japão. 
      É famoso por se banhar em águas termais durante o inverno. 
      Possui pelagem espessa e comportamento social complexo.`,
      favorito: true
    },
    {
      nome: "Morcego",
      nomeCientifico: "Chiroptera spp.",
      nomeImagem: "morcego",
      descricao: `Único mamífero capaz de voo ativo. Existem centenas de espécies, com hábitos variados. 
      Alguns se alimentam de frutas, outros de insetos ou sangue. 
      São fundamentais para polinização e controle de pragas.`,
      favorito: true
    },
    {
      nome: "Panda",
      nomeCientifico: "Ailuropoda melanoleuca",
      nomeImagem: "panda",
      descricao: `Ícone da conservação, o panda gigante vive em florestas de bambu na China. 
      Alimenta-se quase exclusivamente de bambu e possui comportamento solitário. 
      Está ameaçado pela perda de habitat.`,
      favorito: true
    },
    {
      nome: "Panda-vermelhos",
      nomeCientifico: "Ailurus fulgens",
      nomeImagem: "panda-vermelho",
      descricao: `Pequeno mamífero arborícola de pelagem avermelhada, nativo do Himalaia e sul da China. 
      Alimenta-se de bambu, frutas e pequenos animais. É tímido e ativo principalmente ao entardecer.`,
      favorito: true
    },
    {
      nome: "Pinguim",
      nomeCientifico: "Spheniscidae spp.",
      nomeImagem: "pinguim",
      descricao: `Ave marinha que não voa, adaptada ao frio e excelente nadadora. 
      Vive em colônias e se comunica por vocalizações. Alimenta-se de peixes e krill. Algumas espécies enfrentam riscos climáticos.`,
      favorito: false
    },
    {
      nome: "Porco-selvagem",
      nomeCientifico: "Sus scrofa",
      nomeImagem: "porco-selvagem",
      descricao: `Mamífero onívoro robusto, com presas e comportamento territorial. Habita florestas e campos abertos. É resistente e adaptável, mas pode causar impactos ecológicos quando introduzido fora de seu habitat.`,
      favorito: false
    },
    {
      nome: "Tigre de bengala",
      nomeCientifico: "Panthera tigris",
      nomeImagem: "tigre",
      descricao: `Maior felino do mundo, com pelagem listrada e comportamento solitário. 
      Habita florestas e áreas úmidas da Ásia. É um predador de topo e está ameaçado pela caça e destruição de habitat.`,
      favorito: false
    },
    {
      nome: "Urso-da-Tailândia",
      nomeCientifico: "Helarctos malayanus",
      nomeImagem: "urso-da-tailandia",
      descricao: `Também chamado de urso-malaio, é o menor dos ursos. Vive em florestas tropicais do sudeste asiático.
      Possui pelagem escura com uma marca clara no peito. Alimenta-se de frutas, insetos e pequenos animais.`,
      favorito: false
    },
    {
      nome: "Urso-polar",
      nomeCientifico: "Ursus maritimus",
      nomeImagem: "urso-polar",
      descricao: `Grande mamífero carnívoro adaptado ao Ártico. Caça focas e depende do gelo marinho para sobreviver. 
      Está ameaçado pelas mudanças climáticas que afetam seu habitat gelado.`,
      favorito: false
    },
    {
      nome: "Veado",
      nomeCientifico: "Cervidae spp.",
      nomeImagem: "veado",
      descricao: `Herbívoro ágil com galhadas ramificadas nos machos. Vive em florestas, campos e montanhas. Alimenta-se de folhas, frutos e brotos. 
      É importante para o equilíbrio ecológico e possui comportamento cauteloso.`,
      favorito: false
    },
  ];

  constructor() { }
}
