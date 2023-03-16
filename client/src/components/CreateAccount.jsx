import { createTheme, TextField, ThemeProvider } from "@mui/material"
import { useState } from "react";

const CreateAccount = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    const onConnectClickHandler = () => {
        
    }

    const onCreateAccountHandler = (e) => {
        e.preventDefault()
        const name = e.target.firstName.value + e.target.lastName.value
    }

    return (
        <div className="w-[500px] h-auto p-[20px] bg-[#12131A] text-white flex flex-col gap-y-[20px] rounded-lg m-auto mt-20">
            <div className="flex flex-row">
                <button className="bg-green-500 px-[40px] py-[5px] rounded-xl ml-auto font-semibold">
                    Connect
                </button>

                <div className="text-center overflow-ellipsis w-[100px] h-[35px] overflow-hidden">
                    dkfsldkfjlskdfjlksdlfksjdlkfjs
                </div>
            </div>
            <div className="text-[48px] font-semibold justify-center text-center">
                Create Account
            </div>

            <form onSubmit={onCreateAccountHandler}>
            <div className="flex flex-row gap-x-[20px]">
            <ThemeProvider theme={darkTheme}>
                <TextField
                    required
                    id="outlined-required"
                    name="firstName"
                    label="First Name"
                    placeholder="John"
                    size="small"
                />

                <TextField
                    required
                    id="outlined-required"
                    name="lastName"
                    label="Last Name"
                    placeholder="John"
                    size="small"
                />
            </ThemeProvider>
            </div>

            <button className="min-w-[200px] m-auto bg-primaryBlue py-[8px] px-[24px] rounded-lg text-white font-inter font-medium self-start border-[1px] mt-[40px]"
                // onClick={() => {setShowConfirmPass(true)}}
                type="submit"
            >Create</button>
            </form>

        <div className="text-center text-[14px] mt-[20px]">Powered by VisualVault</div>
        </div>

    )
}

export default CreateAccount