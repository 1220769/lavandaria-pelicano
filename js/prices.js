// Fonte única de verdade para todos os preços.
// Para alterar um preço, edita apenas aqui.

const PRICES = {
  vestuario: {
    label: "Vestuário",
    nota: "Veludo, bombazine, linho e seda acresce 0,50€ por peça. Também fazemos tratamento Barbour.",
    items: [
      { nome: "Fato",                    preco: "10,00€" },
      { nome: "Fato c/ Colete",          preco: "14,00€" },
      { nome: "Caça",                    preco: "5,00€" },
      { nome: "Colete",                  preco: "4,50€" },
      { nome: "Saia",                    preco: "Desde 5,00€" },
      { nome: "Blusa",                   preco: "Desde 5,00€" },
      { nome: "Gravata",                 preco: "4,50€" },
      { nome: "Sobretudo",               preco: "Desde 10,00€" },
      { nome: "Gabardine L.I.",          preco: "Desde 12,00€" },
      { nome: "Casaco",                  preco: "Desde 6,00€" },
      { nome: "Samarra",                 preco: "20,00€" },
      { nome: "Lenços de seda",          preco: "Desde 5,00€" },
      { nome: "Camisolas",               preco: "Desde 4,50€" },
      { nome: "Vestidos",                preco: "Desde 10,00€" },
      { nome: "T-Shirt",                 preco: "3,00€" },
      { nome: "Echarpes",                preco: "Desde 7,50€" },
      { nome: "Blusão Penas",            preco: "Desde 12,50€" },
      { nome: "Macacão",                 preco: "Desde 10,00€" },
      { nome: "Vestidos Cerimónia",      preco: "Só à vista" },
      { nome: "Vestidos Noiva",          preco: "Só à vista" },
      { nome: "Camisa",                  preco: "Desde 3,50€" },
      { nome: "Batas",                   preco: "4,00€" },
      { nome: "Calção",                  preco: "Desde 4,00€" },
      { nome: "Túnica",                  preco: "Desde 6,00€" },
      { nome: "Blusões",                 preco: "Desde 10,00€" },
      { nome: "Saia plissada",           preco: "7,50€" },
      { nome: "Smoking",                 preco: "12,50€" },
      { nome: "Roupão",                  preco: "Desde 8,00€" },
      { nome: "Polos",                   preco: "Desde 3,50€" },
      { nome: "Sweat",                   preco: "Desde 4,50€" },
      { nome: "Parka L.I.",              preco: "Desde 10,00€" },
      { nome: "Trajes Académicos (4pcs)",preco: "18,50€" },
      { nome: "Casacos imitação pele",   preco: "Desde 19,00€" },
      { nome: "Fraque – 3 peças",        preco: "Desde 19,00€" },
    ]
  },

  peles: {
    label: "Peles",
    items: [
      { nome: "Casaco Antílope",              preco: "Desde 50€" },
      { nome: "Saia Antílope",                preco: "Desde 35€" },
      { nome: "Casaco Antílope 3/4",          preco: "Desde 75€" },
      { nome: "Colete Antílope",              preco: "Desde 35€" },
      { nome: "Casaco Antílope Comprido",     preco: "Desde 100€" },
      { nome: "Carteira Antílope",            preco: "Desde 30€" },
      { nome: "Casaco Couro lavar e pintar",  preco: "Desde 60€" },
      { nome: "Saia Couro só lavar",          preco: "Desde 25,00€" },
      { nome: "Calça Couro só lavar",         preco: "Desde 30,00€" },
      { nome: "Calça Couro lavar e pintar",   preco: "Só à vista" },
      { nome: "Saia Couro lavar e pintar",    preco: "Só à vista" },
      { nome: "Casaco Nobuk",                 preco: "Desde 55€" },
      { nome: "Golas",                        preco: "Desde 10€" },
      { nome: "Luvas",                        preco: "Desde 12,50€" },
      { nome: "Sapatilhas",                   preco: "Desde 20€" },
      { nome: "Calça Antílope",               preco: "Desde 30€" },
    ]
  },

  carpetes: {
    label: "Carpetes",
    items: [
      { nome: "Arraiolos",                    preco: "Desde 12€/kg" },
      { nome: "Lã",                           preco: "Desde 12€/kg" },
      { nome: "Perça",                        preco: "Desde 12€/kg" },
      { nome: "Turca",                        preco: "Desde 12€/kg" },
      { nome: "Capas de Cavalo",              preco: "17,50€" },
      { nome: "Carpete finas / baixa",        preco: "Desde 9€/kg" },
      { nome: "Tratamento anti-traça, manchado e extra lavagem intensiva", preco: "15€/kg" },
    ]
  },

  neve: {
    label: "Neve",
    nota: "Outras peças sob consulta. Calçado: só à vista.",
    items: [
      { nome: "Luvas",           preco: "Desde 6€" },
      { nome: "Calça Criança",   preco: "Desde 9,50€" },
      { nome: "Calça",           preco: "Desde 12€" },
      { nome: "Calçado",         preco: "Só à vista" },
      { nome: "Macacão Criança", preco: "Desde 15€" },
      { nome: "Macacão",         preco: "Desde 22,50€" },
      { nome: "Blusão Criança",  preco: "Desde 12,50€" },
      { nome: "Blusão",          preco: "Desde 17,50€" },
    ]
  },

  texteis: {
    label: "Têxteis Lar",
    items: [
      { nome: "Edredons",              preco: "Desde 17,50€" },
      { nome: "Edredons Penas",        preco: "Desde 25€" },
      { nome: "Colcha crochet",        preco: "Desde 6€/kg" },
      { nome: "Colcha Seda/Linho",     preco: "Desde 30€" },
      { nome: "Colcha de Algodão",     preco: "Desde 20€" },
      { nome: "Mantas",                preco: "Desde 10€" },
      { nome: "Roupa Branca",          preco: "4€/kg" },
      { nome: "Sacos Cama",            preco: "Desde 10,00€" },
      { nome: "Cobertor pelo/Lã",      preco: "Desde 12€" },
      { nome: "Cortinados/Cortinas",   preco: "Só à vista" },
      { nome: "Estores e Telas",       preco: "Só à vista" },
      { nome: "Almofadas",             preco: "Desde 8€" },
      { nome: "Resguardos de Colchão", preco: "Desde 25€" },
      { nome: "Capas de Sofá",         preco: "Só à vista" },
      { nome: "Capas de Edredon",      preco: "Desde 10,00€" },
      { nome: "Cobertores",            preco: "Desde 10€" },
    ]
  },

  passar: {
    label: "Só Passar / Secar",
    items: [
      { nome: "Calça / Saia",               preco: "Desde 3€" },
      { nome: "Blusas / Camisas",           preco: "Desde 3€" },
      { nome: "Casaco",                     preco: "Desde 4,50€" },
      { nome: "Fato",                       preco: "7€" },
      { nome: "T-Shirt",                    preco: "Desde 2€" },
      { nome: "Polos",                      preco: "Desde 2€" },
      { nome: "Roupa Branca – Lisos",       preco: "3,50€/kg" },
      { nome: "Roupa Diversa só para passar", preco: "2,50€/kg" },
    ]
  }
};