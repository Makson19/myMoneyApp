// 02 - Neste arquivo, vamos fazer a conexão com o nosso banco de dados.
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const env = require('../.env')

module.exports = mongoose.connect(env.url, { 
    useNewUrlParser: true
 });

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
