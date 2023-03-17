import { useEffect, useState } from "react";

const SelectImages = (props) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);

  //   const images = props.images.sort((a, b) => 0.5 - Math.random());

  const push = (imageId) => {
    if (selectedImages.includes(imageId)) {
      return;
    }
    setSelectedImages((prev) => [...prev, imageId]);
  };

  console.log(selectedImages);

  const onOkClickHandler = () => {
    props.setPass(selectedImages);
    props.setShowCreatePass(false);
    props.setShowConfirmPass(true);
    props.setPassStatus(true);
  };

  const onCancelClickHandler = () => {
    props.setShowCreatePass(false);
    setSelectedImages([]);
  };

  useEffect(() => {
    setImages(props.images.sort((a, b) => 0.5 - Math.random()));
  }, [props.images]);

  return (
    <div className="flex flex-row flex-wrap w-[100%] justify-between gap-y-[5px]">
      {images.map((image) => {
        return (
          <div className="relative w-[32%] h-[120px] cursor-pointer">
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
        );
      })}

      {/* <div className={`bg-yellow-500 w-[32%] h-[120px] rounded-md ${selectedImages.includes(1) && "opacity-20"}`} onClick={() => {push(1)}}>
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
            </div> */}

      <button
        className="bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
        onClick={onOkClickHandler}
      >
        OK
      </button>
      <button
        className="bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px]"
        onClick={onCancelClickHandler}
      >
        Cancel
      </button>
    </div>
  );
};

export default SelectImages;
