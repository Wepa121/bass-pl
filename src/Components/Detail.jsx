import { useParams } from "react-router-dom"
import AsciiImage from "./AsciiImage"
import { arr } from "../Data/data"

function Detail() {
  const {component} = useParams()
  return (
    <div>
      <AsciiImage assetName={component}/>
      <span>{arr.filter((item)=> item.name.toLowerCase() === component)[0].explanation}</span>
    </div>
  )
}

export default Detail