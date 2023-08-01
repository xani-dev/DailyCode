import fs from 'fs';
import {
	S3Client,
	PutObjectCommand,
	GetObjectCommand,
	DeleteObjectCommand
} from '@aws-sdk/client-s3';
const client = new S3Client({});

const BUCKET = 'myustbucket';

export const uploadFile = async (filename) => {
	const blob = fs.readFileSync(filename);
	const params = new PutObjectCommand({
		Bucket: BUCKET,
		Key: filename,
		Body: blob,
	});
	try {
		return await client.send(params);
	} catch (err) {
		console.error(err);
	}
};

export const downloadFile = async (filename, downloadName) => {
	const params = {
		Bucket: BUCKET,
		Key: filename,
	};
	const command = new GetObjectCommand(params);
	const { Body } = await client.send(command);

	await new Promise((resolve, reject) => {
		Body.pipe(fs.createWriteStream(downloadName))
			.on('error', (err) => reject(err))
			.on('close', () => resolve());
	});
};


export const deleteFile = async (filename) => {
	const blob = fs.readFileSync(filename);
	const params = new DeleteObjectCommand({
		Bucket: BUCKET,
		Key: filename,
		Body: blob,
	});
	try {
		return await client.send(params);
	} catch (err) {
		console.error(err);
	}
};