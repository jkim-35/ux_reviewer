// Minimal backend for the AI UX Reviewer prototype.
//
// Serves the existing Design Components frontend (project/) as static files
// and exposes the mocked API. Nothing here talks to Anthropic yet — see
// server/routes/review.js for where that will plug in later.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import reviewRouter from './routes/review.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_DIR = path.join(__dirname, '..', 'project');
const PORT = process.env.PORT || 3000;

const app = express();

// Screenshots travel as base64 data URLs in the request body, so the default
// 100kb JSON limit is far too small. Uploads are uncapped in count, so allow a
// generous body for large journeys.
app.use(express.json({ limit: '150mb' }));

app.use('/api/review', reviewRouter);

// The frontend is a static Design Component file — no build step, no bundler.
app.use(express.static(PROJECT_DIR, { index: 'AI UX Reviewer v2.dc.html' }));

app.listen(PORT, () => {
  console.log(`AI UX Reviewer running at http://localhost:${PORT}`);
});
