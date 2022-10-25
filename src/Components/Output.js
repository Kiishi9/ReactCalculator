import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit";
const Output = () => {
  const { calc } = useContext(CalcContext);
  return (
    <Textfit className="output" max="70" mode="single">
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
};
export default Output;
