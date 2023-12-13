# Exemple de projet de CountDown

Dans un but pédagogique et d’entraînement, ce projet est partie sur la problématique de proposer un composant de compte à rebours.


* Étant en décembre je suis partie sur un compte à rebours avant Noël.
  * [Voir le composant](./src/CountDown.tsx)


## Ce que j'ai pu ajouter que je n'avais pas encore testé :
* Ajout de notification dans le navigateur
  * [Voir le hook](./src/useNotification.tsx)
* Ajout d'un script (Github action) pour envoyer des notifications par SMS et Email grâce à l'api de SendGrid (il faudrait passer par une api et retenir les coordonnées)
  * [Voir le workflow](./.github/workflows/send-notifications.yml)

* Threejs : Ma première animation en threejs
  * [Voir le hook](./src/Clock.tsx)
