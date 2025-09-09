import PlayVideo from "./Components/PlayVideo";
import Image from "next/image";
import yorick from "@assets/yorick.jpg";
const Watch = () => {
  return (
    <div className="h-[calc(100vh-50px)] bg-[#050010] bg-[url('@assets/fondob11.jpg')] bg-cover bg-center bg-fixed z-[1] flex flex-col">
      <div className="w-[90%] h-full flex justify-center m-auto">
        <div className="w-[100%] h-full ">
          <div>
            <PlayVideo />
          </div>
          <div className="flex ">
            <div className="max-w-sm mt-6 p-3 bg-white border-3 dark:border-l-gray-700 dark:border-r-gray-700 dark:border-b-gray-700 shadow-sm dark:bg-gray-800  border-t-[#A78D4F]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Image src={yorick} alt="logo" className="h-30 w-35" />{" "}
                </div>
                <div className="flex items-center">
                  {/* <div className="flex justify-center w-full text-2xl">Urgot</div> */}
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
            <div className="max-w-sm mt-6 ml-6 p-3 bg-white border-3 dark:border-l-gray-700 dark:border-r-gray-700 dark:border-b-gray-700 shadow-sm dark:bg-gray-800  border-t-[#A78D4F]">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Watch;
