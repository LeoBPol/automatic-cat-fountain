# Fontaine à eau pour chat

## Description de l'outil

### Consommation en eau du chat
L'objectif du site web est d'offrir au client une vision sur la consommation en eau de son chat. 
En effet, le client pourra suivre le nombre d'activation de la fontaine par jour 
ainsi que le nombre de fois où une alerte "Manque d'eau" est levée.

### Gestion des addresses mails
Au delà du suivi de la consommation d'eau du chat, le propriétaire pourra gérer les adresses mails
qui recevront un rappel lorsque la fontaine aura un maque d'eau.

## Traitement des données et architecture
Les données sont stockées dans une base de données MongoDB en ligne. À l'avenir cette base de données pourrait être stockées sur la raspberry.
Les données sont insérées à chaque activation via la raspberry et des requêtes python directement adressées à la base de donnée. 
Le site web peut ensuite traiter ces données en les affichant sous forme de graphiques.
La fontaine et le site communique donc uniquement à travers la base de donnée. 
