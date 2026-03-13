export default function DailyGoalMobile({ done, total, progress }) {
  return (
    <section className="lg:hidden p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Daily Goal</h3>
        <span className="text-primary font-bold">
          {done}/{total}
        </span>
      </div>
      <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {done >= total
          ? "🎉 Daily goal reached!"
          : `You're doing great! ${total - done} more to go.`}
      </p>
    </section>
  );
}