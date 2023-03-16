import { useState } from "react"
import SelectImages from "./selectImages"

const CreateAccount = () => {

    const [showCreatePass, setShowCreatePass] = useState(false)
    return (
        <div className="w-[500px] h-auto p-[20px] bg-blue-200 flex flex-col rounded-lg m-auto mt-20">
            <div className="flex flex-row">
                <button>Connect</button>
            </div>
            <div className="">
                Addresss: {"#dkdskfskdflksjdlfksld"}
            </div>
            <div className="">
                <button className="bg-primaryBlue py-[8px] px-[24px] ml-auto rounded-lg text-white font-inter font-medium self-start border-[1px]"
                    onClick={() => {setShowCreatePass(true)}}
                >Create Password</button>

                {showCreatePass && <div className="flex flex-row flex-wrap w-[80%] justify-between gap-y-[5px]">
                    <SelectImages/>
                </div>}
            </div>
        </div>
    )
}

export default CreateAccount