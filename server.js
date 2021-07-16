const path = require('path');
const express = require('express');
const app = express();
const port = 8080;
const { createProxyMiddleware } = require('http-proxy-middleware');

const cors = require('cors');
app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': true
}));

let customerApiProxyOptions = {
  target: 'http://gateway.fedev.10.19.2.21.nip.io:30862',
  // port: 30862,
  changeOrigin: true,
  pathRewrite: {
    '^/customers-api': `/`,
  },
  logLevel: 'debug',
  secure: false,
};

const customerApiProxy = createProxyMiddleware(customerApiProxyOptions);

let userApiProxyOptions = {
  target: 'http://reqres.in/api',
  changeOrigin: true,
  pathRewrite: {
    '^/users-api': `/`,
  },
  logLevel: 'debug',
  secure: false,
};

const userApiProxy = createProxyMiddleware(userApiProxyOptions);

// app.use(cors());

app.use(express.static(path.join(__dirname, '/dist')));

app.use('/customers-api/', customerApiProxy);
app.use('/users-api/', userApiProxy);
// app.use('/customers/', clusterApiProxy, () => {
//   console.log('HITTING THE /CUSTOMERS ENDPOINT MIDDLEWARE');
// });

// app.post('/users', testApiProxy, (req, res) => {
//   console.log('/user');
//   res.json({foo: 'bar'});
// });


app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
