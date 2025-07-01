// Game Context
import { useGame } from "@/context/GameContex";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// assests
import lovesDogsImg from "@/assets/loves_dogs.png";
import hasATwinImg from "@/assets/has_a_twin.png";
import takesPhotosImg from "@/assets/takes_photos.png";
import likesCyclingImg from "@/assets/likes_cycling.png";
import bornInBangaloreImg from "@/assets/born_in_bangalore.png";
import playsGuitarImg from "@/assets/plays_guitar.png";

// Page
export default function LandingPage() {
  const { playerInfo, setPlayerInfo } = useGame();

  return (
    <div className="phone-wrapper">
      <div className="top-half-white">
        <h1 className="text-[48px] leading-[100%] tracking-[0%] text-center font-poppins font-bold mt-4 mb-10">
          Know Who?
        </h1>

        <div className="relative mt-10 pl-[8px] pr-[12px] h-[400px]">
          <img
            src={lovesDogsImg}
            alt="Loves Dogs"
            className="absolute top-[13px] left-[9.93px] w-[184px] h-[219px] rounded-[8px]"
          />
          <img
            src={hasATwinImg}
            alt="Has a Twin"
            className="absolute top-[248.62px] left-[12.85px] w-[178px] h-[124px] rounded-[8px]"
          />
          <img
            src={takesPhotosImg}
            alt="Takes Photos"
            className="absolute top-[12px] left-[213.07px] w-[67px] h-[94px] rounded-[8px]"
          />
          <img
            src={likesCyclingImg}
            alt="Likes Cycling"
            className="absolute top-[12px] left-[297.07px] w-[63px] h-[94px] rounded-[8px]"
          />
          <img
            src={bornInBangaloreImg}
            alt="Born in Bangalore"
            className="absolute top-[117px] left-[217.07px] w-[141px] h-[173px] rounded-[8px]"
          />
          <img
            src={playsGuitarImg}
            alt="Plays Guitar"
            className="absolute top-[307.99px] left-[218.64px] w-[137px] h-[72px] rounded-[8px]"
          />
        </div>
      </div>
      <div className="bottom-half-purple">
        <div className="bg-white w-[274px] h-[208px] rounded-[8px] gap-[16px] p-[16px] mx-auto flex flex-col justify-center">
          <Input
            value={playerInfo.firstName}
            onChange={(e) =>
              setPlayerInfo({ ...playerInfo, firstName: e.target.value })
            }
          />

          <Input
            value={playerInfo.lastName}
            onChange={(e) =>
              setPlayerInfo({ ...playerInfo, lastName: e.target.value })
            }
          />

          <Button
            disabled={!playerInfo.firstName || !playerInfo.lastName}
            className="w-full bg-[#00C2A8] hover:bg-[#00b09c] disabled:bg-[#AEAEB2] disabled:cursor-not-allowed"
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}
