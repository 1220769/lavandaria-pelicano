// Fonte única de verdade para todos os preços.
// Para alterar um preço, edita apenas aqui.

const PRICES = {
  vestuario: {
    label: "Vestuário",
    nota: "Veludo, bombazine, linho e seda acresce 0,50€ por peça. Também fazemos tratamento Barbour.",
    items: [
      { nome: "Fato",                    preco: "Desde 10,00€" },
      { nome: "Fato c/ Colete",          preco: "Desde 14,00€" },
      { nome: "Caça",                    preco: "Desde 5,00€" },
      { nome: "Colete",                  preco: "Desde 4,50€" },
      { nome: "Saia",                    preco: "Desde 5,00€" },
      { nome: "Blusa",                   preco: "Desde 5,00€" },
      { nome: "Gravata",                 preco: "Desde 4,50€" },
      { nome: "Sobretudo",               preco: "Desde 10,00€" },
      { nome: "Gabardine L.I.",          preco: "Desde 12,00€" },
      { nome: "Casaco",                  preco: "Desde 6,00€" },
      { nome: "Samarra",                 preco: "Desde 20,00€" },
      { nome: "Lenços de seda",          preco: "Desde 6,00€" },
      { nome: "Camisolas",               preco: "Desde 5,00€" },
      { nome: "Vestidos",                preco: "Desde 10,00€" },
      { nome: "T-Shirt",                 preco: "Desde 3,00€" },
      { nome: "Echarpes",                preco: "Desde 7,50€" },
      { nome: "Blusão Penas",            preco: "Desde 12,50€" },
      { nome: "Macacão",                 preco: "Desde 10,00€" },
      { nome: "Vestidos Cerimónia",      preco: "Só à vista" },
      { nome: "Vestidos Noiva",          preco: "Só à vista" },
      { nome: "Camisa",                  preco: "Desde 4,00€" },
      { nome: "Batas",                   preco: "Desde 4,50€" },
      { nome: "Calção",                  preco: "Desde 4,00€" },
      { nome: "Túnica",                  preco: "Desde 6,00€" },
      { nome: "Blusões",                 preco: "Desde 10,00€" },
      { nome: "Saia plissada",           preco: "Desde 7,50€" },
      { nome: "Smoking",                 preco: "Desde 12,50€" },
      { nome: "Roupão",                  preco: "Desde 8,00€" },
      { nome: "Polos",                   preco: "Desde 3,50€" },
      { nome: "Sweat",                   preco: "Desde 4,50€" },
      { nome: "Parka L.I.",              preco: "Desde 10,00€" },
      { nome: "Trajes Académicos (4pcs)",preco: "18,00€/20,00€" },
      { nome: "Casacos imitação pele",   preco: "Desde 15,00€" },
      { nome: "Fraque – 3 peças",        preco: "Desde 19,00€" },
    ]
  },

  peles: {
    label: "Peles",
    items: [
      { nome: "Casaco Antílope",              preco: "Desde 50,00€" },
      { nome: "Saia Antílope",                preco: "Desde 35,00€" },
      { nome: "Casaco Antílope 3/4",          preco: "Desde 75,00€" },
      { nome: "Colete Antílope",              preco: "Desde 35,00€" },
      { nome: "Casaco Antílope Comprido",     preco: "Desde 100,00€" },
      { nome: "Carteira Antílope",            preco: "Desde 30,00€" },
      { nome: "Casaco Couro lavar e pintar",  preco: "Desde 60,00€" },
      { nome: "Saia Couro só lavar",          preco: "Desde 25,00€" },
      { nome: "Calça Couro só lavar",         preco: "Desde 30,00€" },
      { nome: "Calça Couro lavar e pintar",   preco: "Só à vista" },
      { nome: "Saia Couro lavar e pintar",    preco: "Só à vista" },
      { nome: "Casaco Nobuk",                 preco: "Desde 55,00€" },
      { nome: "Golas",                        preco: "Desde 10,00€" },
      { nome: "Luvas",                        preco: "Desde 15,00€" },
      { nome: "Sapatilhas",                   preco: "Desde 25,00€" },
      { nome: "Calça Antílope",               preco: "Desde 30,00€" },
    ]
  },

  carpetes: {
    label: "Carpetes",
    items: [
      { nome: "Arraiolos",                    preco: "Desde 12,50€/kg" },
      { nome: "Lã",                           preco: "Desde 12,50€/kg" },
      { nome: "Perça",                        preco: "Desde 12,50€/kg" },
      { nome: "Turca",                        preco: "Desde 12,50€/kg" },
      { nome: "Capas de Cavalo",              preco: "Desde 17,50€/kg" },
      { nome: "Carpete finas / baixa",        preco: "Desde 10,00€/kg" },
      { nome: "Tratamento anti-traça, manchado e extra lavagem intensiva", preco: "Desde 15,00€/kg" },
    ]
  },

  neve: {
    label: "Neve",
    nota: "Outras peças sob consulta. Calçado: só à vista.",
    items: [
      { nome: "Luvas",           preco: "Desde 6,00€" },
      { nome: "Calça Criança",   preco: "Desde 9,50€" },
      { nome: "Calça",           preco: "Desde 12,00€" },
      { nome: "Calçado",         preco: "Só à vista" },
      { nome: "Macacão Criança", preco: "Desde 15,00€" },
      { nome: "Macacão",         preco: "Desde 22,50€" },
      { nome: "Blusão Criança",  preco: "Desde 12,50€" },
      { nome: "Blusão",          preco: "Desde 17,50€" },
    ]
  },

  texteis: {
    label: "Têxteis Lar",
    items: [
      { nome: "Edredons",              preco: "Desde 17,50€" },
      { nome: "Edredons Penas",        preco: "Desde 25,00€" },
      { nome: "Colcha crochet",        preco: "Desde 6,00€/kg" },
      { nome: "Colcha Seda/Linho",     preco: "Desde 30,00€" },
      { nome: "Colcha de Algodão",     preco: "Desde 20,00€" },
      { nome: "Mantas",                preco: "Desde 10,00€" },
      { nome: "Roupa Branca",          preco: "Desde 4,00€/kg" },
      { nome: "Sacos Cama",            preco: "Desde 10,00€" },
      { nome: "Cobertor pelo/Lã",      preco: "Desde 12,50€" },
      { nome: "Cortinados/Cortinas",   preco: "Só à vista" },
      { nome: "Estores e Telas",       preco: "Só à vista" },
      { nome: "Almofadas",             preco: "Desde 8,00€" },
      { nome: "Resguardos de Colchão", preco: "Desde 25,00€" },
      { nome: "Capas de Sofá",         preco: "Só à vista" },
      { nome: "Capas de Edredon",      preco: "Desde 10,00€" },
      { nome: "Cobertores",            preco: "Desde 10,00€" },
    ]
  },

  passar: {
    label: "Só Passar / Secar",
    items: [
      { nome: "Calça / Saia",               preco: "Desde 3,50€" },
      { nome: "Blusas / Camisas",           preco: "Desde 4,00€" },
      { nome: "Casaco",                     preco: "Desde 5,00€" },
      { nome: "Fato",                       preco: "Desde 8,00€" },
      { nome: "T-Shirt",                    preco: "Desde 2,00€" },
      { nome: "Polos",                      preco: "Desde 2,00€" },
      { nome: "Roupa Branca – Lisos",       preco: "Desde 3,50€/kg" },
      { nome: "Roupa Diversa só para passar", preco: "Desde 2,50€/kg" },
    ]
  }
};