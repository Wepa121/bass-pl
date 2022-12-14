import ElectronicItem from "./ElectronicItem"
import { arr } from "data/data"

function ElectronicList() {
  return (
    <div className="electronic-list">
      {arr.map((item, index)=> <ElectronicItem data = {item} key = {index}/>)}
    </div>
  )
}

export default ElectronicList