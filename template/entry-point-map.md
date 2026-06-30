# Mappa Dei Punti Di Intervento (Entry-Point Map) - Create Ticket

## Prima Di Compilare

Una mappa dei punti di intervento (entry-point map) e' una mappa dei file o delle aree in cui la modifica potrebbe entrare.

Serve a distinguere:

- file suggeriti dall'AI;
- file trovati nel repo;
- file davvero collegati al task;
- file da non toccare.

L'output atteso e' una lista di candidati con evidenza, non una lista di nomi plausibili.

Non segnare un file come `ammesso` se non lo hai aperto o letto.

## Task

```txt
Serve creare ticket dal supporto.
```

## Input Usati

- Issue L05 importata: `lavoro-precedente/issue-create-ticket.md`
- Contract sketch L06 importato: `lavoro-precedente/contract-sketch-create-ticket.md`
- Data sketch L06 importato: `lavoro-precedente/data-sketch-create-ticket.md`

## Regola

Un file suggerito dall'AI non e' ancora un file candidato verificato.

Diventa candidato solo se:

- esiste;
- e' stato aperto o letto;
- ha un ruolo collegato al task;
- hai scritto l'evidenza minima.

## File Candidati

| File / area | Suggerito da | Evidenza verificata | Stato |
| --- | --- | --- | --- |
| `server/index.js` | repo + contract sketch L06 | Contiene `GET /api/tickets` per recuperare i ticket aperti, `GET /api/ticket-options` per recuperare le opzioni disponibili e `POST /api/tickets`, che al momento non crea ancora il ticket ma restituisce errore `501 NOT_IMPLEMENTED`. Il contract L06 prevede una chiamata `POST` per creare un ticket con `title` e `description`. | ammesso |
| `server/data/tickets.js` | repo + data sketch L06 | Contiene l’array `tickets` con i ticket salvati in memoria e le opzioni disponibili per `priority` e `area`. È collegato al primo slice perché il nuovo ticket creato da `POST /api/tickets` deve essere aggiunto ai dati in memoria e poi restituito da `GET /api/tickets`. Nel data sketch L06 `title` e `description` sono accettati, mentre `customer`, `priority`, `area` e `status` sono rimandati: quindi il file è ammesso solo per usare l’array esistente, senza allargare il payload oltre il contratto minimo. | ammesso |
| `src/api.js` | repo + issue L05 / contract L06 | Contiene solo la funzione `fetchOpenTickets`, usata per recuperare i ticket con `GET /api/tickets`. La creazione da UI è prevista dalla feature completa, ma resta fuori dal primo slice perché L08 indica come default un backend skeleton minimo verificabile tramite API. | dubbio |
| `src/App.jsx` | repo + issue L05 | Carica i ticket aperti tramite `fetchOpenTickets`, gestisce gli stati di caricamento/errore e passa i ticket a `TicketList`. È collegato alla feature completa perché dopo la creazione il nuovo ticket dovrebbe arrivare nella lista, ma aggiungere o collegare un form UI allargherebbe il primo slice. | dubbio |
| `src/components/TicketList.jsx` | repo + issue L05 | Riceve i ticket da `App.jsx`, mostra il titolo della sezione, il conteggio dei ticket aperti e renderizza ogni ticket tramite `TicketCard`. Serve per verificare che l’elenco continui a funzionare, ma non richiede modifiche nel primo slice backend. | dubbio |
| `src/components/TicketCard.jsx` | repo + data sketch L06 | Mostra i dati di ogni ticket nella lista. Il file evidenzia che la UI usa più campi rispetto al data sketch minimo, quindi questa differenza va considerata prima della patch. | dubbio |
| `src/styles.css` | repo + issue L05 | Contiene layout e stili della UI. Non serve per creare ticket lato API e porterebbe a modifiche grafiche fuori scope. | vietato |
| `src/main.jsx` | repo | Avvia l’app React e importa gli stili. Non ha un ruolo diretto nella creazione dei ticket. | vietato |
| `index.html` | repo | Contiene la struttura HTML di base dell’app. Non ha un ruolo diretto nella creazione dei ticket. | vietato |

## File Ammessi Per Il Primo Slice

- `server/index.js`
- `server/data/tickets.js`

