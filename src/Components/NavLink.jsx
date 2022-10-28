import {useEffect, useState} from "react"
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Bigfig'


function NavLink({data}) {
  const [asciiData, setAsciiData] = useState("")

  useEffect(()=>{
    figlet.parseFont('Standard', standard);
    figlet.text(data, {
        font: 'Standard',
    }, function(err, data) {
        setAsciiData(data);
    });
  }, [data])

  return (
    <p className="link-text asci">{asciiData}</p>
    )
}

export default NavLink