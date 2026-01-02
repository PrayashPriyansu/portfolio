interface KeyTakeawayProps {
  title?: string;
  content: string;
}

export default function KeyTakeaway({
  title = "What I learned writing this",
  content,
}: KeyTakeawayProps) {
  return (
    <div className="mt-16 md:mt-20 pt-12 border-t border-zinc-800/50">
      <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
        {/* Yellow accent line */}
        <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-yellow-500 to-yellow-500/20" />

        <div className="pl-4">
          <h3 className="text-sm font-semibold text-yellow-500/80 uppercase tracking-wider mb-4">
            {title}
          </h3>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
