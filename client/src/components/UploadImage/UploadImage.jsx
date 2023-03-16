import React from "react";
import { useState } from "react";

import { create } from "ipfs-http-client";
import { Buffer } from "buffer";

const projectId = "2LEiWo06lqrPLBn4x5fxBHwMDgg";
const projectSecret = "c567bca7714ae367126c8b266fe86cab";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  const onChange = async (e) => {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://infura-ipfs.io/ipfs/${added.path}`;
      setImageUrl(url);
      console.log("IPFS URI of trailer: ", added.path);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const setImagesJson = async (
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
  ) => {
    let imageList = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
    ];
    const tokenObject = {
      addresss: "0xih7ydcdjjbasjkkjy7",
      siteDomin: "amazon",
      imageList: imageList,
    };
    const cid = await client.add(JSON.stringify(tokenObject));
    const tokenURI = `https://infura-ipfs.io/ipfs/${cid.path}`;
    console.log(cid.path);
    return cid.path
  };

  const getImage = async (tokenUri) => {
    const result = await fetch(`https://ipfs.io/ipfs/${tokenUri}`);

    const metaData = await result.json();

    console.log(metaData.imageList);

  };

  return (
    <>
      <div id="b2" class="nft-image">
        <img class="img-uploaded" src={imageUrl} alt="" />
        <input class="img-fileInput" type="file" onChange={onChange} />
      </div>
      <button
        onClick={() => {
          setImagesJson(
            "QmcKZd2p4hkjVJDMWCadNLVBe4NQYH5Lvxx3S4xRsCtJAW",
            "Qmf1BWDRXKzR5xkWdwnYatTecE3egQ1uWqW8Fg9k7ivtqk",
            "QmdtQ8vfZgS3B76BqCMt6EHCUePR3WkZZzMaLfaUhPMP31",
            "QmYKRY8gQ9qcm8Kkd8GA4UjVb8nWpSZNdQ9H7Y7tChYjVS",
            "QmQMddy7rvGirNz62yLg9DctXHUbjLmFXzykxY8vvdCQ91",
            "QmSL6eLzk7ddQ9zHTjah4fYbQDdiSkbzU58Lz376ybn146",
            "QmZEN4fQE4QUQjKg8XoNuwRAwMvCWW4PAHH32A6D4aVmuW",
            "QmX3QMFGxZJuQ1xTXJXNgNDaJH78iMoBy4dYtiFgrddFjA",
            "QmPT6M6ybbjqdLsEkA6UszULXHReADeG8sHBxKpCdCcJko"
          );
        }}
      >
        Submit
      </button>

      <button
        onClick={() =>
          getImage("QmTcn6vxMmxRvRGuCZvgjwxJ3NiBEiuDnQW64iwi4Bia5D")
        }
      >
        Get Console
      </button>
    </>
  );
};

export default UploadImage;
