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
| [file] | AI / repo / consegna | [cosa hai letto] | ammesso / dubbio / vietato |
| [file] | AI / repo / consegna | [cosa hai letto] | ammesso / dubbio / vietato |
| [file] | AI / repo / consegna | [cosa hai letto] | ammesso / dubbio / vietato |

## File Ammessi Per Il Primo Slice

- [file o area ammessa]
- [file o area ammessa]

## File Vietati O Fuori Scope

- [file o area da non toccare] - [motivo]
- [file o area da non toccare] - [motivo]
- [file o area da non toccare] - [motivo]

## Primo Slice Proposto

```txt
[descrivi il primo intervento reviewabile, non la feature completa]
```

## Perche' Questo Slice E' Piccolo

- [motivo 1]
- [motivo 2]

## Verifica Manuale Proposta

```txt
[azione minima, input, risultato atteso]
```

## Stop Condition

Fermarsi se:

- serve auth;
- serve migration;
- serve redesign;
- serve dashboard;
- serve toccare file non verificati;
- il tool propone piu' dello slice approvato.

## Domande Aperte Per L08

- [domanda 1]
- [domanda 2]