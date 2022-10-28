import { useParams } from "react-router-dom"
import AsciiImage from "./AsciiImage"
import Explanation from "./Explanation"


function Detail() {
  const {component} = useParams()
  
  return (
    <div>
      <AsciiImage assetName={component}/>
      <Explanation component = {component}/>
    </div>
  )
}

export default Detail