# Handoff / PR Description - Create Ticket

## Prima Di Compilare

Un handoff / PR description e' la sintesi tecnica dello stato del lavoro.

Serve a far capire a un reviewer:

- perche' esiste il branch o la PR;
- cosa include il primo slice;
- quale piano e' stato autorizzato;
- cosa e' stato verificato;
- cosa resta fuori o va ripreso.

Non usarlo per promettere la feature completa o nascondere blocchi.

## Summary

```txt
Avviato un primo slice backend minimo per la creazione di ticket da richiesta supporto.

La patch implementa POST /api/tickets senza completare una feature full-stack.
Il payload valido per questo slice contiene solo title e description; source, status, id e timestamp vengono generati lato server.
```

## Issue

- Issue collegata: lavoro-precedente/issue-create-ticket.md

## Scope

Incluso:

- implementazione minima di POST /api/tickets;
- validazione di title obbligatorio e non vuoto;
- validazione di description obbligatoria e non vuota;
- rifiuto dei campi fuori contratto, inclusi priority e attachments;
- aggiunta del nuovo ticket all'array `tickets`, senza persistenza su file o database;
- generazione lato server di id, createdAt, updatedAt, source: "support" e status: "open";
- mantenimento del comportamento esistente di GET /api/tickets.

Fuori scope:

- auth;
- allegati;
- notifiche;
- owner avanzato;
- dashboard;
- migration;
- UI completa;
- refactor generale.

## File Toccati

| `server/index.js` | Per sostituire la risposta `501 NOT_IMPLEMENTED` di `POST /api/tickets` con il primo skeleton backend minimo per create ticket |

## Gate Prima Della Patch

Il tool ha confermato prima di modificare:

- [si] task;
- [si] file da toccare;
- [si] file da non toccare;
- [si] verifica manuale proposta;
- [si] quando fermarsi.

## Verifica

- [si] Caso valido provato o dichiarato non ancora eseguibile.
- [si] Caso invalido previsto o bloccato con motivo.
- [si] Comportamento esistente non intenzionalmente cambiato.

## Output AI

| Output | Decisione |
| --- | --- |
| Piano | modificato |
| Patch | accettata |
| Review | da completare |


## Rischio Residuo

- Il ticket viene aggiunto all'array al momento della richiesta, quindi risulta visibile con `GET /api/tickets`, ma non persiste dopo il riavvio del server.
