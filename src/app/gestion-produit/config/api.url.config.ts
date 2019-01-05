
const BASE = 'http://localhost';
const SEP = ':';
const PORT = '8080';
const PATH = '/api';

export const API_URLS  = {
  PRODUITS_URL : BASE + SEP + PORT + PATH + '/produit',
  USER_URL : BASE + SEP + PORT + PATH + '/user',
  USER_CRUD_URL: BASE + SEP + PORT + '/crud_user'
};

/* on peut ameliorer ca
export const API_URLS  = {
   PRODUITS_URL : 'http://localhost:8080/api/produit',
   USER_URL : 'http://localhost:8080/api/user',
   USER_CRUD_URL: 'http://localhost:8080/crud_user'
};
*/
