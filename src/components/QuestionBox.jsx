import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function QuestionBox({
  question,
  placeholder,
  value,
  onChange,
  onSubmit,
  showInput = true,
}) {
  return (
    <div className="bg-white p-6 rounded-xl mx-auto text-center space-y-4 w-[90%] max-w-[300px] shadow">
      <p className="font-semibold text-lg">{question}</p>
      {showInput && (
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-[48px] px-4 py-2 rounded-md border"
        />
      )}
      <Button
        onClick={onSubmit}
        className="w-full bg-[#3BD6C6] hover:bg-[#2ec0b2]"
      >
        Submit
      </Button>
    </div>
  );
}
