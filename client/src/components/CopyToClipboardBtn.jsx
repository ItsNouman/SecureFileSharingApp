import React from 'react'
import { toast } from "react-toastify";

const CopyToClipboardBtn = ({filePassword}) => {

    const copyTextToClipboard = () => {
        navigator.clipboard.writeText(filePassword);
        toast.success("Password successfuly copied to clipboard!");
      }

  return (
<button
  disabled={!filePassword}
  onClick={copyTextToClipboard}
  className="p-2 w-[30%] mt-5 text-white font-medium rounded-md 
             bg-[#CBA135] hover:bg-[#b08f2f] focus:ring-4 focus:outline-none 
             focus:ring-[#d6b654] disabled:opacity-50 disabled:cursor-not-allowed transition"
>
  Copy Password
</button>


  )
}

export default CopyToClipboardBtn