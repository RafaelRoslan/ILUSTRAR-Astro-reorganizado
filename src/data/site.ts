
/**
 * Configurações públicas da ILUSTRAR.
 *
 * Edite este arquivo para atualizar contatos,
 * endereço, redes sociais e navegação.
 */

export const site = {
  nome: "ILUSTRAR",

  whatsapp: {
    numero: "5515997079370",
    mensagem: "Olá! Gostaria de agendar uma aula.",
  },

  endereco: {
    rua: "Rua Coronel Salvador Rolim de Freitas, nº 62",
    cidade: "Centro de Ibiúna/SP",
    referencia: "atrás da loja Cem",
  },

  redes: {
    instagram: "https://www.instagram.com/escola.ilustrar/",
    youtube: "https://www.youtube.com/@profmagnosolari",
    facebook: "https://www.facebook.com/EscolaIlustrar",
  },
} as const;

/**
 * Links das seções existentes.
 * As novas seções serão adicionadas quando
 * forem efetivamente implementadas.
 */
export const menuItems = [
  { texto: "A escola", href: "#escola" },
  { texto: "Cursos", href: "#cursos" },
  { texto: "Materiais", href: "#materiais" },
  { texto: "Inclusão", href: "#inclusao" },
  { texto: "Planos", href: "#planos" },
  { texto: "Localização", href: "#localizacao" },
  { texto: "Dúvidas", href: "#faq" },
] as const;

/**
 * Monta a URL do WhatsApp com mensagem
 * codificada para uso seguro no endereço.
 */
export function gerarLinkWhatsApp(
  numero: string = site.whatsapp.numero,
  mensagem: string = site.whatsapp.mensagem
): string {
  const telefone = numero.replace(/\D/g, "");

  return `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Gera o link para traçar uma rota até a escola.
 *
 * Utiliza o endereço definido no objeto "site".
 * O Google Maps identifica a origem do visitante
 * quando ele abre o link.
 */
export function gerarLinkRota(): string {
  const destino = [
    site.endereco.rua,
    site.endereco.cidade,
    "Brasil",
  ].join(", ");

  return (
    "https://www.google.com/maps/dir/?api=1" +
    `&destination=${encodeURIComponent(destino)}`
  );
}
