import {formDT} from "/src/pages/Admin"
export default async function uploadToIPFS({logo,candidate,partyName,constituency,leader}) {
  if (!logo||!candidate||partyName,!constituency,!leader) {
    throw new Error("file, name, and description are required");
  }

  try{
  // ---------- 1️⃣ Upload the image ----------
  const formDataImage = new FormData();
  formDataImage.append("file", logo);

  const resImage = await fetch("http://127.0.0.1:5001/api/v0/add", {
    method: "POST",
    body: formDataImage
  });

  if (!resImage.ok) throw new Error("Image upload failed");

  const textImage = await resImage.text();
  const dataImage = JSON.parse(textImage.split("\n")[0]);
  const imageCID = dataImage.Hash;

  // ---------- 2️⃣ Build metadata JSON ----------
  const metadata = {
    partyName,
    candidate,
    constituency,
    leader,
    image: `ipfs://${imageCID}`
  };

  const blob = new Blob([JSON.stringify(metadata)], { type: "application/json" });

  // ---------- 3️⃣ Upload metadata JSON ----------
  const formDataMeta = new FormData();
  formDataMeta.append("file", blob);

  const resMeta = await fetch("http://127.0.0.1:5001/api/v0/add", {
    method: "POST",
    body: formDataMeta
  });

  if (!resMeta.ok) throw new Error("Metadata upload failed");

  const textMeta = await resMeta.text();
  const dataMeta = JSON.parse(textMeta.split("\n")[0]);

  const metadataCID = dataMeta.Hash;

  // ---------- 4️⃣ Return object ----------
  return {
    imageCID,
    metadataCID,
    metadataJSON: metadata
  };

  }catch(err){
      throw new Error(err)
  }
}

