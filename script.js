const carrello = [];

// Database completo dei prodotti di artigianato
const prodottiArtigianato = {
  PesciFarfalle: [
    { nome: "Pesce in legno piccolo", prezzo: 4.50 },
    { nome: "Pesce in legno medio", prezzo: 9.00 },
    { nome: "Pesce in legno grande", prezzo: 12.00 },
    { nome: "Farfalla in legno piccola", prezzo: 7.50 },
    { nome: "Farfalla in legno media", prezzo: 9.50 },
    { nome: "Farfalla in legno grande", prezzo: 18.00 },
    { nome: "Mezza Farfalla in legno piccola", prezzo: 5.50 },
    { nome: "Mezza Farfalla in legno media", prezzo: 6.50 },
    { nome: "Mezza Farfalla in legno grande", prezzo: 13.00 },
    { nome: "Polpo piccolo", prezzo: 15.00 },
    { nome: "Polpo grande", prezzo: 18.00 },
    { nome: "Corallo piccolo", prezzo: 18.00 },
    { nome: "Corallo grande", prezzo: 15.00 }
  ],
  Tegole: [
    { nome: "Tegola decorata - piccola", prezzo: 15.00 },
    { nome: "Tegola decorata - media", prezzo: 18.00 },
    { nome: "Tegola decorata - grande", prezzo: 30.00 },
    { nome: "Tegola decorata - tetto", prezzo: 65.00 }
  ],
  Dipinti: [
    { nome: "Dipinto su tela - Paesaggio marino", prezzo: 45.00 },
    { nome: "Dipinto su tela - Natura morta", prezzo: 40.00 },
    { nome: "Dipinto su tela - Astratto", prezzo: 50.00 }
  ],
  QuadriSassi: [
    { nome: "Quadro con sassi - piccoli", prezzo: 38.00 },
    { nome: "Quadro con sassi - Albero", prezzo: 45.00 },
    { nome: "Quadro con sassi - grandi", prezzo: 40.00 }
  ],
  RoseVenti: [
    { nome: "Rosa dei venti piccola", prezzo: 28.00 },
    { nome: "Rosa dei venti media", prezzo: 35.00 },
    { nome: "Rosa dei venti medio-grande", prezzo: 45.00 },
    { nome: "Rosa dei venti grande", prezzo: 45.00 }

  ],
  UtensiliCucina: [
    { nome: "Tazza decorata", prezzo: 12.00 },
    { nome: "Bicchierino decorato", prezzo: 8.00 },
    { nome: "Barattolo decorato", prezzo: 15.00 },
    { nome: "Poggia mestoli", prezzo: 18.00 },
    { nome: "Presina da cucina", prezzo: 10.00 },
    { nome: "Canovaccio decorato", prezzo: 12.00 }
  ],
  PiattiParete: [
    { nome: "Piatto decorativo - Fiori", prezzo: 25.00 },
    { nome: "Piatto decorativo - Mare", prezzo: 28.00 },
    { nome: "Piatto decorativo - Campagna", prezzo: 22.00 }
  ],
  Acquasantiera: [
    { nome: "Acquasantiera classica", prezzo: 30.00 },
    { nome: "Acquasantiera moderna", prezzo: 35.00 }
  ],
  CassettaPosta: [
    { nome: "Cassetta posta decorata", prezzo: 40.00 },
    { nome: "Cassetta posta personalizzata", prezzo: 45.00 }
  ],
  AttentiCane: [
    { nome: "Targa 'Attenti al cane'", prezzo: 15.00 },
    { nome: "Targa 'Cane in giardino'", prezzo: 15.00 }
  ],
  StringArt: [
    { nome: "String art - Cuore", prezzo: 20.00 },
    { nome: "String art - Stella", prezzo: 22.00 },
    { nome: "String art - Albero", prezzo: 25.00 }
  ],
  Gabbiani: [
    { nome: "Gabbiano piccolo", prezzo: 7.00 },
    { nome: "Gabbiano medio", prezzo: 12.00 },
    { nome: "Gabbiano medio-grande", prezzo: 18.00 },
    { nome: "Gabbiano grande", prezzo: 25.00 },
    { nome: "Scacciapensieri conchiglia", prezzo: 21.00 },
    { nome: "Scacciapensieri pesci", prezzo: 7.50 },
    { nome: "Scacciapensieri legno", prezzo: 15.00 }
  ],
  FesteNatalizie: [
    { nome: "Palla di Natale in ceramica", prezzo: 12.00 },
    { nome: "Presepe in ceramica", prezzo: 35.00 },
    { nome: "Albero di Natale in ceramica", prezzo: 25.00 }
  ],
  Portafortuna: [
    { nome: "Animaletto portafortuna - Gatto", prezzo: 15.00 },
    { nome: "Animaletto portafortuna - Cavallo", prezzo: 15.00 },
    { nome: "Animaletto portafortuna - Elefante", prezzo: 18.00 }
  ],
  Calamite: [
    { nome: "Calamita - Nodi", prezzo: 2.50 },
    { nome: "Calamita - Gelati", prezzo: 2.50 },
    { nome: "Calamita - Case", prezzo: 4.00 },
    { nome: "Calamita - Pesci con sassi", prezzo: 3.50 },
    { nome: "Calamita - Su tela", prezzo: 8.00 },
    { nome: "Calamita - Ceramica", prezzo: 6.00 },
    { nome: "Calamita - Animali marini in legno", prezzo: 4.00 },
    { nome: "Calamita - Spiaggia", prezzo: 3.50 },
    { nome: "Calamita - Turista al mare", prezzo: 4.00 }
  ],
  Giochi: [
    { nome: "Passatempo per bambini - Puzzle", prezzo: 15.00 },
    { nome: "Passatempo per bambini - Memory", prezzo: 12.00 }
  ],
  TarghetteFrasi: [
    { nome: "Targhetta con frase motivazionale", prezzo: 12.00 },
    { nome: "Targhetta con frase romantica", prezzo: 12.00 },
    { nome: "Targhetta personalizzata", prezzo: 15.00 }
  ],
  Segnalibro: [
    { nome: "Segnalibro decorato - Fiori", prezzo: 8.00 },
    { nome: "Segnalibro decorato - Mare", prezzo: 8.00 },
    { nome: "Segnalibro personalizzato", prezzo: 10.00 }
  ]
};

