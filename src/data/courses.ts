/**
 * CATÁLOGO DE CURSOS — ILUSTRAR
 *
 * Para adicionar ou editar um curso:
 * - nome: nome exibido no card;
 * - descricao: texto curto do curso;
 * - imagem: ilustração utilizada;
 * - alt: descrição da imagem, se informativa.
 *
 * As descrições abaixo são propostas editoriais
 * e devem ser aprovadas pelo cliente.
 */

import fundoAvancado from "../assets/images/courses/backgrounds/card-bg-avancado.webp";
import fundoBasico from "../assets/images/courses/backgrounds/card-bg-basico.webp";
import fundoIntermediario from "../assets/images/courses/backgrounds/card-bg-intermediario.webp";

/* ==========================================
   IMAGENS OFICIAIS DOS CURSOS
   ========================================== */

// Nível Básico
import imgCartum from "../assets/images/courses/items/cartum.webp";
import imgChibi from "../assets/images/courses/items/chibi.webp";
import imgDoodle from "../assets/images/courses/items/doodle.webp";
import imgKids from "../assets/images/courses/items/kids.webp";

// Nível Intermediário
import imgAquarela from "../assets/images/courses/items/aquarela.webp";
import imgArteUrbana from "../assets/images/courses/items/arte-urbana.webp";
import imgCartumJovem from "../assets/images/courses/items/cartum-jovem.webp";
import imgManga from "../assets/images/courses/items/manga.webp";

// Nível Avançado
import imgArteDigital from "../assets/images/courses/items/arte-digital.webp";
import imgCaricatura from "../assets/images/courses/items/caricatura.webp";
import imgDesignPersonagem from "../assets/images/courses/items/design-personagem.webp";
import imgRealismo from "../assets/images/courses/items/realismo.webp";


export const gruposCursos = [
  {
    id: "basico",
    nivel: "Básico",
    titulo: "Primeiros traços",
    resumo:
      "Para descobrir técnicas, materiais e ganhar confiança.",
    cor: "bg-ini",
    fundo: fundoBasico,

    cursos: [
      {
        nome: "Kids",
        descricao:
          "O primeiro contato com o desenho, explorando cores, formas e imaginação.",
        imagem: imgKids,
        alt: "Pequeno aventureiro de roupa roxa montado em um dinossauro azul sorridente.",
      },
      {
        nome: "Cartum",
        descricao:
          "Aprenda a criar personagens, expressões e desenhos no estilo cartoon.",
        imagem: imgCartum,
        alt: "Raposa alaranjada de terno azul correndo com uma maleta e folhas de papel.",
      },
      {
        nome: "Chibi",
        descricao:
          "Crie personagens pequenos, expressivos e cheios de personalidade.",
        imagem: imgChibi,
        alt: "Personagem chibi loira de óculos grandes andando de bicicleta rosa com um coelho na cesta.",
      },
      {
        nome: "Doodle",
        descricao:
          "Transforme ideias espontâneas em desenhos criativos e divertidos.",
        imagem: imgDoodle,
        alt: "Conjunto de desenhos divertidos em preto e branco, incluindo robôs, fantasmas e estrelas.",
      },
    ],
  },

  {
    id: "intermediario",
    nivel: "Intermediário",
    titulo: "Novas linguagens",
    resumo:
      "Para ampliar repertório e desenvolver um estilo próprio.",
    cor: "bg-ite",
    fundo: fundoIntermediario,

    cursos: [
      {
        nome: "Mangá",
        descricao:
          "Explore personagens, expressões e técnicas inspiradas nos quadrinhos japoneses.",
        imagem: imgManga,
        alt: "Personagem de mangá com cabelos pretos e óculos desenhando com uma caneta.",
      },
      {
        nome: "Cartum Jovem",
        descricao:
          "Desenvolva personagens estilizados e novas formas de expressão visual.",
        imagem: imgCartumJovem,
        alt: "Jovem de boné roxo e moletom azul andando de skate.",
      },
      {
        nome: "Aquarela",
        descricao:
          "Descubra transparências, misturas de cores e técnicas de pintura com água.",
        imagem: imgAquarela,
        alt: "Ilustração de uma raposa em aquarela entre flores e folhas.",
      },
      {
        nome: "Arte Urbana",
        descricao:
          "Experimente letras, formas e composições inspiradas na arte de rua.",
        imagem: imgArteUrbana,
        alt: "Rosto ilustrado com tranças, grafites coloridos e uma coroa amarela.",
      },
    ],
  },

  {
    id: "avancado",
    nivel: "Avançado",
    titulo: "Projetos autorais",
    resumo:
      "Para transformar técnica em projetos mais completos.",
    cor: "bg-ava",
    fundo: fundoAvancado,

    cursos: [
      {
        nome: "Arte Digital",
        descricao:
          "Crie ilustrações utilizando ferramentas e técnicas digitais.",
        imagem: imgArteDigital,
        alt: "Retrato digital colorido de pessoa ruiva com sardas, olhos verdes e jaqueta azul.",
      },
      {
        nome: "Caricatura",
        descricao:
          "Explore o exagero de formas e expressões em retratos criativos.",
        imagem: imgCaricatura,
        alt: "Caricatura de jogador de futebol piscando e sorrindo, com traços faciais exagerados.",
      },
      {
        nome: "Realismo",
        descricao:
          "Aprofunde luz, sombra, proporções e observação de detalhes.",
        imagem: imgRealismo,
        alt: "Retrato realista em preto e branco de homem de perfil usando boina e terno.",
      },
      {
        nome: "Design de Personagem",
        descricao:
          "Desenvolva personagens originais com identidade e personalidade.",
        imagem: imgDesignPersonagem,
        alt: "Estudo de personagem com figura de corpo inteiro e três expressões faciais diferentes.",
      },
    ],
  },
] as const;
