import { useEffect, useState } from "react"

const LoginSelectImages = (props) => {
    const [selectedImages, setSelectedImages] = useState([])

    const push = (imageId) => {
        if(selectedImages.includes(imageId)) {
            return
        }
        setSelectedImages((prev) => [...prev, imageId])
    }

    console.log(selectedImages)

    const onConfirmClickHandler = () => {
        // if(JSON.stringify(selectedImages) === JSON.stringify(props.pass)) {
        //     props.setShowConfirmPass(false)
        //     // props.setPassStatus(true)
        //     props.setConfirmPassStaus(true)
        // }
        // else {
        //     props.setShowConfirmPass(false)
        //     props.setConfirmPassStaus(false)
        //     setSelectedImages([])
        // }
        console.log(selectedImages, props.pass, selectedImages == props.pass)
    }

    const onCancelClickHandler = () => {
        props.setShowConfirmPass(false)
        setSelectedImages([])
    }

    return (
        <div className="flex flex-row flex-wrap w-[100%] justify-between gap-y-[5px] cursor-pointer">
        {props.images.map(image => {
                return (
                    <div className="relative w-[32%] h-[120px] cursor-pointer">
                        <img 
                            src={`https://${image.cid}.ipfs.w3s.link/${image.name}`} 
                            className={`w-[100%] h-[100%] rounded-md ${selectedImages.includes(image.cid) && "opacity-50"}`} 
                            onClick={() => {push(image.cid)}}/>

                        {selectedImages.includes(image.cid) && <div className="absolute left-[50%] top-[50%] font-semibold text-[#404040] text-[32px]">
                            {selectedImages.indexOf(image.cid)+1}
                        </div>}
                    </div>
                
                )
            })}

            <button className="bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
                onClick={onConfirmClickHandler}
            >
                Confirm
            </button>

            <button className="bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
                onClick={onCancelClickHandler}
            >
                Cancel
            </button>
        </div>
    )
}

export default LoginSelectImages