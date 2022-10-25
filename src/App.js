import "./styles.css";
import Calculator from "./Components/Calculator";
import Output from "./Components/Output";
import BtnWrapper from "./Components/BtnWrapper";
import Btn from "./Components/Btn";
import CalcProvider from "./context/CalcContext";
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];
export default function App() {
  return (
    <CalcProvider>
      <Calculator>
        <Output />
        <BtnWrapper>
          {btnValues.flat().map((btn, i) => (
            <Btn value={btn} key={i} />
          ))}
        </BtnWrapper>
      </Calculator>
    </CalcProvider>
  );
}
