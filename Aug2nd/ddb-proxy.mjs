import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
	PutCommand,
	GetCommand,
	DeleteCommand,
	ExecuteStatementCommand,
	DynamoDBDocumentClient,
} from '@aws-sdk/lib-dynamodb';

const marshallOptions = {
	convertEmptyValues: false,
	removeUndefinedValues: false,
	convertClassInstanceToMap: false,
};
const unmarshallOptions = {
	wrapNumbers: false,
};
const translateConfig = { marshallOptions, unmarshallOptions };
const ddbClient = new DynamoDBClient({ region: 'us-east-1' });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, translateConfig);

const TABLE_NAME = 'Customer';

export const addUpdateCustomer = async (item) => {
	const params = {
		TableName: TABLE_NAME,
		Item: item,
	};
	const data = await ddbClient.send(new PutCommand(params));
	console.log('Success: Item added or updated:', data.$metadata.httpStatusCode);
};

export const getCustomer = async (customerId) => {
	const params = {
		TableName: 'Customer',
		Key: { customerId: customerId },
	};
	const data = await ddbClient.send(new GetCommand(params));
	return data.Item;
};

export const deleteCustomer = async (customerId) => {
	const params = {
		TableName: 'Customer',
		Key: { customerId: customerId },
	};
	await ddbClient.send(new DeleteCommand(params));
	return 'ok';
};

export const getCustomersForAge = async (age) => {
	try {
		const params = {
			Statement: `select * from Customer where age = ${age}`,
		};
		const data = await ddbDocClient.send(new ExecuteStatementCommand(params));
		return data.Items;
	} catch (err) {
		console.log(err.stack);
	}
};
