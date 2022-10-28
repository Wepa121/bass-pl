import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'


function ElectronicItem({data}) {
  const navigate = useNavigate()
  const [asciiData, setAsciiData] = useState("")

  useEffect(()=>{
    figlet.parseFont('Standard', standard);
    figlet.text(data.name, {
        font: 'Standard',
    }, function(err, data) {
        setAsciiData(data);
    });
  }, [data.name])

  return (
    <div className="asci electronic-item" onClick={()=>navigate('/detail')}>
      {asciiData}
    </div>
    )
}

export default ElectronicItem