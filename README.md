# LedgerLift

Site marketing développé avec Next.js 16 App Router, Tailwind CSS et Sanity CMS.

## Objectif

Ce site est conçu pour présenter une offre de comptabilité professionnelle pour petites entreprises et indépendants, avec toutes les pages essentielles : accueil, services, à propos, FAQ, contact, blog et article détaillé.

## Démarrage

Installez les dépendances puis lancez le serveur de développement :

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Structure principale

- `app/` : pages de l’application avec App Router
- `components/` : composants UI réutilisables
- `lib/` : intégration Sanity, requêtes et données de secours
- `sanity/` : configuration et schémas CMS
- `app/api/contact/route.ts` : API route pour le formulaire de contact

## Sanity CMS

La configuration Sanity est fournie dans `sanity/sanity.config.ts`. Vous pouvez déployer un studio Sanity local et ajouter du contenu pour les services, articles, FAQ et témoignages.

## Environnement

Copiez le modèle d’environnement :

```bash
cp .env.local.example .env.local
```

Puis remplacez les valeurs avec votre `NEXT_PUBLIC_SANITY_PROJECT_ID` et `NEXT_PUBLIC_SANITY_DATASET`.

## Optimisation

- Pages générées côté serveur avec App Router
- Requêtes CMS gérées via `next-sanity`
- Composants réutilisables pour une architecture scalable
- SEO metadata pour chaque page
- Contact form via route API
