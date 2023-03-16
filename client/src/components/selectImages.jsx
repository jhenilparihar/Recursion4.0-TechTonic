import { useEffect, useState } from "react"

const SelectImages = () => {
    const [selectedImages, setSelectedImages] = useState([])

    const push = (imageId) => {
        if(selectedImages.includes(imageId)) {
            return
        }
        setSelectedImages((prev) => [...prev, imageId])
    }

    console.log(selectedImages)

    return (
        <div className="flex flex-row flex-wrap w-[100%] justify-between gap-y-[5px]">
            <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(1) && "opacity-20"}`} onClick={() => {push(1)}}>
                Image
            </div>

            <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(2) && "opacity-20"}`} onClick={() => {push(2)}}>
                Image
            </div>

            <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(3) && "opacity-20"}`} onClick={() => {push(3)}}>
                Image
            </div>

            <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(4) && "opacity-20"}`} onClick={() => {push(4)}}>
                Image
            </div>

            <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(5) && "opacity-20"}`} onClick={() => {push(5)}}>
                Image
            </div>

            <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(6) && "opacity-20"}`} onClick={() => {push(6)}}>
                Image
            </div>

            <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(7) && "opacity-20"}`} onClick={() => {push(7)}}>
                Image
            </div>

            <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(8) && "opacity-20"}`} onClick={() => {push(8)}}>
                Image
            </div>

            <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(9) && "opacity-20"}`} onClick={() => {push(9)}}>
                Image
            </div>

            <button className="bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]">
                OK
            </button>
        </div>
    )
}

export default SelectImages