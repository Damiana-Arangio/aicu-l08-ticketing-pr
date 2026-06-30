# Prompt Patch Limitato

## Prima Di Compilare

Un prompt patch limitato e' l'istruzione operativa che userai nel lab per autorizzare solo il primo slice.

Serve a dire al builder:

- quale task affrontare;
- quali file puo' toccare;
- cosa resta fuori scope;
- quale verifica proporre;
- quando fermarsi.

Non usarlo per chiedere la feature completa o per autorizzare file non verificati.

Usa questo prompt nel lab L08, dopo il gate umano.

```txt
Dato questo task:
"Serve creare ticket dal supporto."

Usa questi input:
- issue: `lavoro-precedente/issue-create-ticket.md`
- contract sketch: `lavoro-precedente/contract-sketch-create-ticket.md`
- data sketch: `lavoro-precedente/data-sketch-create-ticket.md`
- mappa dei punti di intervento: `template/entry-point-map.md`

Applica solo il primo slice approvato:

Completare il backend skeleton minimo per `POST /api/tickets`.

La route deve ricevere solo `title` e `description`, validarli come campi obbligatori e non vuoti, creare un nuovo ticket lato server e inserirlo nell’array `tickets`.

Il server deve generare i campi necessari per mantenere il ticket coerente con la repo: `id`, `createdAt`, `updatedAt`, `source: "support"` e `status: "open"`.

Con payload valido, la risposta attesa è `201 Created - Ticket creato con successo`, includendo almeno i campi previsti dal contract L06: `id`, `title`, `description` e `createdAt`.

Con payload non valido, la route deve rispondere con `400 Bad Request`: sia quando `title` o `description` sono vuoti/mancanti, sia quando viene inviato un campo fuori contratto, per esempio `attachments`.

Il nuovo ticket deve essere verificabile con `GET /api/tickets`.

File o aree ammesse:
- server/index.js
- server/data/tickets.js

File o aree vietate:
- src/api.js
- src/App.jsx
- src/components/TicketList.jsx
- src/components/TicketCard.jsx
- src/styles.css
- src/main.jsx
- index.html

Non aggiungere:
- auth;
- allegati;
- notifiche;
- owner avanzato;
- dashboard;
- migration;
- redesign;
- refactor generale.
- UI completa di creazione ticket;

Non accettare dal payload:
- `attachments`, perché è fuori scope nel contract minimo;
- `customer`, `priority` e `area`, perché sono rimandati nel data sketch L06 e non approvati per questo primo slice;
- `status`, perché per questo slice viene generato lato server come `open`;
- altri campi non previsti dal contract minimo o non approvati per questo primo slice.

Prima di modificare, conferma:
- task;
- file che toccherai;
- file che non toccherai;
- cosa resta fuori scope;
- verifica manuale proposta.
- quando ti fermerai.

Applica solo la patch minima approvata.
Fermati se servono file o decisioni fuori piano.
```

## Gate Umano Prima Della Patch

Prima di autorizzare modifiche, controlla che la risposta AI dica chiaramente:

- quali file tocchera';
- quali file non tocchera';
- quale verifica manuale propone;
- quando si fermera'.

Se manca uno di questi punti, chiedi correzione prima della patch.

## Verifica Attesa

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
- 201 Created - Ticket creato con successo;
- la risposta contiene almeno id, title, description e createdAt;
- il nuovo ticket viene aggiunto all’array tickets.

4. Eseguire di nuovo:

GET http://127.0.0.1:3001/api/tickets

Risultato atteso:
- il nuovo ticket è presente nella risposta di GET /api/tickets.

5. Eseguire una richiesta POST con title vuoto:

POST http://127.0.0.1:3001/api/tickets

{
  "title": "",
  "description": "Il team supporto segnala che l'elenco dei ticket non si carica correttamente."
}

Risultato atteso:
- 400 Bad Request con errore leggibile sul campo title;
- nessun ticket viene creato.

6. Eseguire una richiesta POST con description vuota:

POST http://127.0.0.1:3001/api/tickets

{
  "title": "Problema caricamento ticket",
  "description": ""
}

Risultato atteso:
- 400 Bad Request con errore leggibile sul campo description;
- nessun ticket viene creato.

7. Eseguire una richiesta POST con un campo fuori contratto, per esempio attachments:

POST http://127.0.0.1:3001/api/tickets

{
  "title": "Problema caricamento ticket",
  "description": "Il team supporto segnala che l'elenco dei ticket non si carica correttamente.",
  "attachments": ["screenshot.png"]
}

Risultato atteso:
- 400 Bad Request con errore leggibile sul campo attachments;
- nessun ticket viene creato.
```

## Note

- Non chiedere feature completa.
- Non chiedere di "sistemare tutto".
- Non autorizzare file non verificati.