import { uploadFile, downloadFile, deleteFile } from './s3-proxy.mjs';

const main = async () => {
	await uploadFile('upload.txt');
	await downloadFile('upload.txt', 'download.txt');
	await deleteFile ('upload.txt')
};

main();
