import { roleLabels } from "../../constants/roles";
import { currentUser } from "../../data/mockData";

export function ProfileSummaryCard() {
  return (
    <article className="glass-card p-5">
      <div className="flex items-center gap-4">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="h-14 w-14 rounded-2xl object-cover"
        />
        <div>
          <p className="text-lg font-bold">{currentUser.name}</p>
          <p className="text-sm text-clinic-700">{currentUser.designation}</p>
          <span className="mt-1 inline-block rounded-full bg-clinic-100 px-2 py-0.5 text-xs font-semibold text-clinic-700">
            {roleLabels[currentUser.role]}
          </span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-white/80 p-3">
          <p className="text-xs text-clinic-600">Department</p>
          <p className="font-semibold">{currentUser.department}</p>
        </div>
        <div className="rounded-xl bg-white/80 p-3">
          <p className="text-xs text-clinic-600">Shift</p>
          <p className="font-semibold">{currentUser.shift}</p>
        </div>
      </div>
    </article>
  );
}
