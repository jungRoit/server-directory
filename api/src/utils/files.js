import fs from "fs";
import path from "path";

export const readDirectory = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path.resolve(__dirname,'..',dir), (error, files) => {
      if (error) {
				console.log('dir err',error);
        reject(error);
      }

      resolve(files);
    });
  });
};

export const getFileDetails = (dir, file) => {
  return new Promise((resolve, reject) => {
    const filePath = path.resolve(__dirname,'..', dir, file);
    fs.stat(filePath, (error, stats) => {
      if (error) {
        reject(error);
      }

      resolve(stats);
    });
  });
};
