import { useParams } from "react-router-dom"
import AsciiImage from "./AsciiImage"

function Detail() {
  const {component} = useParams()
  return (
    <div>
      <AsciiImage assetName={component}/>
      <span>Yes! We all know what a switch is! Let's get to its technical definition. The primary purposes of a switch as a device are to break the current, interrupt the current, and supply current from one conductor to another. The “On and off” mechanism is used to perform this task. There are 4 main classifications of a switch
      </span>
    </div>
  )
}

export default Detail