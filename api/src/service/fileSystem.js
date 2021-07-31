import { readDirectory,getFileDetails } from '../utils/files';
import BadRequest from '../error/BadRequest';

export const getFilesDetailsFromDirectory = async (directory) => {
	try {
		const files = await readDirectory(directory);
		const fileStats = await Promise.all(files.map(async file => {
			try {
				const stats = await getFileDetails(directory,file);
				const fileSize = stats.size
				const isDirectory = stats.isDirectory();
				return {size:fileSize,isDirectory,name:file};
			} catch (error) {
				return {error:true};
			}
		}))

		return fileStats;
	} catch (error) {
		throw new BadRequest({
			message: 'Error Processing the Directory',
			details: error.toString()
		})
	}
};