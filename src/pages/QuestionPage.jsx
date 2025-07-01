import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

// context
import { useGame } from "@/context/GameContex";

// components
import QuestionBox from "@/components/QuestionBox";
import { Progress } from "@/components/ui/progress";

// questions
import { questions } from "@/constants";

// assets
import back_btn from "@/assets/back_btn.png";

export default function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionIndex = parseInt(id);
  const q = questions[questionIndex] || {};
  const { playerInfo, setPlayerInfo } = useGame();
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (q.key) {
      setPlayerInfo({ ...playerInfo, [q.key]: input });
    }
    const nextId = questionIndex + 1;
    if (nextId < questions.length) navigate(`/questions/${nextId}`);
    else navigate("/ack");
  };

  console.log(q);
  console.log(questionIndex);
  console.log(questions.length);
  console.log(questions);

  return (
    <div className="phone-wrapper">
      <div className="top-half-purple">
        <div className="flex items-center justify-between px-4 pt-4">
          <img
            src={back_btn}
            alt="Back"
            className="w-5 h-5 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h3 className="subheading text-center text-lg font-semibold flex-1 -ml-5">
            Know Who?
          </h3>
          <div className="w-5 h-5" /> {/* placeholder for symmetry */}
        </div>
        <Progress
          value={((questionIndex + 1) / questions.length) * 100}
          className="w-full mt-2"
        />
      </div>
      <div className="bottom-half-white relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          <img
            src={q.image}
            alt="character here ?"
            className="w-[200px] object-contain"
          />
          <QuestionBox
            question={q.question}
            placeholder={q.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onSubmit={handleSubmit}
            showInput={q.input}
          />
        </div>
      </div>
    </div>
  );
}
