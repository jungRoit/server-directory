import { Router } from 'express';

import BadRequest from '../error/BadRequest';
import {getFilesDetailsFromDirectory} from '../service/fileSystem';

const directoryController = Router();

directoryController.get('/', async (req, res, next) => {
	try {
		if(!req.query.directory) {
			throw new BadRequest({
				message:'Missing Required Query Param: directory',
				details: 'The Request must contain the directory in the query parameter.'
			});
		}

		const directory = req.query.directory;

		const directoryDetails = await getFilesDetailsFromDirectory(directory);

		res.status(200).json({directory,details:directoryDetails});
	} catch (error) {
		next(error);
	}
})
export default directoryController;
