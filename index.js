import express from 'express';
import handlebars from 'express-hbs';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars.express4({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: [path.join(__dirname, '/views/partials')],
    extname: '.hbs',
  })
);

app.use(express.static('public'));
app
  .get('/', (_, res) => {
    res.render('main', { layout: 'index' });
  })
  .get('/signin', (_, res) => {
    res.render('main', { layout: 'signin' });
  })
  .get('/signup', (_, res) => {
    res.render('main', { layout: 'signup' });
  })
  .get('/chats', (_, res) => {
    res.render('main', { layout: 'chats' });
  })
  .get('/profile', (_, res) => {
    res.render('main', { layout: 'profile' });
  })
  .get('/404', (_, res) => {
    res.render('main', { layout: '404' });
  })
  .get('/server-error', (_, res) => {
    res.render('main', { layout: 'server-error' });
  });

app.listen(port, () => console.log(`App listening to port ${port}`));
