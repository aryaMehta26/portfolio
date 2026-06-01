# Arya OS Portfolio

This portfolio is intentionally structured as a systems console instead of a standard personal site.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Experience structure

- `EntryHero`: cinematic entry layer and signal links
- `ManifestoRail`: identity and proof section
- `OperatingModel`: interactive decision-pattern section
- `CaseFiles`: curated flagship project stories
- `BuildGraph`: capability lanes instead of a plain timeline
- `ProjectArchive`: searchable GitHub-backed archive
- `ContactPaths`: different CTAs for recruiters, builders, and proof-seekers

## Code architecture

- `src/app/page.tsx`
  Orchestrates the full homepage experience
- `src/components/system/*`
  Houses the custom portfolio modules
- `src/data/portfolio.ts`
  Curated narrative content and fallback archive data
- `src/lib/github.ts`
  GitHub archive fetch and normalization logic
- `src/app/api/github/route.ts`
  Live repo archive endpoint with fallback behavior

## External data

- `src/app/api/medium/route.ts` reads Medium RSS
- `src/app/api/connections/route.ts` requires `NOTION_API_KEY` and `NOTION_CONNECTIONS_DB_ID`
