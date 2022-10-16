import TopBg from "../../../assets/images/bg-top.svg"
import BottomBg from "../../../assets/images/bg-bottom.svg";

export default function Bg(): JSX.Element {
  return (
    <>
      <img className="top bg-img" src={TopBg} alt="" />
      <img className="bottom bg-img" src={BottomBg} alt="" />
    </>
  );
}
