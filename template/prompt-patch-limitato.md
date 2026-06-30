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
- issue: [link o testo]
- contract sketch: [link o testo]
- data sketch: [link o testo]
- mappa dei punti di intervento: [link o testo]

Applica solo il primo slice approvato:
[descrivi lo slice]

File o aree ammesse:
- [file/area]
- [file/area]

File o aree vietate:
- [file/area]
- [file/area]

Non aggiungere:
- auth;
- allegati;
- notifiche;
- owner avanzato;
- dashboard;
- migration;
- redesign;
- refactor generale.

Prima di modificare, conferma:
- task;
- file che toccherai;
- cosa resta fuori scope;
- verifica manuale proposta.

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
[scrivi la verifica manuale minima da eseguire nel lab]
```

## Note

- Non chiedere feature completa.
- Non chiedere di "sistemare tutto".
- Non autorizzare file non verificati.