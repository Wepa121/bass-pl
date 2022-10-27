import {useEffect, useState} from "react"
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'
import ElectronicDetails from "./ElectronicDetails";

function ElectronicItem({data}) {
  const [show, setShow] = useState(false)
  const [asciiData, setAsciiData] = useState("")
  
  useEffect(()=>{
    figlet.parseFont('Standard', standard);
    figlet.text(data.name, {
        font: 'Standard',
    }, function(err, data) {
        setAsciiData(data);
    });
    console.log("wepa")
  }, [data.name])

  return (
    <div onMouseOver={()=>{setShow(true)}} onMouseOut = {()=>{setShow(false)}} className="asci electronic-item">
      {asciiData}
      {show && <ElectronicDetails explanation = {data.explanation}/>}
    </div>
    )
}

export default ElectronicItem