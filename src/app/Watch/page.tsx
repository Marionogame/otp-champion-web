import PlayVideo from "./Components/PlayVideo";
import Image from "next/image";
import yorick from "@assets/yorick.jpg";
import CardVideoList from "../Components/CardVideoList";
import InputOtp from "@components/InputOtp";
const Watch = () => {
  return (
    <div className="h-[calc(100vh-50px)] bg-[#050010] bg-[url('@assets/fondob11.jpg')] bg-cover bg-center bg-fixed z-[1] flex flex-col">
      <div className="w-[95%] h-full flex justify-center m-auto p-5">
        <div className="w-[70%] h-full ">
          <div className="h-[calc(100%-13.875rem)]">
            <PlayVideo />
          </div>
          <div className="flex h-[13.875rem]">
            <div className="min-w-[25rem] mt-6 pl-3 pr-3 pb-3 bg-white border-3 dark:border-l-gray-700 dark:border-r-gray-700 dark:border-b-gray-700 shadow-sm dark:bg-gray-800  border-t-[#A78D4F]">
              <div className="flex justify-center w-full">
                <div className="flex justify-center bg-[#A78D4F] w-auto pr-4 pl-4 mb-3 text-2xl">Urgot</div>
              </div>
              <div className="flex justify-around">
                <div className="flex items-center">
                  <Image src={yorick} alt="logo" className="h-30 w-35" />{" "}
                </div>
                <div className="flex items-center">
                  <div>
                    <div className="flex mt-2">
                      <span className="w-15">Tiempo:</span>
                      <span className="w-18 text-center text-[#d1b062]">1:12:03</span>
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-[#d1b062]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <div className="flex mt-2">
                      <span className="w-15">KDA:</span>
                      <span className="w-18 text-center text-[#d1b062]">8/5/23</span>
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-[#d1b062]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"
                        />
                      </svg>
                    </div>
                    <div className="flex mt-2">
                      <span className="w-15">Farmeo:</span>
                      <span className="w-18 text-center text-[#d1b062]">165</span>
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-[#d1b062]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="2"
                          d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-[19rem] mt-6 ml-6 pl-3 pr-3 pb-3 bg-white border-3 dark:border-l-gray-700 dark:border-r-gray-700 dark:border-b-gray-700 shadow-sm dark:bg-gray-800  border-t-[#A78D4F]">
              <div className="flex justify-center w-full">
                <div className="flex justify-center bg-[#A78D4F] w-auto pr-4 pl-4 mb-3 text-2xl ">Build</div>
              </div>
              <div className="flex gap-4 mb-4">
                <Image src={yorick} alt="logo" className="h-15 w-20" />
                <Image src={yorick} alt="logo" className="h-15 w-20" />
                <Image src={yorick} alt="logo" className="h-15 w-20" />
              </div>
              <div className="flex gap-4">
                <Image src={yorick} alt="logo" className="h-15 w-20" />
                <Image src={yorick} alt="logo" className="h-15 w-20" />
                <Image src={yorick} alt="logo" className="h-15 w-20" />
              </div>
            </div>
            <div className="w-auto mt-6 ml-6 pl-3 pr-3 pb-3 bg-white border-3 dark:border-l-gray-700 dark:border-r-gray-700 dark:border-b-gray-700 shadow-sm dark:bg-gray-800  border-t-[#A78D4F]">
              <Image src={yorick} alt="logo" className="h-40 w-300" />{" "}
            </div>
          </div>
        </div>
        <div className="w-[30%] ml-5 pl-5 pr-5 h-full flex justify-center">
          <div className="w-full h-full">
            <div className="min-w-[19rem] h-full ml-6 pb-3 bg-white border-3 dark:border-l-gray-700 dark:border-r-gray-700 dark:border-b-gray-700 shadow-sm dark:bg-gray-800 border-t-[#A78D4F]">
              <div className="flex justify-center w-full">
                <div className="flex justify-center h-15 items-center p-5 bg-[#A78D4F] w-[22.5rem] text-2xl">
                  <div className="flex h-10 w-full">
                    <InputOtp big={false} />
                    <svg
                      className="w-6 h-6 ml-3 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="m-1 h-[calc(100%-3.8rem)] custom-scrollbar">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Watch;
