import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
const getStyle = (btn) => {
  const className = {
    "=": "equals",
    X: "operator",
    "-": "operator",
    "+": "operator",
    "/": "operator"
  };
  return className[btn];
};

const Btn = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
    });
  };
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };
  const handleClick = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue
    });
  };
  const clickSign = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    });
  };
  const clickEqual = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          X: (a, b) => a * b,
          "/": (a, b) => a / b
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0
      });
    }
  };
  const clickPercent = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: ""
    });
  };
  const clickInvert = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ""
    });
  };
  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": clickSign,
      "-": clickSign,
      "+": clickSign,
      "=": clickEqual,
      X: clickSign,
      "%": clickPercent,
      "+-": clickInvert
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClick();
    }
  };
  return (
    <button onClick={handleBtnClick} className={`${getStyle(value)} btn`}>
      {value}
    </button>
  );
};
export default Btn;
