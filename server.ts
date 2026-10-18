import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.get('/api/instagram', async (_req, res) => {
    const accountId = process.env['INSTAGRAM_USER_ID'];
    const accessToken = process.env['INSTAGRAM_ACCESS_TOKEN'];

    if (!accountId || !accessToken) {
      res.set('Cache-Control', 'no-store').json([]);
      return;
    }

    try {
      const apiVersion = process.env['INSTAGRAM_GRAPH_API_VERSION'] || 'v23.0';
      const url = new URL(`https://graph.facebook.com/${apiVersion}/${accountId}/media`);
      url.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp');
      url.searchParams.set('limit', '4');
      url.searchParams.set('access_token', accessToken);

      const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!response.ok) {
        res.set('Cache-Control', 'no-store').json([]);
        return;
      }

      const result = await response.json() as { data?: unknown[] };
      res.set('Cache-Control', 'public, max-age=900').json(result.data?.slice(0, 4) ?? []);
    } catch {
      res.set('Cache-Control', 'no-store').json([]);
    }
  });

  // Serve static files from /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
