# Piano Di Verifica Manuale (Manual Test Plan) - Create Ticket

## Prima Di Compilare

Un piano di verifica manuale e' la lista dei controlli osservabili che puoi eseguire o dichiarare bloccati.

Serve a distinguere cio' che hai provato da cio' che resta ipotesi o blocco dichiarato.

L'output atteso e' una tabella con caso, azione, risultato atteso, esito e note.

Non scrivere solo "testato" o "funziona": indica cosa hai fatto e cosa hai visto.

## Contesto

Branch / PR:

```txt
[branch o link]
```

Slice:

```txt
[descrivi il primo slice]
```

## Verifiche

| Caso | Azione | Risultato atteso | Esito | Note |
| --- | --- | --- | --- | --- |
| Caso valido | [azione] | [risultato] | pass / fail / bloccato | [nota] |
| Campo richiesto mancante | [azione] | [errore atteso] | pass / fail / bloccato | [nota] |
| Valore non ammesso | [azione] | [errore atteso] | pass / fail / bloccato | [nota] |
| Regressione minima | [azione] | [comportamento precedente resta ok] | pass / fail / bloccato | [nota] |

## Lettura Del Diff

| Domanda | Risposta |
| --- | --- |
| Quali file sono cambiati? | [file] |
| Erano previsti dalla mappa L07? | si / no / in parte |
| C'e' una modifica inattesa? | no / si: [spiega] |
| Il contract resta rispettato? | si / no / non verificato |

## Blocchi

Se non puoi verificare, scrivi:

```txt
Non verificato perche': [motivo concreto]
Prossimo passo minimo: [azione]
```

## Evidenza

- comando eseguito, se presente: [comando]
- screenshot o nota manuale: [riferimento]
- log non sensibile: [riferimento]