## File Vietati O Fuori Scope

- `src/styles.css` - fuori scope: non serve modificare layout o stili per creare un ticket lato API.
- `src/main.jsx` - fuori scope: avvia solo l’app React e non contiene logica di creazione ticket.
- `index.html` - fuori scope: contiene solo la struttura HTML di base.

## Primo Slice Proposto

```txt
Implementare il backend skeleton minimo per `POST /api/tickets`.

La route deve ricevere solo `title` e `description`, validarli come campi obbligatori e non vuoti, creare un nuovo ticket lato server e inserirlo nell’array `tickets`.

Il server genera i campi necessari per mantenere il ticket coerente con la repo: `id`, `createdAt`, `updatedAt`, `source: "support"` e `status: "open"`.

Con payload valido, la risposta attesa è `201 Created - Ticket creato con successo`, includendo almeno i campi previsti dal contract L06: `id`, `title`, `description` e `createdAt`.

Con payload non valido, la route deve rispondere con `400 Bad Request`: sia quando `title` o `description` sono vuoti/mancanti, sia quando viene inviato un campo fuori contratto, per esempio `attachments`.

Il nuovo ticket deve essere verificabile con `GET /api/tickets`, senza aggiungere form UI, auth, dashboard, notifiche, migration o refactor generale.
```

## Perche' Questo Slice E' Piccolo

- Parte da una route già presente: `POST /api/tickets`
- Limita la patch ai file backend ammessi: `server/index.js` e `server/data/tickets.js`
- Accetta solo il payload minimo previsto dal contract L06: `title` e `description`
- È verificabile manualmente tramite `POST /api/tickets` e `GET /api/tickets`
- Non introduce UI completa di creazione ticket, auth, allegati, dashboard, notifiche, migration o refactor generale.

## Verifica Manuale Proposta

```txt
1. Avviare il progetto.

2. Eseguire una richiesta GET iniziale:

GET http://127.0.0.1:3001/api/tickets

Risultato atteso:
- la richiesta continua a restituire i ticket aperti già presenti.

3. Eseguire una richiesta POST con payload valido:

POST http://127.0.0.1:3001/api/tickets

{
  "title": "Problema caricamento ticket",
  "description": "Il team supporto segnala che l'elenco dei ticket non si carica correttamente."
}

Risultato atteso:
- 201 Created - Ticket creato con successo

4. Eseguire di nuovo:

GET http://127.0.0.1:3001/api/tickets

Risultato atteso:
- il nuovo ticket è presente nella risposta

5. Eseguire una richiesta POST con title vuoto:

POST http://127.0.0.1:3001/api/tickets

{
  "title": "",
  "description": "Il team supporto segnala che l'elenco dei ticket non si carica correttamente."
}

Risultato atteso:
- 400 Bad Request con errore leggibile sul campo title
- nessun ticket viene creato.

6. Eseguire una richiesta POST con description vuota:

POST http://127.0.0.1:3001/api/tickets

{
  "title": "Problema caricamento ticket",
  "description": ""
}

Risultato atteso:
- 400 Bad Request con errore leggibile sul campo description
- nessun ticket viene creato.

7. Eseguire una richiesta POST con un campo fuori contratto, per esempio attachments:

POST http://127.0.0.1:3001/api/tickets

{
  "title": "Problema caricamento ticket",
  "description": "Il team supporto segnala che l'elenco dei ticket non si carica correttamente.",
  "attachments": ["screenshot.png"]
}

Risultato atteso:
- 400 Bad Request con errore leggibile sul campo attachments
- nessun ticket viene creato.
```

## Stop Condition

Fermarsi se:

- serve auth;
- serve migration;
- serve redesign;
- serve dashboard;
- serve UI completa di creazione ticket;
- serve modificare file non ammessi;
- serve accettare campi non previsti dal contract minimo;
- il tool propone di modificare `src/api.js`, `src/App.jsx`, `TicketList.jsx`, `TicketCard.jsx` o `styles.css` senza chiedere conferma;
- il tool propone più dello slice approvato.

## Domande Aperte Per L08

- Le istruzioni L08 citano la verifica su priorità non ammessa: `priority` va rifiutata se presente nel payload, anche se nel data sketch L06 era rimandata?