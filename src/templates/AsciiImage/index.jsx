import { asciiResistor } from "./assets/ascii-art-resistor"
import { asciiCapacitor } from "./assets/ascii-art-capacitor"
import { asciiDiode } from "./assets/ascii-art-diode"
import { asciiTransistor } from "./assets/ascii-art-transistor"
import { asciiInductor } from "./assets/ascii-art-inductor"
import { asciiIcs } from "./assets/ascii-art-ics"
import { asciiBreaker } from "./assets/ascii-art-breaker"
import { asciiFuse } from "./assets/ascii-art-fuse"
import { asciiSwitch } from "./assets/ascii-art-switch"
import { asciiTransformer } from "./assets/ascii-art-transformer"
import { asciiWire } from "./assets/ascii-art-wires"
import { asciiBattery } from "./assets/ascii-art-battery"
import { asciiRelay } from "./assets/ascii-art-relay"
import { asciiMotors } from "./assets/ascii-art-motors"

function AsciiImage({assetName}) {
  return (
    <p className="asci image-ascii-art">
      {assetName === "resistor" && asciiResistor}
      {assetName === "capacitor" && asciiCapacitor}
      {assetName === "led" && asciiDiode}
      {assetName === "transistor" && asciiTransistor}
      {assetName === "inductor" && asciiInductor}
      {assetName === "ic" && asciiIcs}
      {assetName === "circuit-breaker" && asciiBreaker}
      {assetName === "fuse" && asciiFuse}
      {assetName === "switch" && asciiSwitch}
      {assetName === "transformer" && asciiTransformer}
      {assetName === "electrical-wire" && asciiWire}
      {assetName === "battery" && asciiBattery}
      {assetName === "relay" && asciiRelay}
      {assetName === "motor" && asciiMotors}
    </p>
  )
}

export default AsciiImage