const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new document
const createDocument = async (collectionName, document) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(document);
        console.log('Document created:', result.insertedId);
    } finally {
        client.close();
    }
};

// Read documents
const readDocuments = async (collectionName, query) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const documents = await collection.find(query).toArray();
        console.log('Documents found:', documents);
    } finally {
        client.close();
    }
};

// Update a document
const updateDocument = async (collectionName, query, update) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.updateOne(query, { $set: update });
        console.log('Document updated:', result.modifiedCount);
    } finally {
        client.close();
    }
};

// Delete a document
const deleteDocument = async (collectionName, query) => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne(query);
        console.log('Document deleted:', result.deletedCount);
    } finally {
        client.close();
    }
};

// Usage example
const main = async () => {
    await createDocument('users', { name: 'John Doe', age: 30 });
    await readDocuments('users', {});
    await updateDocument('users', { name: 'John Doe' }, { age: 31 });
    await deleteDocument('users', { name: 'John Doe' });
};

main().catch(console.error);