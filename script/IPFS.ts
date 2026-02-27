import { create } from 'ipfs-http-client';

// 1. Initialize the client to your local node
const client = create({ host: '127.0.0.1', port: 5001, protocol: 'http' });

async function uploadToIPFS({logo,candidate,partyName,constituency,leader}) {
    if(!logo||logo==0||!candidate||!partyName||!constituency||!leader){ throw new Error("logo,candidate,partyName,constituency and leader are required")}
    console.log("It is valid")
  try {
    const added = await client.add(logo);
    const metadata = JSON.stringify({
    partyName,
    candidate,
    constituency,
    leader,
    logo: `ipfs://${added.path}`
  })
    const {cid} = await client.add(metadata)
    return cid.toString();
  } catch (error) {
    console.error("Error uploading to local IPFS:", error);
  }
}
export default uploadToIPFS;
