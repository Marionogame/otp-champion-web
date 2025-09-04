import GroupButton from "@components/GroupButton";
import CardVideoList from "@components/CardVideoList";
import InputOtp from "@components/InputOtp";
import Image from "next/image";
import yorick from "@assets/yorick.jpg";

const VideoFinder = () => {
  return (
    <div className="h-[calc(100vh-50px)] bg-[#050010] bg-[url('@assets/fondo.jpg')] bg-cover bg-center bg-fixed z-[1] flex flex-col">
      <div className="w-[90%] h-full flex justify-center m-auto">
        <div>
          <div className="h-[100px] ">
            <div className="lg:flex lg:justify-between w-full md:flex md:items-center mt-8">
              <div className="flex items-end">
                <Image src={yorick} alt="logo" className="rounded-full shadow-md w-22 h-22 object-cover border-2 border-yellow-200" />

                <GroupButton />
              </div>
              <div className="w-100 flex items-end">
                <InputOtp big={false} />
              </div>
            </div>
            <div className={"flex justify-center "}>
              <div className="bg-amber-300 w-full relative z-2 h-0.5 mt-6" />
            </div>
          </div>
          <div className="h-[calc(100vh-262px)] overflow-y-auto">
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
                ]}
              />
            </div>
          </div>
          <div className="flex items-center justify-center h-20 ">
            <div className="bg-[#4d81ac] w-[8.125rem] sm:w-[70%] h-0.5 flex" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoFinder;
