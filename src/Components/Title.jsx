import {useEffect, useState} from "react"
import figlet from 'figlet';
import big from 'figlet/importable-fonts/Big Money-ne'


function Title({data}) {
  const [asciiData, setAsciiData] = useState("")

  useEffect(()=>{
    figlet.parseFont('Big', big);
    figlet.text(data, {
        font: 'Big',
    }, function(err, data) {
        setAsciiData(data);
    });
  }, [data])

  return (
    <div className={`title ${data !== "Electronics" && "title-content"}`}>{asciiData}</div>
  )
}

export default Title