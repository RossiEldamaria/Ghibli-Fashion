# 🏪 Negozio Artigianato e Bigiotteria

Un sito web moderno e responsive per la vendita di prodotti artigianali e bigiotteria con integrazione WhatsApp per gli ordini.

## 📋 Caratteristiche

- **Design Moderno**: Interfaccia pulita e accattivante con gradienti e animazioni
- **Responsive**: Ottimizzato per desktop, tablet e smartphone
- **Carrello Interattivo**: Aggiungi, rimuovi e gestisci i prodotti nel carrello
- **Integrazione WhatsApp**: Invia ordini direttamente su WhatsApp
- **Categorie Organizzate**: Prodotti suddivisi in categorie e sottocategorie

## 🎨 Prodotti Disponibili

### Artigianato
- **Pesci e farfalle in legno**: Decorazioni da parete
- **Tegole**: Tegole decorate a mano
- **Dipinti**: Dipinti su tela
- **Quadri con sassi**: Creazioni artistiche con sassi
- **Rose dei venti**: Decorazioni nautiche
- **Utensili cucina**: Tazze, bicchierini, barattoli, poggia mestoli, presine, canovacci
- **Piatti decorativi da parete**: Piatti decorati
- **Acquasantiere**: Oggetti religiosi
- **Cassette della posta**: Cassette posta decorate
- **Attenti al cane**: Targhe decorative
- **String art**: Arte con fili colorati
- **Gabbiani e scacciapensieri**: Decorazioni da appendere
- **Feste natalizie**: Palle, presepi, alberi in ceramica
- **Animaletti portafortuna**: Portafortuna vari
- **Calamite**: Calamite decorative
- **Passatempo per bambini**: Giochi educativi
- **Targhette frasi**: Targhe con frasi
- **Segnalibro**: Segnalibri decorati

### Bigiotteria
- **Bracciali**: Bracciali in argento, perle, cuoio, pietre dure
- **Orecchini**: Orecchini a goccia, con perle, geometrici, a cerchio
- **Collane**: Collane con perle, in argento, con pendente, in cuoio
- **Cavigliere**: Cavigliere in argento, con campanellini, in cuoio
- **Orecchini Anallergici**: Orecchini anallergici con vari motivi

## 🚀 Come Utilizzare

1. **Apri il sito**: Apri `index.html` nel browser
2. **Sfoglia le categorie**: Clicca su "Artigianato" o "Bigiotteria"
3. **Scegli i prodotti**: Naviga tra le sottocategorie e aggiungi i prodotti al carrello
4. **Gestisci il carrello**: Aggiungi, rimuovi o svuota il carrello
5. **Invia l'ordine**: Clicca su "Invia Ordine su WhatsApp" per inviare l'ordine

## ⚙️ Personalizzazione

### Modificare i Prodotti
Apri `script.js` e modifica gli array `prodottiArtigianato` e `prodottiBigiotteria`:

```javascript
const prodottiArtigianato = {
  NomeCategoria: [
    { nome: "Nome Prodotto", prezzo: 25.00 },
    // Aggiungi altri prodotti...
  ]
};
```

### Modificare il Numero WhatsApp
Nel file `script.js`, cerca la riga:
```javascript
const numero = "3912345678"; // Sostituisci con il tuo numero
```

### Modificare i Prezzi
I prezzi sono definiti nel file `script.js` per ogni prodotto. Modifica i valori `prezzo` secondo le tue esigenze.

## 📱 Funzionalità WhatsApp

Il sito genera automaticamente un messaggio formattato con:
- Lista dei prodotti ordinati
- Quantità per ogni prodotto
- Prezzo totale
- Informazioni per la conferma

## 🎨 Personalizzazione Stile

Il file `stile/style.css` contiene tutti gli stili. Puoi modificare:
- Colori e gradienti
- Font e dimensioni
- Layout e spaziature
- Animazioni e transizioni

## 📁 Struttura File

```
Negozio/
├── index.html          # Homepage
├── artigianato.html    # Pagina prodotti artigianato
├── bigiotteria.html    # Pagina prodotti bigiotteria
├── script.js           # Logica JavaScript
├── stile/
│   └── style.css       # Stili CSS
├── immagini/           # Cartella per le immagini
└── README.md           # Questo file
```

## 🌐 Compatibilità

- Chrome, Firefox, Safari, Edge
- Desktop, tablet e smartphone
- Connessione internet per WhatsApp Web

## 📞 Supporto

Per modifiche o personalizzazioni, modifica i file HTML, CSS e JavaScript secondo le tue esigenze.

---

**Nota**: Assicurati di sostituire il numero WhatsApp nel file `script.js` con il tuo numero reale prima di utilizzare il sito. 