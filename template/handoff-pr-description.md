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
[descrivi in 2-3 righe il primo slice avviato]
```

## Issue

- Issue collegata: [link o riferimento]

## Scope

Incluso:

- [cosa e' incluso]
- [cosa e' incluso]

Fuori scope:

- auth;
- allegati;
- notifiche;
- owner avanzato;
- dashboard;
- migration;
- UI completa, se non inclusa nello slice;
- refactor generale.

## File Toccati

| File | Perche' e' stato toccato |
| --- | --- |
| [file] | [motivo] |
| [file] | [motivo] |

## Gate Prima Della Patch

Il tool ha confermato prima di modificare:

- [ ] task;
- [ ] file da toccare;
- [ ] file da non toccare;
- [ ] verifica manuale proposta;
- [ ] quando fermarsi.

## Verifica

- [ ] Caso valido provato o dichiarato non ancora eseguibile.
- [ ] Caso invalido previsto o bloccato con motivo.
- [ ] Comportamento esistente non intenzionalmente cambiato.

## Output AI

| Output | Decisione |
| --- | --- |
| Piano | accettato / modificato / rifiutato |
| Patch | accettata / modificata / rifiutata |
| Review | accettata / modificata / rifiutata |

## Residuo

- [cosa resta da fare]
- [cosa serve verificare in L09-L12]

## Rischio Residuo

- [rischio o blocco ancora aperto]