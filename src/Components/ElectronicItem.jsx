import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import figlet from 'figlet';
import doom from 'figlet/importable-fonts/Doom'


function ElectronicItem({data}) {
  const navigate = useNavigate()
  const [asciiData, setAsciiData] = useState("")

  useEffect(()=>{
    figlet.parseFont('Doom', doom);
    figlet.text(data.name, {
        font: 'Doom',
    }, function(err, data) {
        setAsciiData(data);
    });
  }, [data.name])

  return (
    <div className="asci electronic-item" onClick={()=>navigate(`/components/${data.name.toLowerCase()}`)}>
      {asciiData}
    </div>
    )
}

export default ElectronicItem