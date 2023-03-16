import { useState } from "react"

const LoginSelectImages = (props) => {
    const [selectedImages, setSelectedImages] = useState([])

    const push = (imageId) => {
        if(selectedImages.includes(imageId)) {
            return
        }
        setSelectedImages((prev) => [...prev, imageId])
    }

    const onConfirmClickHandler = () => {
        let result = ''
        for(let i=0; i<selectedImages.length; i++) {
          result += selectedImages[i]
        }
        props.setFinalPass(result)
        setSelectedImages([])
        props.setShowEnterPass(false)
        props.onLoginClickHandler()
    }

    const onCancelClickHandler = () => {
        props.setShowConfirmPass(false)
        setSelectedImages([])
    }

    return (
        <div className="flex flex-row flex-wrap w-[100%] justify-between gap-y-[5px] cursor-pointer">
        {props.images.map(image => {
                return (
                    <div className="relative w-[32%] h-[120px] cursor-pointer" key={image}>
                        <img
                            src={`https://infura-ipfs.io/ipfs/${image}`}
                            className={`w-[100%] h-[100%] rounded-md overflow-hidden ${
                                selectedImages.includes(image) && "opacity-50"
                            }`}
                            onClick={() => {
                                push(image);
                            }}
                            />

                        {selectedImages.includes(image) && (
                        <div className="absolute w-[100%] h-[100%] bg-[#C0C0C0] top-0 font-bold text-[#202020] text-[32px] rounded-md flex items-center justify-center opacity-80">
                            {selectedImages.indexOf(image) + 1}
                        </div>
                        )}
                    </div>
                
                )
            })}

            <button className="bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
                onClick={onConfirmClickHandler}
            >
                Login
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