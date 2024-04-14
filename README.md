Angular Version 17.1.3.


Rapide template d'exemple pour fetch de la data sur une API gratuite (no-headers) et la faire descendre dans le composant enfant.

Main.ts display app.component
app.component display app.parent qui a souscrit au service api-call
depuis le template html app.parent transmet à app.enfant la data
app.enfant recoit l'input et peux le display dans son template ou le traiter sans display

```
ng serve
```
