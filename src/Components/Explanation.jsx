import { useState } from "react"
import { arr } from "../Data/data"

function Explanation({component}) {
  const [text, setText] = useState({
    data : arr.filter(
      (item)=> item.name.toLowerCase() === component)[0].explanation.substring(0, 100) + "...",
    read: "read more"
  })

  const handleClick = ()=>{
    text.read === "read more" ? setText({
        data : arr.filter(
          (item)=> item.name.toLowerCase() === component)[0].explanation,
        read: "read less"
      }):setText({
        data : arr.filter(
          (item)=> item.name.toLowerCase() === component)[0].explanation.substring(0, 100) + "...",
        read: "read more"
      })
    }
  return (
    <span>{text.data} <span className="more-less" onClick={handleClick}>{text.read}</span></span>
  )
}

export default Explanation