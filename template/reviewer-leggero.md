# Reviewer Leggero

## Prima Di Compilare

Un reviewer leggero e' un prompt di controllo separato dal builder.

Serve a fare controllo qualita' su scope, contract, file, diff e verifica senza aggiungere nuove idee.

L'output atteso e' una lista breve di findings, verifiche mancanti e decisione finale.

Non chiedergli redesign, refactor o feature extra.

Usa questo prompt dopo aver ottenuto un piano o un diff nel lab.

```txt
Agisci da reviewer separato.
Leggi issue, contract sketch, mappa dei punti di intervento, piano patch e diff.

Cerca solo:
- file fuori scope;
- contract non rispettato;
- verifica manuale mancante;
- feature aggiunte non richieste;
- modifiche inattese nel diff;
- stop condition ignorata.

Non proporre nuove feature.
Non riscrivere il piano.
Non fare refactor.

Rispondi con queste sezioni:

## Findings
- [problemi trovati, con motivo]

## Verifiche Mancanti
- [verifiche mancanti o deboli]

## Decisione
- OK per procedere / Da correggere / Fermarsi e chiedere contesto

Se non trovi problemi, dichiaralo in `Findings`.
```

## Cosa Accettare

Accetta solo osservazioni su:

- scope;
- contract;
- file fuori piano;
- verifica;
- stop condition.

## Cosa Rifiutare

Rifiuta suggerimenti su:

- nuove feature;
- redesign;
- auth;
- allegati;
- dashboard;
- refactor generale;
- test suite completa non prevista.
