import { useParams } from "react-router-dom"
import AsciiImage from "./AsciiImage"
import Explanation from "./Explanation"
import {arr} from "../Data/data";

const handlePageExist = (component) =>
  arr.find(item => item.name.toLowerCase().includes(component.toLowerCase()))

function Detail() {
  const {component} = useParams()
  
  if (!handlePageExist(component)) {
    return null;
  }

  return (
    <div>
      <AsciiImage assetName={component}/>
      <Explanation component = {component}/>
    </div>
  )
}

export default Detail