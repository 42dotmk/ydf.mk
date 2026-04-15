# Strapi Blog CMS

Minimal Strapi 5 CMS for public blog content.

## Run locally

```bash
npm install
npm run develop
```

Open http://localhost:1337/admin.

## Public API

Use these endpoints without a token after enabling Public read permissions in Users & Permissions:

```text
/api/blog-posts?populate=*
/api/blog-posts/:documentId?populate=*
/api/categories
/api/tags
/api/authors
```

## Notes

- SQLite is used for local development by default.
- Public API access is read-only.
- The Users & Permissions plugin is required for the public role.
# ydf-strapi
