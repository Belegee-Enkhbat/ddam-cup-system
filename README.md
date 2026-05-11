# DDAM E-Sports Snake Draft System

Web application for running a live snake draft across shared leader/admin accounts plus a public spectator board:

- `1` administrator account
- `8` team leader accounts

Authenticated users see the same draft state in real time. The administrator can manage the event flow, only the active team leader can make a pick, and `/spectator` exposes a public board-first live view without login.

## What This System Does

- Runs a shared snake draft board for DDAM members
- Shows leader and member profile images
- Uses DDAM CUP 2026 skill check scores on a `0-10` scale across 8 sports
- Keeps `Jumping Rope` at `0` for all members until survey data is collected
- Lets leaders search and filter available members
- Ranks teams by overall and sport-specific strength
- Allows the administrator to:
  - broadcast announcements to all logged-in screens
  - edit the opening draft order before Pick `#1`
  - undo the latest pick if a wrong member was selected
  - download the final draft result as an Excel workbook after the last pick
- Publishes a sanitized `publicBoard` snapshot for `/spectator`

## Sports

- `basketball`
- `volleyball`
- `tennis`
- `foosball`
- `jumpingRope`
- `cornhole`
- `darts`
- `chess`

## Tech Stack

- `React 19`
- `TypeScript`
- `Vite`
- `Express`
- `Firebase Realtime Database`
- `Tailwind CSS`

## Local Run

### Prerequisites

- `Node.js 20+`

### Install

```bash
npm install
```

### Start the App

```bash
npm run dev
```

This starts both services:

- Frontend: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:3001](http://localhost:3001)

## Demo Accounts

### Administrator

- Username: `admin`
- Password: `C7mQ-P9rX-2kLb-V6tN`

### Team Leaders

- `myagmardash / H4sD-Y8qM-7vKx-R2pT`
- `naranbayar / J6wN-B3tQ-9mRx-K5dV`
- `erkhembileg / L2pX-C8vM-4qTs-H7nK`
- `bagabandi / R5kT-M9dW-3xQp-V8sN`
- `temuulen / T8nQ-H2vL-6mKx-P4rD`
- `itgel / V3qM-K7tR-5dXp-N8wH`
- `khosbayar / X9dP-R4mT-2vQk-L6sN`
- `bilegt / Z5mK-T8qH-7rDx-P3vL`

### Shared Viewer

- `viewer / viewer-2026`

### Public Spectator Board

- `/spectator`
- No login required

## Role Rules

### Administrator

- Can log in and monitor the whole draft
- Can send announcements to all users
- Can reorder the opening draft sequence before the first pick
- Can undo the latest pick
- Can download the completed draft result as `.xlsx`
- Cannot draft members

### Public Spectator

- Can open `/spectator` without logging in
- Can watch live team boards and drafted members
- Cannot see the remaining candidate pool
- Cannot mutate draft state

### Team Leaders

- Can see the same live board as everyone else
- Can draft only when it is their team's turn
- Cannot edit draft order
- Cannot undo picks
- Cannot change global draft state outside their own turn

## Project Scripts

- `npm run dev`  
  Starts the frontend and API together
- `npm run dev:app`  
  Starts only the Vite frontend
- `npm run dev:server`  
  Starts only the Express API server
- `npm run build`  
  Builds the frontend for production
- `npm run lint`  
  Runs TypeScript type checking

## Data and Assets

### Member Data

Generated member/team data is stored in:

- [`src/ddamData.ts`](src/ddamData.ts)

### Gender Review Source

Manual gender review data is stored locally in:

- `/.data/gender-review.json`

That file is used when regenerating [`src/ddamData.ts`](src/ddamData.ts).

### Manual Member Sync Overrides

Repo-managed participant overrides are stored in:

- [`scripts/member_sync_overrides.json`](scripts/member_sync_overrides.json)

Use this file when a member must be forced into or out of the draft data regardless of the current survey workbook response.

### Source Spreadsheet Outputs

Prepared spreadsheet outputs are stored outside the app repo under:

- `/Users/powerly/Desktop/Draft_System/output/spreadsheet`

### App Images

Web-ready member images are stored in:

- [`public/member-images`](public/member-images)

## Refreshing Member Data

If the member manifest or prepared image set changes, regenerate the app data with:

```bash
python3 scripts/sync_ddam_members.py
```

This updates:

- generated team/member data in [`src/ddamData.ts`](src/ddamData.ts)
- optimized web images in [`public/member-images`](public/member-images)

Gender values are regenerated from `/.data/gender-review.json`, manual participant overrides are applied from [`scripts/member_sync_overrides.json`](scripts/member_sync_overrides.json), and all 8 leaders are seeded as `male`.

## Persistence

Draft state is stored in Firebase Realtime Database under `draft/`:

- `draft/runtime`
- `draft/publicBoard`

The deployed backend treats Firebase as the single source of truth. Authenticated screens read `/api/draft-state`, while the public spectator board reads `/api/public-board` and can subscribe directly to `draft/publicBoard`.

## Firebase Rules

Apply [`firebase-database.rules.json`](firebase-database.rules.json) so:

- `draft/publicBoard` is public read
- `draft/runtime` is not public read
- all client writes are denied

- `/.data/draft.sqlite`

That file is ignored by Git and should not be committed.

## Main Files

- [`src/App.tsx`](src/App.tsx)  
  Main application UI
- [`server/index.ts`](server/index.ts)  
  Shared draft API, auth, announcements, order control, undo logic
- [`src/draftShared.ts`](src/draftShared.ts)  
  Shared client/server types
- [`scripts/sync_ddam_members.py`](scripts/sync_ddam_members.py)  
  Regenerates members, teams, real skill-check scores, and images
- [`scripts/test-nine-accounts.ts`](scripts/test-nine-accounts.ts)  
  Multi-account integration test

## Notes

- Current sport scores are sourced from `DDAM CUP 2026 - Skill check Form（回答）.xlsx`
- Members who answered `no` to participation or are missing from the skill check workbook are excluded from the draft pool
- Profile images are stored in optimized web format for repository sharing and deployment
