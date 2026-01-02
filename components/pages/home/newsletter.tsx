export default function Newsletter() {
  return (
    <div className="p-5 rounded-2xl border border-zinc-800/50 bg-linear-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-sm relative overflow-hidden h-full">
      {/* Subtle glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 blur-[60px] rounded-full pointer-events-none" />

      <div className="relative space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-sm font-bold text-zinc-100">Stay Updated</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Get notified about new projects, blog posts, and tech insights.
          </p>
        </div>
        <form className="space-y-2.5">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg px-4 py-2.5 text-sm font-bold transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-zinc-600">No spam, unsubscribe anytime.</p>
      </div>
    </div>
  );
}

