# Issue: Create ticket with validation

## Request

```txt
Serve creare ticket dal supporto.
```

## Fatti (Facts)
- L’app di partenza è una piccola applicazione di ticketing.
- In questa issue, "team supporto" indica la persona che crea il ticket.

## Assunzioni (Assumptions)
- Il team supporto può compilare un’apposita sezione con le informazioni necessarie per creare un nuovo ticket.
- Le informazioni minime richieste sono titolo e descrizione.
- Dopo una creazione valida, il nuovo ticket viene registrato nel sistema di ticketing e mostrato in un elenco.

## Domande Aperte (Questions)
- Oltre a titolo e descrizione, ci sono informazioni aggiuntive da chiarire per la creazione di un ticket?
- Quale messaggio mostrare quando titolo o descrizione sono vuoti?”

## Decisione (Decision)
Per questo slice, "creare ticket" significa:

```txt
Permettere al team supporto di creare un nuovo ticket tramite una sezione dedicata dell’applicazione, inserendo titolo e descrizione.
```

## Fuori Scope / Non-Obiettivi (Non-Goals)
- Autenticazione, ruoli e permessi
- Redesign
- Refactoring generale
- Allegati al ticket
- Dashboard o gestione avanzata dei ticket

## Criteri Di Accettazione (Acceptance Criteria)
1. Il team supporto può compilare titolo e descrizione e avviare la creazione di un nuovo ticket.
2. Se titolo e descrizione sono compilati con valori non vuoti, il ticket viene creato, registrato nel sistema di ticketing e mostrato nell’elenco.
3. Se titolo o descrizione sono vuoti, il ticket non viene creato.

## Piano Di Verifica Manuale (Manual Test Plan)
- Verifica valida: creo un nuovo ticket con titolo "Problema accesso" e descrizione "Il cliente non riesce ad accedere all’area riservata" e controllo che compaia nell’elenco.
- Verifica non valida: provo a creare un ticket lasciando titolo e descrizione vuoti e controllo che l’elenco resti invariato.

## Note Per L06

- Chiarire eventuali campi aggiuntivi oltre a titolo e descrizione.
- Chiarire quali dati vengono inseriti dal team supporto e quali vengono generati dal sistema.