// Database completo dei prodotti di bigiotteria
const prodottiBigiotteria = {
  Bracciali: [
    { nome: "Bracciale in argento", prezzo: 25.00 },
    { nome: "Bracciale con perle", prezzo: 20.00 },
    { nome: "Bracciale in cuoio", prezzo: 15.00 },
    { nome: "Bracciale con pietre dure", prezzo: 30.00 },
    { nome: "Bracciale charm", prezzo: 18.00 }
  ],
  Orecchini: [
    { nome: "Orecchini a goccia", prezzo: 15.00 },
    { nome: "Orecchini con perle", prezzo: 18.00 },
    { nome: "Orecchini geometrici", prezzo: 12.00 },
    { nome: "Orecchini a cerchio", prezzo: 20.00 }
  ],
  Collane: [
    { nome: "Collana con perle", prezzo: 25.00 },
    { nome: "Collana in argento", prezzo: 30.00 },
    { nome: "Collana con pendente", prezzo: 22.00 },
    { nome: "Collana in cuoio", prezzo: 18.00 }
  ],
  Cavigliere: [
    { nome: "Cavigliera in argento", prezzo: 15.00 },
    { nome: "Cavigliera con campanellini", prezzo: 12.00 },
    { nome: "Cavigliera in cuoio", prezzo: 10.00 }
  ],
  OrecchiniAnallergici: [
    { nome: "Orecchini anallergici - Fiori", prezzo: 18.00 },
    { nome: "Orecchini anallergici - Stelle", prezzo: 16.00 },
    { nome: "Orecchini anallergici - Cuori", prezzo: 17.00 }
  ]
};

function mostraProdotti(lista, contenitoreId) {
  const contenitore = document.getElementById(contenitoreId);
  if (!contenitore) return;
  
  contenitore.innerHTML = "";
  lista.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "prodotto";
    // Inserisco l'immagine solo per Gabbiano piccolo
    let imgHtml = "";
    if (p.nome.toLowerCase().includes("gabbiano piccolo")) {
      imgHtml = `<img src='immagini/GabbianoPiccolo.jpg' alt='Gabbiano piccolo' style='width:120px; height:auto; display:block; margin:0 auto 10px auto; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.10);'>`;
    }
    div.innerHTML = `
      ${imgHtml}
      <h3>${p.nome}</h3>
      <p class="prezzo">${p.prezzo.toFixed(2)} €</p>
      <button onclick="aggiungiAlCarrello('${p.nome}', ${p.prezzo})">Aggiungi al carrello</button>
    `;
    contenitore.appendChild(div);
  });
}

function mostraReparto(nome) {
  document.querySelectorAll('.reparto').forEach((r) => {
    r.style.display = 'none';
  });
  document.getElementById(nome).style.display = 'block';
}

