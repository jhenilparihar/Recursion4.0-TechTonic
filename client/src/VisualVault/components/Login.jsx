import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import LoginSelectImages from "./loginSelectImages"

const Login = ({ tokenURI, login }) => {
    const [images, setImages] = useState([])
    const [showEnterPass, setShowEnterPass] = useState(false)
    const [passStatus, setPassStatus] = useState(null)
    const [finalPass, setFinalPass] = useState('')

    const getImage = async (tokenUri) => {
        const result = await fetch(tokenUri);
        const metaData = await result.json();
    
        setImages(metaData.imageList);
      };
    
      useEffect(() => {
        getImage(tokenURI);
      }, [tokenURI]);

    const shuffle = () => {
        setImages(images.sort((a, b) => 0.5 - Math.random()));
    }

    const onLoginClickHandler = async () => {
        const validate = await login(window.location.hostname, finalPass);
        console.log(validate)
        if(validate) {
            toast("Logged In Successful")
        }
        else {
            toast.error("Wrong Password")
            setImages(images.sort((a, b) => 0.5 - Math.random()));
        }
    }

    console.log(images)

    return (
        <div className="w-[565px] h-auto px-[50px] py-[25px] bg-[#12131A] text-white flex flex-col gap-y-[20px] rounded-2xl m-auto shadow-lg">
            <div className="flex flex-row">
                <button
                    className="border-green-400 border-[3px] px-[40px] py-[5px] rounded-xl ml-auto font-semibold text-green-400"
                >
                    Connected
                </button>
            </div>
            {/* <div className="font-semibold">
                Addresss: <span className=" font-normal">{"#0xCdd631B7C43B0b0B2b7E3517BD32B4A19C29D323"}</span>
            </div> */}

            <div className="text-[48px] font-bold justify-center text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Login
            </div>

            <div className="flex justify-center">
                {/* <div className="flex flex-row"> */}
                    {/* <button className="min-w-[200px] bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
                        onClick={() => {setShowEnterPass(true)}}
                    >Enter Password</button> */}

                    {/* {passStatus && <div className="ml-auto">
                        <img src="greentick.png" className="w-[20px] h-[20px]"/>
                    </div>} */}
                {/* </div> */}
                {<div className="flex flex-row flex-wrap w-[80%] justify-between gap-y-[5px] mt-[10px]">
                    <LoginSelectImages 
                        images={images} 
                        setPassStatus={setPassStatus}
                        setFinalPass={setFinalPass}
                        setShowEnterPass={setShowEnterPass}
                        onLoginClickHandler={onLoginClickHandler}
                        shuffle={shuffle}
                    />
                </div>}
            </div>

            {/* {passStatus == false && 
                <button
                    className="m-auto min-w-[200px] bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
                    onClick={onLoginClickHandler}
                >Login</button>} */}

            {(passStatus == false) && 
                <div>
                    Wrong Pass Entered
                </div>
            }
        </div>
    )
}

export default Login