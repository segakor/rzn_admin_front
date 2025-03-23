import { LongreadEditor } from "../../../components/LongreadEditor";
import { longredIitle } from "../../../constants/constants";

export const ReestrTuroperatorov = () => {
  return (
    <div className="grid gap-2 bg-slate-100 p-5 rounded-2xl">
      <div className="font-medium text-lg my-4">Реестр туроператоров</div>
      <LongreadEditor longreadTitle={longredIitle.REESTR_TUROPERATOROV} />
    </div>
  );
};
