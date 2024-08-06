var express = require('express');
var router = express.Router();
var controllerNota = require('../controller/controllerNota');

/* GET Cria Nota */
router.get('/cria', controllerNota.cria_get);

/* POST Cria Nota */
router.post('/cria', controllerNota.cria_post);

/* POST Cria Nota Teste*/
router.get('/cria/teste', controllerNota.cria_teste);

/* GET Consulta Nota. */
router.get('/consulta/:chave_nota', controllerNota.consulta);

/* GET Altera Nota */
router.get('/altera/:chave_nota', controllerNota.altera_get);

/* POST Atualiza Nota */
router.post('/altera/:chave_nota', controllerNota.altera_post);

/* GET Exclui Nota. */
router.get('/deleta/:chave_nota', controllerNota.deleta);

/* GET Altera status da Nota para lida. */
router.get('/lida/:chave_nota', controllerNota.lida);

/* GET Altera status da Nota para não lida. */
router.get('/naolida/:chave_nota', controllerNota.naolida);


module.exports = router;