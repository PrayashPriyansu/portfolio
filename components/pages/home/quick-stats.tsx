export default function QuickStats() {
  return (
    <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm h-full">
      <div className="flex flex-col h-full justify-between gap-4">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
            Quick Stats
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 rounded-xl bg-zinc-800/30 border border-zinc-800/50">
              <p className="text-2xl font-bold text-yellow-500">3+</p>
              <p className="text-xs text-zinc-500 mt-0.5">Years Exp.</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-zinc-800/30 border border-zinc-800/50">
              <p className="text-2xl font-bold text-zinc-100">20+</p>
              <p className="text-xs text-zinc-500 mt-0.5">Projects</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-zinc-500 leading-relaxed">
          Passionate about crafting exceptional digital experiences with modern
          technologies.
        </p>
      </div>
    </div>
  );
}

