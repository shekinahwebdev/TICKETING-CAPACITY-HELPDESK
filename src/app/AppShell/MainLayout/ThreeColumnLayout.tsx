import CenterColumn from "./ThreeColumnLayout/CenterColumn";
import LeftColumn from "./ThreeColumnLayout/LeftColumn";
import RightColumn from "./ThreeColumnLayout/RightColumn";

const ThreeColumnLayout = () => {
  return (
    <div className="w-full h-[111.5vh]">
      <div className="h-full bg-white rounded-br-2xl  rounded-t-2xl border shadow-sm overflow-hidden flex">
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
