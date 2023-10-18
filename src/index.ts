import './loadEnvironment.js';
import express, {type Express, type Request, type Response} from 'express';

// Initialize express
const app: Express = express();
const port = process.env.HOST_PORT ?? '3000';

const listaAPI = {
	alumnes: ['Angulo Caballero, Alan Matthew', 'Argueta Navarrete, Nahomy Fernanda', 'Bautista Martin, Brian', 'Blay Estrada, Alex', 'Condal García, Pol',	Condal García, Pol	student
	Seleccionar 'Cortes Comellas, Oriol'	Cortes Comellas, Oriol	editingteacher
	Seleccionar 'Du Pre Peralta, Gerard'	Du Pre Peralta, Gerard	student
	Seleccionar 'Gàndara Sánchez, Jaume'	Gàndara Sánchez, Jaume	student
	Seleccionar 'Garrido Pintado, Albert'	Garrido Pintado, Albert	student
	Seleccionar 'Herrerias Cuscullola, Rafel'	Herrerias Cuscullola, Rafel	student
	Seleccionar 'Higueras Rubiño, Jaime'	Higueras Rubiño, Jaime	student
	Seleccionar 'Linares Vigo, Joan'	Linares Vigo, Joan	student
	Seleccionar 'Llamas Masdeu, Dídac'	Llamas Masdeu, Dídac	student
	Seleccionar 'Muñoz Valenzuela, Alejandro'	Muñoz Valenzuela, Alejandro	student
	Seleccionar 'Najarro García, Marc'	Najarro García, Marc	student
	Seleccionar 'Pallarés Sirvent, Quim'	Pallarés Sirvent, Quim	student
	Seleccionar 'Parra Raya, Óscar'	Parra Raya, Óscar	student
	Seleccionar 'Pascual González, Alejandro'	Pascual González, Alejandro	student
	Seleccionar 'Rodellar Martínez, Alberto'	Rodellar Martínez, Alberto	student
	Seleccionar 'Ros Puig, Manuel'	Ros Puig, Manuel	student'],
	ufs: []
}

// eslint-disable-next-line arrow-body-style
app.get('/', (req: Request, res: Response) => {
	return res.send({message: 'Hello World!'});
});

app.listen(process.env.HOST_PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});

export default app;
