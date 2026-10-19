
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

import imagemProvisoria from "../assets/images/aurora.png";

export const gruposCursos = [
  {
    id: "basico",
    nivel: "Básico",
    titulo: "Primeiros traços",
    resumo:
      "Para descobrir técnicas, materiais e ganhar confiança.",
    cor: "bg-ini",

    cursos: [
      {
        nome: "Kids",
        descricao:
          "O primeiro contato com o desenho, explorando cores, formas e imaginação.",
        imagem: imagemProvisoria,
        alt: "",
      },
      {
        nome: "Cartoon Tradicional",
        descricao:
          "Aprenda a criar personagens, expressões e desenhos no estilo cartoon.",
        imagem: imagemProvisoria,
        alt: "",
      },
      {
        nome: "Chibi",
        descricao:
          "Crie personagens pequenos, expressivos e cheios de personalidade.",
        imagem: imagemProvisoria,
        alt: "",
      },
      {
        nome: "Doodle",
        descricao:
          "Transforme ideias espontâneas em desenhos criativos e divertidos.",
        imagem: imagemProvisoria,
        alt: "",
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

    cursos: [
      {
        nome: "Mangá",
        descricao:
          "Explore personagens, expressões e técnicas inspiradas nos quadrinhos japoneses.",
        imagem: imagemProvisoria,
        alt: "",
      },
      {
        nome: "Cartoon Jovem",
        descricao:
          "Desenvolva personagens estilizados e novas formas de expressão visual.",
        imagem: imagemProvisoria,
        alt: "",
      },
      {
        nome: "Aquarela",
        descricao:
          "Descubra transparências, misturas de cores e técnicas de pintura com água.",
        imagem: imagemProvisoria,
        alt: "",
      },
      {
        nome: "Arte Urbana",
        descricao:
          "Experimente letras, formas e composições inspiradas na arte de rua.",
        imagem: imagemProvisoria,
        alt: "",
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

    cursos: [
      {
        nome: "Arte Digital",
        descricao:
          "Crie ilustrações utilizando ferramentas e técnicas digitais.",
        imagem: imagemProvisoria,
        alt: "",
      },
      {
        nome: "Caricatura",
        descricao:
          "Explore o exagero de formas e expressões em retratos criativos.",
        imagem: imagemProvisoria,
        alt: "",
      },
      {
        nome: "Realismo",
        descricao:
          "Aprofunde luz, sombra, proporções e observação de detalhes.",
        imagem: imagemProvisoria,
        alt: "",
      },
      {
        nome: "Design de Personagem",
        descricao:
          "Desenvolva personagens originais com identidade e personalidade.",
        imagem: imagemProvisoria,
        alt: "",
      },
    ],
  },
] as const;
