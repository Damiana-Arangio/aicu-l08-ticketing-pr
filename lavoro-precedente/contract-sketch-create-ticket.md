# Contratto Iniziale (Contract Sketch) - Create Ticket

## Prima Di Compilare

Un contratto iniziale (contract sketch) e' una descrizione leggera di input, output e risposte attese.

Serve a rendere verificabile `create ticket` prima di chiedere codice all'AI.

Compila solo la superficie minima:

- cosa entra;
- cosa esce;
- cosa viene rifiutato;
- quale errore ti aspetti.

Non trasformarlo in una specifica API completa, uno schema di un database o un piano di una patch.

Quando compili, ogni esempio deve rispondere (almeno) a tre domande:

- perche' questo input e' valido o invalido?
- quale risposta mi aspetto?
- quale parte della issue o del fuori scope giustifica la scelta?

## Request

```txt
Serve creare ticket dal supporto.
```

## Boundary Map

| Superficie | Cosa riguarda | Nota |
| --- | --- | --- |
| UI | Il team supporto inserisce titolo e descrizione del ticket | Non include login, ruoli o permessi |
| API / azione | Chiamata POST per creare un nuovo ticket: il server riceve titolo e descrizione e restituisce una risposta di successo o errore | La chiamata reale sarà verificata in L07 |
| Dati | Ticket composto da `title` e `description` inseriti dal team supporto, `id` e `createdAt` generati dal sistema | I dettagli sui dati vengono chiariti nel data sketch |
| Verifica | Creo un ticket valido, controllo che venga creato con successo e poi verifico che compaia nell’elenco; provo anche a creare un ticket con campi vuoti e controllo che venga rifiutato | Verifica manuale minima |


## Action

Per questo slice, `create ticket` significa:

```txt
Permettere al team supporto di inserire titolo e descrizione per creare un nuovo ticket, che deve essere registrato nel sistema di ticketing e visibile nell’elenco dopo la creazione.
```

## Payload Valido

```json
{
  "title": "Problema caricamento ticket",
  "description": "Il team supporto segnala che l'elenco dei ticket non si carica correttamente."
}
```

Perche' e' valido:
- contiene i campi minimi richiesti per questo slice, compilati con valori non vuoti;
- non aggiunge campi fuori scope

## Risposta Attesa Di Successo

```txt
201 CREATED - Ticket creato con successo
```

Campi attesi:

- id generato dal sistema
- title confermato
- description confermata
- createdAt generato dal sistema

## Payload Invalido 1

```json
{ 
    "title": "", 
    "description": "Il team supporto segnala che l'elenco dei ticket non si carica correttamente." 
}
```

Motivo del rifiuto:

```txt
Il campo "title" è richiesto e non può essere vuoto.
```

Risposta attesa:

```txt
400 Bad Request - Il campo "title" non può essere vuoto.
```

## Payload Invalido 2

```json
{ 
    "title": "Problema caricamento ticket", 
    "description": "Il team supporto segnala che l'elenco dei ticket non si carica correttamente.", 
    "attachments": ["screenshot.png"]
}
```

Motivo del rifiuto:

```txt
"attachments" è un campo aggiuntivo non previsto per questo slice.
```

Risposta attesa:

```txt
400 Bad Request - Il campo "attachments" non è ammesso.
```

## Error Model Minimo

| Caso | Motivo | Risposta attesa |
| --- | --- | --- |
| Campo richiesto mancante o vuoto | `title` o `description` non possono essere vuoti |  400 Bad Request con errore leggibile sul campo mancante o vuoto |
| Valore fuori contratto | `attachments` è un campo non ammesso dal contratto minimo | 400 Bad Request con errore leggibile sul campo `attachments` |

## Non-Goals Confermati

- Autenticazione, ruoli e permessi.
- Redesign.
- Refactoring generale.
- Allegati al ticket.
- Dashboard o gestione avanzata dei ticket.
- Specifica API completa.
- Database schema o migration.
