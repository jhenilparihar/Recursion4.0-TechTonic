import { useEffect, useState } from "react";
import ConfirmSelectedImages from "./confirmSelectedImages";
import SelectImages from "./selectImages";

const Singup = ({ tokenURI, signup }) => {
  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [pass, setPass] = useState([]);
  const [confirmPassStatus, setConfirmPassStatus] = useState(null);
  const [passStatus, setPassStatus] = useState(false);
  const [images, setImages] = useState([]);
  const [finalPass, setFinalPass] = useState(null);

  const getImage = async (tokenUri) => {
    const result = await fetch(tokenUri);
    const metaData = await result.json();

    setImages(metaData.imageList);
  };

  const signUp = async () => {
    await signup(finalPass);
  };

  useEffect(() => {
    getImage(tokenURI);
  }, [tokenURI]);

  return (
    <div className="w-[565px] h-auto px-[50px] py-[25px] bg-[#12131A] text-white flex flex-col gap-y-[20px] rounded-2xl m-auto shadow-lg">
      <div className="flex flex-row">
        <button className="border-green-400 border-[3px] px-[40px] py-[5px] rounded-xl ml-auto font-semibold text-green-400">
          Connected
        </button>
      </div>
      {/* <div className="font-semibold">
        Addresss:{" "}
        <span className=" font-normal">
          {"0xCdd631B7C43B0b0B2b7E3517BD32B4A19C29D323"}
        </span>
      </div> */}

      <div className="">
        <div className="flex flex-row">
          <button
            className="min-w-[200px] bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start"
            onClick={() => {
              setShowCreatePass(true);
            }}
          >
            Create Password
          </button>

          {passStatus && (
            <div className="ml-auto">
              <img src="greentick.png" className="w-[20px] h-[20px]" />
            </div>
          )}
        </div>
        {showCreatePass && (
          <div className="flex flex-row flex-wrap w-[80%] justify-between gap-y-[5px] mt-[10px]">
            <SelectImages
              images={images}
              setPass={setPass}
              setPassStatus={setPassStatus}
              setShowCreatePass={setShowCreatePass}
              setShowConfirmPass={setShowConfirmPass}
            />
          </div>
        )}
      </div>

      {pass.length > 0 && (
        <div className="">
          <div className="flex flex-row">
            <button
              className="min-w-[200px] bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start"
              onClick={() => {
                setShowConfirmPass(true);
              }}
            >
              Confirm Password
            </button>

            {confirmPassStatus && (
              <div className="ml-auto">
                <img src="greentick.png" className="w-[20px] h-[20px]" />
              </div>
            )}
          </div>
          {showConfirmPass && (
            <div className="flex flex-row flex-wrap w-[80%] justify-between gap-y-[5px] mt-[10px]">
              <ConfirmSelectedImages
                images={images}
                pass={pass}
                setShowConfirmPass={setShowConfirmPass}
                setPassStatus={setPassStatus}
                setConfirmPassStaus={setConfirmPassStatus}
                setFinalPass={setFinalPass}
              />
            </div>
          )}
        </div>
      )}

      {confirmPassStatus && (
        <button
          onClick={signUp}
          className="min-w-[200px] m-auto bg-gradient-to-r from-[#380336] to-[#0CBABA] py-[8px] px-[24px] rounded-lg text-white font-inter font-medium border-[1px] mt-[80px] outline-none border-none text-[18px]"
        >
          Complete SignUp
        </button>
      )}

      {confirmPassStatus == false && <div>Wrong Pass Entered</div>}
    </div>
  );
};

export default Singup;
