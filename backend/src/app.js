const path = require('path');

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const routes = require('./routes/v1');

const {
  notFound,
  errorHandler
} = require('./middleware/errorMiddleware');

const app = express();

/* --------------------------------------------------
   Security
-------------------------------------------------- */

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: 'cross-origin'
    }
  })
);

/* --------------------------------------------------
   CORS
-------------------------------------------------- */

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN
      ? process.env.CLIENT_ORIGIN.split(',')
      : '*'
  })
);

/* --------------------------------------------------
   Body Parser
-------------------------------------------------- */

app.use(express.json({ limit: '1mb' }));

/* --------------------------------------------------
   Logging
-------------------------------------------------- */

app.use(morgan('dev'));

/* --------------------------------------------------
   Backend public files
-------------------------------------------------- */

app.use(
  express.static(
    path.join(__dirname, '..', 'public'),
    {
      maxAge: '1d'
    }
  )
);

/* --------------------------------------------------
   Airbnb Images
   Images are stored in:
   frontend/public/images/
-------------------------------------------------- */

app.use(
  '/images',
  express.static(
    path.join(
      __dirname,
      '..',
      '..',
      'frontend',
      'public',
      'images'
    ),
    {
      maxAge: '1d'
    }
  )
);

/* --------------------------------------------------
   API Rate Limiting
-------------------------------------------------- */

app.use(
  '/api/v1',
  rateLimit({
    windowMs: 60 * 1000,
    limit: 120,
    standardHeaders: true,
    legacyHeaders: false
  })
);

/* --------------------------------------------------
   API Routes
-------------------------------------------------- */

app.use('/api/v1', routes);

/* --------------------------------------------------
   Error Handling
-------------------------------------------------- */

app.use(notFound);

app.use(errorHandler);

module.exports = app;