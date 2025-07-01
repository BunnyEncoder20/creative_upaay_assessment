import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

// context
import { useGame } from "@/context/GameContex";

// components
import QuestionBox from "@/components/QuestionBox";

// questions
import { questions } from "@/constants";

export default function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const q = questions[parseInt(id)];
  const { playerInfo, setPlayerInfo } = useGame();
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (q.key) {
      setPlayerInfo({ ...playerInfo, [q.key]: input });
    }
    const nextId = parseInt(id) + 1;
    if (nextId < questions.length) navigate(`/questions/${nextId}`);
    else navigate("/ack");
  };

  return (
    <div className="phone-wrapper">
      <div className="top-half-purple">
        <div className="h=[4px] w-full bg-gray-200 mt-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-400"
            style={{ width: `${(id / (questions.length - 1)) * 100}%` }}
          />
        </div>
      </div>
      <div className="bottom-half-white flex flex-col items-center justify-center space-y-6">
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
  );
}
