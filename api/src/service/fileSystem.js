import { readDirectory,getFileDetails } from '../utils/files';

export const getFilesDetailsFromDirectory = async (directory) => {
	try {
		const files = await readDirectory(directory);
		const fileStats = await Promise.all(files.map(async file => {
			try {
				const stats = await getFileDetails(directory,file);
				return {...stats,name:file};
			} catch (error) {
				return {error:true};
			}
		}))

		return fileStats;
	} catch (error) {
		throw error;
	}
};