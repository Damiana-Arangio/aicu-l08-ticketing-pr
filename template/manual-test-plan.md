# Piano Di Verifica Manuale (Manual Test Plan) - Create Ticket

## Prima Di Compilare

Un piano di verifica manuale e' la lista dei controlli osservabili che puoi eseguire o dichiarare bloccati.

Serve a distinguere cio' che hai provato da cio' che resta ipotesi o blocco dichiarato.

L'output atteso e' una tabella con caso, azione, risultato atteso, esito e note.

Non scrivere solo "testato" o "funziona": indica cosa hai fatto e cosa hai visto.

## Contesto

Branch / PR:

```txt
l08-create-ticket-backend-skeleton
```

Slice:

```txt
Backend skeleton minimo per create ticket da richiesta supporto.

Lo slice implementa POST /api/tickets senza auth, senza UI, senza allegati, senza notifiche, senza dashboard e senza migration.

Per questo primo slice il payload valido contiene solo title e description.
I campi generati lato server sono id, status, source, createdAt e updatedAt.
```

## Verifiche

| Caso | Azione | Risultato atteso | Esito | Note |
| --- | --- | --- | --- | --- |
| Caso valido | Eseguita richiesta `POST http://127.0.0.1:3001/api/tickets` da Postman con body JSON `{ "title": "Problema accesso", "description": "Richiesta arrivata dal supporto" }` | La rotta risponde `201 Created` e restituisce il ticket creato con `id`, `title`, `description`, `status: "open"`, `source: "support"`, `createdAt`, `updatedAt` | pass | Il ticket viene creato in memoria e la sorgente viene impostata lato server come `support` |
| Campo richiesto mancante | Eseguita richiesta `POST /api/tickets` con body JSON `{ "title": "", "description": "Richiesta arrivata dal supporto" }` | La rotta risponde `400 Bad Request` con errore `INVALID_TITLE` | pass | Il titolo vuoto viene rifiutato |
| Campo richiesto mancante | Eseguita richiesta `POST /api/tickets` con body JSON `{ "title": "Problema accesso", "description": "" }` | La rotta risponde `400 Bad Request` con errore `INVALID_DESCRIPTION` | pass | La descrizione vuota viene rifiutata |
| Valore non ammesso | Eseguita richiesta `POST /api/tickets` con body JSON `{ "title": "Problema accesso", "description": "Richiesta arrivata dal supporto", "priority": "urgent" }` | La rotta risponde `400 Bad Request` con errore `INVALID_FIELD` | pass | In questo slice `priority` è fuori contratto e viene rifiutata come campo extra |
| Valore non ammesso | Eseguita richiesta `POST /api/tickets` con body JSON `{ "title": "Problema accesso", "description": "Richiesta arrivata dal supporto", "attachments": [] }` | La rotta risponde `400 Bad Request` con errore `INVALID_FIELD` | pass | Gli allegati sono fuori scope e vengono rifiutati |
| Regressione minima | Eseguita richiesta `GET http://127.0.0.1:3001/api/tickets` da Postman | La rotta continua a rispondere `200 OK` e restituisce i ticket aperti | pass | Il comportamento precedente di `GET /api/tickets` resta funzionante |
| Regressione minima | Eseguita una nuova richiesta `GET /api/tickets` dopo il POST valido | La lista restituita contiene anche il nuovo ticket creato | pass | Confermato che il ticket creato con POST viene aggiunto in memoria ed è visibile tra i ticket aperti |

## Lettura Del Diff

| Domanda | Risposta |
| --- | --- |
| Quali file sono cambiati? | server/index.js |
| Erano previsti dalla mappa L07? | si |
| C'e' una modifica inattesa? | no |
| Il contract resta rispettato? | si |

## Blocchi

Nessun blocco rilevato durante la verifica manuale.

## Evidenza

- comando eseguito, se presente: npm run start
- screenshot o nota manuale: verifica manuale eseguita in Postman.
    Endpoint verificati:
    - GET http://127.0.0.1:3001/api/tickets
    - POST http://127.0.0.1:3001/api/tickets
- log non sensibile: server avviato su http://127.0.0.1:3001
