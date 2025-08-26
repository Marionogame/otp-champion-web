import GroupButton from "@components/GroupButton";
import CardVideoList from "@components/CardVideoList";
const VideoFinder = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          Champions
          <span>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
            </svg>
          </span>
        </div>{" "}
        <GroupButton />{" "}
      </div>
      <div className={"flex justify-center "}>
        <div className="bg-amber-300 w-[90%] relative z-2 h-0.5 mt-6" />
      </div>
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
  );
};
export default VideoFinder;
