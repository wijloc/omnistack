import express from 'express';
import path from 'path';
import 'express-async-errors'
import './database/connection'
import errorHandler from './errors/handler';
import cors from 'cors';

import routes from './routes';

const app = express();

app
.use(express.json())
.use(routes)
.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
.use(errorHandler)
.use(cors())

//Rota = conjunto
//Recurso = usuário

//Métodos HTTP [get|post|put|delete]
//get = buscando uma informação
//post = criando uma informação nova
//put = editando uma informação
//delete = excluindo uma informação

//Parametros
//Query Params: http://localhost:3333/users?search=diego&otherparam=1
//Route Params: [delete|put] http://localhost:3333/users/1 (Identificar um recurso)
//Body: enviar dados que não caibam nos outros parametros, geralmente vindo de usuários
/*app.post('/users/:id', (request, response)=> {
    console.log(request.query)
    console.log(request.params);
    console.log(request.body);
    return response.json({message: 'hello world'})
})*/

app.listen(3333);

// Driver nativo: não possui abstração
// Query builder: escreve as query com js, um nivel a mais de abstração  ex.:knex.js => knex('users').select('*').where('name', 'Willain')
// ORM(Object Relational Mapping):  classe que simboliza uma tabela, sendo assim consegue retornar objetos

//MVC
//Model =  representação da tabela no banco, ou quase isso
//View = visualização
//Controller = logica das nossas rotas