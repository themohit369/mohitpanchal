# Preview Run Doc

## Prerequisites

- Node.js (already installed)
- Dependencies already in `node_modules/` (no install needed)

## How to reproduce artifacts

No `.env.local` or build artifacts needed. The site runs with defaults.

## How to run the server

```bash
cd /Users/mohitpanchal/Projects/mohitpanchal
./node_modules/.bin/next dev -p 3000
```

## Notes

- Port 3000 was already occupied by an existing `next dev` process (PID 93683).
- If port 3000 is free, use `./node_modules/.bin/next dev -p 3000`.
- If port 3000 is in use, check the log: `.next/dev/logs/next-development.log`.
