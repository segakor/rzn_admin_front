import { LongreadEditor } from "../../../components/LongreadEditor";
import { longredIitle } from "../../../constants/constants";

export const Cit = () => {
  return (
    <div className="grid gap-2 bg-slate-100 p-5 rounded-2xl">
      <div className="font-medium text-lg my-4">Визит-центр для туристов</div>
      <LongreadEditor longreadTitle={longredIitle.CIT} />
    </div>
  );
};
