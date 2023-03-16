import { useState } from "react";
import ConfirmSelectedImages from "./confirmSelectedImages";
import SelectImages from "./selectImages";

const Singup = ({ tokenURI }) => {
  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [pass, setPass] = useState([]);
  const [confirmPassStatus, setConfirmPassStatus] = useState(null);
  const [passStatus, setPassStatus] = useState(false);

  const IMAGES = [
    {
      name: "WhatsApp Image 2023-03-16 at 4.41.02 PM.jpeg",
      cid: "bafybeicwk754cy4dshghatkitp6jnybtgng3so75pxcdqlvjzho774nzke",
    },
    {
      name: "WhatsApp Image 2023-03-16 at 4.41.03 PM.jpeg",
      cid: "bafybeibiyn6yol7zjmvd6tyntslkkwiuujbrgqvaawwand5g6d5bqsv2hu",
    },
    {
      name: "WhatsApp Image 2023-03-16 at 4.41.03 PM (1).jpeg",
      cid: "bafybeigyict2eietctfv53zr5migqfxwhbdgmpedqf6vozcosh5wqme6hm",
    },
    {
      name: "kitkat.jpg",
      cid: "bafybeifslqseeolqm72svx6wykww5bu5ykkhnmzjkmn73hz6razd5ptp5i",
    },
    {
      name: "gems.jpg",
      cid: "bafybeih2tcvmkkv2pwf37lx4i3cnijik26cgyjzivmlptfp5iufurc4kva",
    },
    {
      name: "dairyMilk.jpg",
      cid: "bafybeifcbyjfqobulw5trilxeqcbczck6tvqbukskk7m5ylvmyyzdwrsly",
    },
    {
      name: "galaxy.jpeg",
      cid: "bafybeiblkxw2patk6uhdzmh2o63gwzwa3737unqabb23e43nm7nvhfhdsi",
    },
    {
      name: "snickers.jpg",
      cid: "bafybeiftfr6ehbnustfjo4dpqwvdgajhgytkftmaue3p4u4ttzhn6xna3y",
    },
    {
      name: "lidnt.jpeg",
      cid: "bafybeif5xzupzwt3msoumkhgtpc4mlpstpfya6ojqdloffvx7f7slxgib4",
    },
  ];

  const getImage = async (tokenUri) => {
    const result = await fetch(tokenUri);

    const metaData = await result.json();

    console.log(metaData.imageList);
  };

  console.log(tokenURI);

  return (
    <div className="w-[500px] h-auto p-[20px] bg-[#12131A] text-white flex flex-col gap-y-[20px] rounded-lg m-auto mt-20">
      <div className="flex flex-row">
        <button className="bg-green-500 px-[40px] py-[5px] rounded-xl ml-auto font-semibold">
          Connected
        </button>
      </div>
      <div className="font-semibold">
        Addresss:{" "}
        <span className=" font-normal">
          {"#0xCdd631B7C43B0b0B2b7E3517BD32B4A19C29D323"}
        </span>
      </div>

      <div className="">
        <div className="flex flex-row">
          <button
            className="min-w-[200px] bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
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
              images={IMAGES}
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
              className="min-w-[200px] bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
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
                images={IMAGES}
                pass={pass}
                setShowConfirmPass={setShowConfirmPass}
                setPassStatus={setPassStatus}
                setConfirmPassStaus={setConfirmPassStatus}
              />
            </div>
          )}
        </div>
      )}

      {confirmPassStatus && (
        <button className="m-auto min-w-[200px] bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]">
          Complete SignUp
        </button>
      )}

      {confirmPassStatus == false && <div>Wrong Pass Entered</div>}
    </div>
  );
};

export default Singup;
