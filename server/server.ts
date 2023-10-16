// dependencies
import express from 'express';
import next from 'next';
import https, { ServerOptions } from 'https';
import fs from 'fs';

const port = process.env.PORT || 6000;
const dev = process.env.NODE_ENV !== 'production';

const serverOptions: ServerOptions = {};

if (dev) {
  serverOptions.key = fs.readFileSync('.cert/key.pem', 'utf8');
  serverOptions.cert = fs.readFileSync('.cert/cert.pem', 'utf8');
  serverOptions.passphrase = 'cats';
}

// Tune next.js
const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();

// Tune server
const expressServer = express();

// expressServer.use(express.json({ extended: false }));
expressServer.use(express.urlencoded({ extended: false }));
expressServer.use(express.json());

// ----------
// ----------
// ----------

expressServer.all('*', (req, res) => {
  return handle(req, res);
});

// ----------
// ----------
// ----------

const start = async () => {
  try {
    // Prepare next.js
    await nextApp.prepare();
    console.log(`Next.js is ready`);
    // Start server

    if (dev) {
      https.createServer(serverOptions, expressServer).listen(port);
    } else {
      expressServer.listen(port);
    }

    console.log(`Server is ready on https://localhost:${port}`);
  } catch (err) {
    console.log('test');
    console.error(err);
    process.exit(1);
  }
};

start();

// ----------
// ----------
// ----------
