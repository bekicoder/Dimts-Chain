import { create } from 'ipfs-http-client';

// 1. Initialize the client to your local node
const client = create({ host: '127.0.0.1', port: 5001, protocol: 'http' });

async function uploadImage(file) {
  try {
    // 2. Upload the file
    const added = await client.add(file);
    
    // 3. Construct the local gateway URL
    const url = `http://localhost:8080/ipfs/${added.path}`;
    
    console.log("Success! CID:", added.path);
    console.log("View locally at:", url);
    return url;
  } catch (error) {
    console.error("Error uploading to local IPFS:", error);
  }
}

