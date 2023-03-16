import { useEffect, useState } from "react"
import LoginSelectImages from "./loginSelectImages"

const Login = ({ tokenURI }) => {
    const [images, setImages] = useState([])
    const [showEnterPass, setShowEnterPass] = useState(false)
    const [passStatus, setPassStatus] = useState(null)
    const [finalPass, setFinalPass] = useState('')

    // const IMAGES = [
    //     {
    //         "name": "WhatsApp Image 2023-03-16 at 4.41.02 PM.jpeg",
    //         "cid": "bafybeicwk754cy4dshghatkitp6jnybtgng3so75pxcdqlvjzho774nzke"
    //     },
    //     {
    //         "name": "WhatsApp Image 2023-03-16 at 4.41.03 PM.jpeg",
    //         "cid": "bafybeibiyn6yol7zjmvd6tyntslkkwiuujbrgqvaawwand5g6d5bqsv2hu"
    //     },
    //     {
    //         "name": "WhatsApp Image 2023-03-16 at 4.41.03 PM (1).jpeg",
    //         "cid": "bafybeigyict2eietctfv53zr5migqfxwhbdgmpedqf6vozcosh5wqme6hm"
    //     },
    //     {
    //         "name": "kitkat.jpg",
    //         "cid": "bafybeifslqseeolqm72svx6wykww5bu5ykkhnmzjkmn73hz6razd5ptp5i"
    //     },
    //     {
    //         "name": "gems.jpg",
    //         "cid": "bafybeih2tcvmkkv2pwf37lx4i3cnijik26cgyjzivmlptfp5iufurc4kva"
    //     },
    //     {
    //         "name": "dairyMilk.jpg",
    //         "cid": "bafybeifcbyjfqobulw5trilxeqcbczck6tvqbukskk7m5ylvmyyzdwrsly"
    //     },
    //     {
    //         "name": "galaxy.jpeg",
    //         "cid": "bafybeiblkxw2patk6uhdzmh2o63gwzwa3737unqabb23e43nm7nvhfhdsi"
    //     },
    //     {
    //         "name": "snickers.jpg",
    //         "cid":"bafybeiftfr6ehbnustfjo4dpqwvdgajhgytkftmaue3p4u4ttzhn6xna3y"
    //     },
    //     {
    //         "name": "lidnt.jpeg",
    //         "cid":"bafybeif5xzupzwt3msoumkhgtpc4mlpstpfya6ojqdloffvx7f7slxgib4"
    //     },
    // ]

    const getImage = async (tokenUri) => {
        const result = await fetch(tokenUri);
        const metaData = await result.json();
    
        setImages(metaData.imageList);
      };
    
      useEffect(() => {
        getImage(tokenURI);
      }, [tokenURI]);

    const onLoginClickHandler = () => {
        console.log(finalPass)
        setImages(images.sort((a, b) => 0.5 - Math.random()));

        
    }

    return (
        <div className="w-[500px] h-auto p-[20px] bg-[#12131A] text-white flex flex-col gap-y-[20px] rounded-lg m-auto mt-20">
            <div className="flex flex-row">
                <button className="bg-green-500 px-[40px] py-[5px] rounded-xl ml-auto font-semibold">
                    Connected
                </button>
            </div>
            <div className="font-semibold">
                Addresss: <span className=" font-normal">{"#0xCdd631B7C43B0b0B2b7E3517BD32B4A19C29D323"}</span>
            </div>

            <div className="text-[48px] font-semibold justify-center text-center">
                Login
            </div>

            <div className="">
                <div className="flex flex-row">
                    <button className="min-w-[200px] bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
                        onClick={() => {setShowEnterPass(true)}}
                    >Enter Password</button>

                    {/* {passStatus && <div className="ml-auto">
                        <img src="greentick.png" className="w-[20px] h-[20px]"/>
                    </div>} */}
                </div>
                {showEnterPass && <div className="flex flex-row flex-wrap w-[80%] justify-between gap-y-[5px] mt-[10px]">
                    <LoginSelectImages 
                        images={images} 
                        setPassStatus={setPassStatus}
                        setFinalPass={setFinalPass}
                        setShowEnterPass={setShowEnterPass}
                        onLoginClickHandler={onLoginClickHandler}
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