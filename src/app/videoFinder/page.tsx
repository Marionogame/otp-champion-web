import GroupButton from "@components/GroupButton";
import CardVideoList from "./components/CardVideoList";
import InputOtp from "@components/InputOtp";
import Image from "next/image";
import yorick from "@assets/yorick.jpg";
import GroupButtonFilter from "./Components/GroupButtonFilter";
const VideoFinder = () => {
  return (
    <div className="h-[calc(100vh-50px)] bg-[#050010] bg-[url('@assets/fondob11.jpg')] bg-cover bg-center bg-fixed z-[1] flex flex-col">
      <div className="w-[90%] h-full flex justify-center m-auto">
        <div>
          <div className="lg:flex h-[100px] lg:justify-between w-full md:flex md:items-center mt-8">
            <div className="flex h-full items-end">
              <Image src={yorick} alt="logo" className="rounded-full shadow-md w-22 h-22 object-cover border-2 border-yellow-200" />

              <GroupButton />
            </div>
            <div className="flex h-full w-90 items-end">
              <InputOtp big={false} />
            </div>
          </div>
          <div className="bg-amber-300 w-full h-0.5 mt-6" />
          <GroupButtonFilter />
          <div>
            {/* <div className="flex items-end">
              <div className="w-auto font-bold border-b-2 border-l-2 border-amber-300">Top</div>
              <div className="w-7 font-bold  border-b-2 border-amber-300 flex items-center justify-center relative h-8">
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                  }}>
                  <div className="flex h-full items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "40px",
                      height: "2px",
                      background: "#FFD230",
                      transform: "rotate(45deg)",
                      transformOrigin: "left top",
                    }}
                  />
                </div>
              </div>
              <div className="w-auto font-bold border-b-2 border-amber-300">Faker</div>
              <div className="w-7 font-bold  border-b-2 border-amber-300 flex items-center justify-center relative h-8">
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                  }}>
                  <div className="flex h-full items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "40px",
                      height: "2px",
                      background: "#FFD230",
                      transform: "rotate(45deg)",
                      transformOrigin: "left top",
                    }}
                  />
                </div>
              </div>
              <div className="w-auto font-bold">Carta</div>
            </div> */}

            {/* <div className="bg-amber-300 w-full relative z-2 h-0.5 " /> */}
          </div>
          <div className={"flex justify-center "}></div>
          <div className="h-[calc(100vh-262px)] custom-scrollbar">
            <div className="h-full ">
              <CardVideoList
                data={[
                  {
                    name: "Ahri",
                    role: "Mage",
                    damage: "High",
                    difficulty: "Medium",
                  },
                  {
                    name: "Garen",
                    role: "Fighter",
                    damage: "Medium",
                    difficulty: "Low",
                  },
                  {
                    name: "Lee Sin",
                    role: "Assassin",
                    damage: "High",
                    difficulty: "High",
                  },
                  {
                    name: "Lux",
                    role: "Mage",
                    damage: "High",
                    difficulty: "Low",
                  },
                  {
                    name: "Yasuo",
                    role: "Fighter",
                    damage: "High",
                    difficulty: "High",
                  },
                  {
                    name: "Jinx",
                    role: "Marksman",
                    damage: "High",
                    difficulty: "Medium",
                  },
                  {
                    name: "Ahri",
                    role: "Mage",
                    damage: "High",
                    difficulty: "Medium",
                  },
                  {
                    name: "Garen",
                    role: "Fighter",
                    damage: "Medium",
                    difficulty: "Low",
                  },
                  {
                    name: "Lee Sin",
                    role: "Assassin",
                    damage: "High",
                    difficulty: "High",
                  },
                  {
                    name: "Lux",
                    role: "Mage",
                    damage: "High",
                    difficulty: "Low",
                  },
                  {
                    name: "Yasuo",
                    role: "Fighter",
                    damage: "High",
                    difficulty: "High",
                  },
                  {
                    name: "Jinx",
                    role: "Marksman",
                    damage: "High",
                    difficulty: "Medium",
                  },
                  {
                    name: "Ahri",
                    role: "Mage",
                    damage: "High",
                    difficulty: "Medium",
                  },
                  {
                    name: "Garen",
                    role: "Fighter",
                    damage: "Medium",
                    difficulty: "Low",
                  },
                  {
                    name: "Lee Sin",
                    role: "Assassin",
                    damage: "High",
                    difficulty: "High",
                  },
                  {
                    name: "Lux",
                    role: "Mage",
                    damage: "High",
                    difficulty: "Low",
                  },
                  {
                    name: "Yasuo",
                    role: "Fighter",
                    damage: "High",
                    difficulty: "High",
                  },
                  {
                    name: "Jinx",
                    role: "Marksman",
                    damage: "High",
                    difficulty: "Medium",
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex items-center justify-center h-13 ">
            <div className="bg-[#4d81ac] w-[8.125rem] sm:w-[70%] h-0.5 flex" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoFinder;
