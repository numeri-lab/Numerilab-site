# NumeriLab · React et Express

Node.js 22.12 ou ultérieur est nécessaire.

## Installation

Depuis ce dossier, installez les dépendances.

```sh
npm --prefix backend ci
npm --prefix frontend ci
```

## Développement

Dans un premier terminal, depuis ce dossier, lancez l’API et les médias.

```sh
npm --prefix backend run dev
```

Dans un second terminal, depuis le même dossier, lancez React.

```sh
npm --prefix frontend run dev
```

Ouvrez http://localhost:5173. Vite actualise les modifications du front. Le serveur Express utilise le port 8138. Arrêtez l’ancien serveur Python avec Ctrl+C s’il occupe ce port.

## Version compilée

```sh
npm --prefix frontend run build
npm --prefix backend start
```

Ouvrez http://127.0.0.1:8138. Arrêtez tout autre serveur utilisant ce port avant de lancer cette commande.

## Fichiers à modifier

- `frontend/src/pages/` contient une page React par rubrique.
- `frontend/src/components/` contient la navigation, la FAQ et le catalogue.
- `frontend/src/App.jsx` définit les routes et la structure des pages.
- `frontend/src/style.css` contient les styles.
- `frontend/src/data/equipe.json` contient les profils.
- `backend/data/formations.json` est le catalogue unique utilisé par l’API et le catalogue de secours intégré au front. Après modification, reconstruisez le front pour actualiser sa version de secours.
- `backend/src/routes/` et `backend/src/controllers/` contiennent l’API Express.
- `backend/uploads/` contient toutes les images et la plaquette. Les fichiers sont accessibles par `/uploads/nom-du-fichier`. Ajoutez les images de formations dans `backend/uploads/formations/`.

La compilation écrit dans `frontend/dist/`. Elle conserve les anciens fichiers de sortie et ne touche pas aux médias stockés dans `backend/uploads/`.

Les anciennes adresses en .html restent accessibles. Les anciennes adresses /media/ sont également prises en charge par Express.

La sauvegarde `avant-migration-express.tar.gz` conserve les sources et médias précédant la migration. Les dépendances et les fichiers compilés en sont exclus.
