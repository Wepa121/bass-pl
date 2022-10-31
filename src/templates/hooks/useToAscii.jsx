import {useState, useEffect} from 'react'
import figlet from 'figlet';
import doom from 'figlet/importable-fonts/Doom'
import bigMoney from 'figlet/importable-fonts/Big Money-ne'
import bigFig from 'figlet/importable-fonts/Bigfig'

function useToAscii(data) {
  const [asciiData, setAsciiData] = useState("")
  let fontType = doom
  if(data === "About" || data === "Home" || data === "Contact") fontType = bigFig
  if(data === "Electronics" || data === "Best seller") fontType = bigMoney
  useEffect(()=>{
    figlet.parseFont('font-type', fontType);
    figlet.text(data, {
        font: 'font-type',
    }, function(err, data) {
        setAsciiData(data);
    });
  }, [data, fontType])

  return asciiData
}

export default useToAscii