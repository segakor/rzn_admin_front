import { longredIitle } from "../../../constants/constants";
import { LongreadEditor } from "../../../components/LongreadEditor";

export const KuhnyaRyazanskogoKray = () => {
  return (
    <div className="grid gap-2 bg-slate-100 p-5 rounded-2xl">
      <div className="font-medium text-lg my-4">Кухня Рязанского края</div>
      <LongreadEditor longreadTitle={longredIitle.KUHNYA_RYAZANSKOGO_KRAY} />
    </div>
  );
};
