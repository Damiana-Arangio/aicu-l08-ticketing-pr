# Review Note - Create Ticket

## Prima Di Compilare

Una review note e' un controllo separato dal builder.

Serve a fare controllo qualita' sul branch/PR: file cambiati, contract, diff, verifica e residuo.

L'output atteso e' una decisione: OK, da correggere, oppure fermarsi e chiedere contesto.

Non usarla per proporre nuove feature, redesign o refactor generale.

## Input Review

- Issue: [link o riferimento]
- Contract: [link o riferimento]
- Mappa dei punti di intervento: [link o riferimento]
- Piano patch: [link o riferimento]
- Diff / branch / PR: [link o riferimento]

## Checklist

| Controllo | Esito | Nota |
| --- | --- | --- |
| File toccati nello scope | ok / problema | [nota] |
| Diff letto e comprensibile | ok / problema | [nota] |
| Contract rispettato | ok / problema | [nota] |
| Fuori scope / non-obiettivi (non-goals) rispettati | ok / problema | [nota] |
| Verifica manuale presente | ok / problema | [nota] |
| Feature extra assenti | ok / problema | [nota] |
| Residuo chiaro | ok / problema | [nota] |

## Findings

- [problema trovato oppure "Nessun problema trovato nello scope della review"]

## Decisione

Scegli una:

- OK per continuare nel Modulo 3.
- Da correggere prima di continuare.
- Fermarsi e chiedere contesto.

Motivo:

```txt
[spiega in 2-3 righe]
```

## Follow-Up Minimo

- [prossimo passo piccolo]
