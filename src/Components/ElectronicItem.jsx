import { useNavigate } from "react-router-dom";
import useToAscii from "templates/hooks/useToAscii";


function ElectronicItem({data}) {
  const navigate = useNavigate()
  const asciiData = useToAscii(data.name)

  return (
    <div className="asci electronic-item" onClick={() => navigate(`/components/${data.name.toLowerCase()}`)}>
      {asciiData}
    </div>
    )
}

export default ElectronicItem