import './loadEnvironment.js';
import express, {type Express, type Request, type Response} from 'express';

// Initialize express
const app: Express = express();
const port = process.env.HOST_PORT ?? '3000';

const listaApi = {
	alumnes: ['Angulo Caballero, Alan Matthew', 'Argueta Navarrete, Nahomy Fernanda', 'Bautista Martin, Brian', 'Blay Estrada, Alex', 'Condal García, Pol',	'Cortes Comellas, Oriol', 'Du Pre Peralta, Gerard',	'Gàndara Sánchez, Jaume', 'Garrido Pintado, Albert',	 'Herrerias Cuscullola, Rafel', 'Higueras Rubiño, Jaime', 'Linares Vigo, Joan',	 'Llamas Masdeu, Dídac', 'Muñoz Valenzuela, Alejandro',	'Najarro García, Marc',	'Pallarés Sirvent, Quim', 'Parra Raya, Óscar', 'Pascual González, Alejandro', 'Rodellar Martínez, Alberto', 'Ros Puig, Manuel', 'Sánchez Erazo, Luis Mario', 'Sans Lleixà, Martí', 'Sanz Sanchez, Oscar', 'Simón Pérez, Kevin', 'Soto Gómez, Eugeni', 'Trujillo Albert, Pol', 'Trujillo Guadiamos, Victor Manuel'],
};

// eslint-disable-next-line arrow-body-style
app.get('/', (req: Request, res: Response) => {
	return res.send({message: 'Hello World!'});
});

app.get('/alumnos', (req: Request, res: Response) => {
	const nombres = listaApi.alumnes;
	res.json({alumnos: nombres});
});

app.get('/total-alumnos', (req: Request, res: Response) => {
	const totalAlumnos = listaApi.alumnes.length;
	res.json({total: totalAlumnos});
});

app.listen(process.env.HOST_PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});

export default app;