function mostraSottocategoria(nome) {
  // Nascondi tutte le sottocategorie
  document.querySelectorAll('.sottocategoria').forEach((el) => {
    el.style.display = 'none';
  });

  const sezione = document.getElementById(nome);
  if (sezione) {
    sezione.style.display = 'block';
    const contenitore = document.getElementById("prodotti-" + nome);

    if (contenitore && contenitore.childElementCount === 0) {
      // Determina se siamo in artigianato o bigiotteria
      let lista;
      if (prodottiArtigianato[nome]) {
        lista = prodottiArtigianato[nome];
      } else if (prodottiBigiotteria[nome]) {
        lista = prodottiBigiotteria[nome];
      }
      
      if (lista) {
        mostraProdotti(lista, "prodotti-" + nome);
      }
    }
  }
}

function mostraSottoSottoCategoria(nome) {
  document.querySelectorAll('.sottosottocategoria').forEach((el) => {
    el.style.display = 'none';
  });

  const contenitoreDiv = document.getElementById(nome);
  if (contenitoreDiv) {
    contenitoreDiv.style.display = 'block';

    const contenitoreProdotti = document.getElementById("prodotti-" + nome);
    if (contenitoreProdotti.childElementCount === 0) {
      const prodotti = prodottiBigiotteria.Bracciali[nome];
      prodotti.forEach((p, i) => {
        const div = document.createElement("div");
        div.className = "prodotto";
        div.innerHTML = `
          <h4>${p.nome}</h4>
          <p>${p.prezzo.toFixed(2)} €</p>
          <button onclick="aggiungiAlCarrelloDirettamente('prodotti-${nome}', ${i})">Aggiungi</button>
        `;
        contenitoreProdotti.appendChild(div);
      });
    }
  }
}

function aggiungiAlCarrello(nome, prezzo) {
  const esiste = carrello.find((p) => p.nome === nome);
  if (esiste) {
    esiste.quantita++;
  } else {
    carrello.push({ nome, prezzo, quantita: 1 });
  }
  aggiornaCarrello();
  
  // Feedback visivo
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "Aggiunto!";
  button.style.backgroundColor = "#28a745";
  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = "#007b5e";
  }, 1000);
}

function aggiornaCarrello() {
  const ul = document.getElementById("carrello");
  if (!ul) return;
  
  ul.innerHTML = "";
  let totale = 0;
  
  carrello.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.nome} x${item.quantita}</span>
      <span>${(item.prezzo * item.quantita).toFixed(2)} €</span>
      <button onclick="rimuoviDalCarrello('${item.nome}')" class="btn-rimuovi">×</button>
    `;
    ul.appendChild(li);
    totale += item.prezzo * item.quantita;
  });
  
  const totaleElement = document.getElementById("totale");
  if (totaleElement) {
    totaleElement.textContent = totale.toFixed(2);
  }
}

function rimuoviDalCarrello(nome) {
  const index = carrello.findIndex((p) => p.nome === nome);
  if (index > -1) {
    if (carrello[index].quantita > 1) {
      carrello[index].quantita--;
    } else {
      carrello.splice(index, 1);
    }
    aggiornaCarrello();
  }
}

function svuotaCarrello() {
  carrello.length = 0;
  aggiornaCarrello();
}

function inviaOrdine() {
  if (carrello.length === 0) {
    alert("Il carrello è vuoto!");
    return;
  }
  
  let messaggio = " *NUOVO ORDINE* %0A%0A";
  let totale = 0;
  
  carrello.forEach((p) => {
    messaggio += `• ${p.quantita}x ${p.nome} - ${(p.prezzo * p.quantita).toFixed(2)}€%0A`;
    totale += p.prezzo * p.quantita;
  });
  
  messaggio += `%0A *TOTALE: ${totale.toFixed(2)}€*%0A%0A`;
  messaggio += " Per confermare l'ordine, rispondi a questo messaggio.%0A";
  messaggio += " Consegna a domicilio disponibile.";

  // Numero WhatsApp (da personalizzare)
  const numero = "3407327665"; // Sostituisci con il tuo numero
  const link = `https://wa.me/${numero}?text=${messaggio}`;
  window.open(link, "_blank");
}

// Inizializzazione quando la pagina è caricata
document.addEventListener("DOMContentLoaded", () => {
  // Mostra la prima categoria di artigianato se siamo nella pagina artigianato
  if (document.getElementById("sottomenù-artigianato")) {
    const primaCategoria = Object.keys(prodottiArtigianato)[0];
    if (primaCategoria) {
      mostraSottocategoria(primaCategoria);
    }
  }
  
  // Mostra la prima categoria di bigiotteria se siamo nella pagina bigiotteria
  if (document.getElementById("sottomenù-bigiotteria")) {
    const primaCategoria = Object.keys(prodottiBigiotteria)[0];
    if (primaCategoria) {
      mostraSottocategoria(primaCategoria);
    }
  }
});