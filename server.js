const path = require('path');
const express = require('express');
const app = express();
const port = 8080;
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, '/dist')));

let clusterApiProxyOptions = {
  target: 'http://gateway.fedev.10.19.2.21.nip.io',
  port: 30862,
  changeOrigin: true,
  pathRewrite: {
    '^/customers': `/customers`,
  },
  logLevel: 'debug',
  secure: false,
};

const clusterApiProxy = createProxyMiddleware(clusterApiProxyOptions);

app.use('/customers/', clusterApiProxy, () => {
  console.log('HITTING THE /CUSTOMERS ENDPOINT MIDDLEWARE');
});

let testApiProxyOptions = {
  target: 'http://reqres.in/api',
  changeOrigin: true,
  pathRewrite: {
    '^/users': `/users`,
  },
  logLevel: 'debug',
  secure: false,
};

const testApiProxy = createProxyMiddleware(testApiProxyOptions);
app.post('/users', testApiProxy, (req, res) => {
  console.log('/user');
  res.json({foo: 'bar'});
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
