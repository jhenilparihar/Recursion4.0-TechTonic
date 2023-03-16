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
const image = {
  chocolate: "QmTcn6vxMmxRvRGuCZvgjwxJ3NiBEiuDnQW64iwi4Bia5D",
  cars: "QmQkLxpZFvhSRZDGbRFWJQrTvttbEfrAQNVx3nJ5Q77wpA",
  fruits: "QmQuyGGo9DEbhvwFBxCM23NphzuE2jqmWzRtX36iaWXWdC",
  vegetables: "QmRBsrfKdd6yxFgef9EDqx9gMN21V82KigJvXrhfmqPQza",
  animals: "QmT8YBJtuCDN4jZk8Gy3FJGD9tUrWUAP6QpWch28c9MEWp",
  bike: "QmSh3Vg1pz3Ux9t6tFfh77TGXoaZ9jUHNShBKK8hL5ufQ1",
};
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
    return cid.path;
  };

  const getImage = async (tokenUri) => {
    const result = await fetch(`https://ipfs.io/ipfs/${tokenUri}`);

    const metaData = await result.json();

    console.log(metaData.imageList);
  };

  return (
    <div className="">
      <img src={imageUrl} alt="" />
      <input type="file" onChange={onChange} />
      <br />
      <br />
      <button
        onClick={() => {
          setImagesJson(
            "QmUuj61GuLEBrtMSQEzC7f16xkHUzBcRJj9sm1o3Qsu33g",
            "QmT81jESjCzp3sv8DLhDsnzXc4hjJ6ySXhuiExjJsbyAkF",
            "QmRmBoQGGkZfs5qNuGkHCyYWKTCYwfhHQbxt8quVy2VhMp",
            "QmbM6gzJY2rrLBeVaRVs9oVNkcjXvEoctLYq6ey1doEqni",
            "Qmf4VYA3uEEwMc5DpcVmdvjh2fAZnLWXjMWL2cU75w99oL",
            "QmfYWqXCtDMCjWb8JbT8PT1fuGj4Fua5WwZUM8JXBmhxBy",
            "QmbgDbuPje3bgWigrctuWn9L9v3KaNZKXsWBtF3a5S4X59",
            "QmXKcz2oBpJkZunthcRRnsy93vsP8k46RgcseBaNn3cn1a",
            "QmVdvXUeWCg65mzt2TXoJi7FNyyust73DkdZYg7SudXGjV"
          );
        }}
      >
        Submit
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() =>
          getImage("QmT8YBJtuCDN4jZk8Gy3FJGD9tUrWUAP6QpWch28c9MEWp")
        }
      >
        Get Console
      </button>
    </div>
  );
};

export default UploadImage;
