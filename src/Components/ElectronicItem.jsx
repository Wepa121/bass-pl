// import asciiData from "../Data/function"
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'

function ElectronicItem({data}) {
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
    <div className="asci electronic-item">{asciiData}</div>
    )
}

export default ElectronicItem