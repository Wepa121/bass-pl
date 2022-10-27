import {useState} from "react"
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'
import ElectronicDetails from "./ElectronicDetails";

function ElectronicItem({data}) {
  const [show, setShow] = useState(false)

  // need to generate ascii
  let asciiData = ""
  figlet.parseFont('Standard', standard);

  figlet.text(data, {
      font: 'Standard',
  }, function(err, data) {
      c(data);
  });

  function c(x){
    asciiData = x
  }

  return (
    <div onMouseOver={()=>{setShow(true)}} onMouseOut = {()=>{setShow(false)}} className="asci electronic-item">
      {asciiData}
      {show && <ElectronicDetails/>}
    </div>
    )
}

export default ElectronicItem