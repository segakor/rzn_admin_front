import { LongreadEditor } from "../../../components/LongreadEditor";
import { longredIitle } from "../../../constants/constants";

export const Sobytiya = () => {
  return (
    <div className="grid gap-2 bg-slate-100 p-5 rounded-2xl">
      <div className="font-medium text-lg my-4">События</div>
      <LongreadEditor longreadTitle={longredIitle.SOBYTIYA} />
    </div>
  );
};
