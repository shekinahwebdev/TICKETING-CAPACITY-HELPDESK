import CenterColumn from "../columnLayout/CenterColumn";
import LeftColumn from "../columnLayout/LeftColumn";
import RightColumn from "../columnLayout/RightColumn";

const ThreeColumnLayout = () => {
  return (
    <div className="w-full max-w-[1090px] h-[116.2vh] absolute left-[228px] top-1">
      <div className="h-full bg-white rounded-br-2xl  rounded-t-2xl shadow-sm overflow-hidden flex">
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
