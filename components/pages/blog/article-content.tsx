"use client";

import { Hash, Lightbulb } from "lucide-react";
import { forwardRef } from "react";

const ArticleContent = forwardRef<HTMLElement>(function ArticleContent(
  _props,
  ref
) {
  return (
    <article ref={ref} className="prose-custom">
      {/* Lead paragraph */}
      <p className="lead">
        Most software doesn't fail because of bad code. It fails because of bad
        decisions — tiny choices that compound over time, each one reasonable in
        isolation, collectively creating systems that resist change and breed
        complexity.
      </p>

      <p>
        I've spent the last decade building systems. Some survived, some didn't.
        The ones that lasted all shared something: they were discovered through
        iteration, not designed in isolation. They evolved to fit their
        environment rather than forcing the environment to fit them.
      </p>

      {/* Section with anchor */}
      <section id="architecture-is-compression" data-section>
        <h2 className="section-heading group">
          <a
            href="#architecture-is-compression"
            className="anchor-link"
            aria-label="Link to section"
          >
            <Hash className="w-4 h-4" />
          </a>
          Architecture is compression
        </h2>

        <p>
          Good architecture is really just compression — taking complex reality
          and encoding it into simpler structures that humans can reason about.
          The best architectures compress without losing essential information.
        </p>

        <p>
          When I look at codebases that work well, they share a property: the
          code mirrors how people actually think about the problem. The
          abstractions match mental models. The boundaries fall where
          conversations naturally pause.
        </p>

        {/* Callout Block */}
        <div className="callout">
          <div className="callout-icon">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="callout-content">
            <p>
              The measure of good architecture isn't how elegant it looks on a
              whiteboard. It's how well it compresses the problem without
              distorting understanding.
            </p>
          </div>
        </div>

        <p>
          This is why "clean code" can be harmful when it prioritizes aesthetics
          over clarity. Sometimes the messy solution is the honest one — it
          accurately reflects the messy reality it's modeling.
        </p>
      </section>

      {/* Code Block Section */}
      <section id="patterns-over-practices" data-section>
        <h2 className="section-heading group">
          <a
            href="#patterns-over-practices"
            className="anchor-link"
            aria-label="Link to section"
          >
            <Hash className="w-4 h-4" />
          </a>
          Patterns emerge from repetition
        </h2>

        <p>
          I stopped believing in upfront pattern selection years ago. Instead, I
          write code that solves the immediate problem, then watch for patterns
          to emerge. The third time I write similar code, I know there's a
          pattern worth extracting.
        </p>

        <p>
          Here's an example. This started as a one-off utility for handling
          async state in a React component:
        </p>

        {/* Code Block */}
        <div className="code-block">
          <div className="code-header">
            <span className="code-language">typescript</span>
            <span className="code-filename">useAsyncState.ts</span>
          </div>
          <pre>
            <code>{`type AsyncState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function useAsyncState<T>(
  asyncFn: () => Promise<T>
): [AsyncState<T>, () => void] {
  const [state, setState] = useState<AsyncState<T>>({ 
    status: 'idle' 
  });

  const execute = useCallback(async () => {
    setState({ status: 'loading' });
    try {
      const data = await asyncFn();
      setState({ status: 'success', data });
    } catch (error) {
      setState({ 
        status: 'error', 
        error: error instanceof Error 
          ? error 
          : new Error(String(error)) 
      });
    }
  }, [asyncFn]);

  return [state, execute];
}`}</code>
          </pre>
        </div>

        <p>
          The discriminated union pattern here emerged naturally — I kept
          writing similar conditional checks and realized the type system could
          do this work for me. Now it's my default approach for any state
          machine.
        </p>
      </section>

      {/* Another section */}
      <section id="boundaries-and-contracts" data-section>
        <h2 className="section-heading group">
          <a
            href="#boundaries-and-contracts"
            className="anchor-link"
            aria-label="Link to section"
          >
            <Hash className="w-4 h-4" />
          </a>
          Boundaries define survivability
        </h2>

        <p>
          The systems that survive are the ones with clear boundaries. Not
          microservices necessarily — just clear contracts between parts. A
          well-bounded module can be understood without understanding everything
          around it.
        </p>

        <p>
          I think of boundaries like cell walls in biology. They're permeable
          where they need to be, rigid where they don't. They allow internal
          complexity while presenting a simple surface to the outside world.
        </p>

        {/* Another callout */}
        <div className="callout">
          <div className="callout-icon">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="callout-content">
            <p>
              The best boundaries are often organizational, not technical. Draw
              them where different teams think differently, where deployment
              cadences diverge, where domain expertise lives.
            </p>
          </div>
        </div>

        <p>
          When I join a new codebase, I look for the boundaries first. If I
          can't find them, that tells me more about the system's health than any
          metric could.
        </p>
      </section>

      {/* Final section */}
      <section id="surviving-success" data-section>
        <h2 className="section-heading group">
          <a
            href="#surviving-success"
            className="anchor-link"
            aria-label="Link to section"
          >
            <Hash className="w-4 h-4" />
          </a>
          The hardest part is surviving success
        </h2>

        <p>
          Most advice focuses on building things that work. Less is written
          about building things that survive working well. Success creates its
          own pressures — more users, more features, more people, more edge
          cases.
        </p>

        <p>
          The systems I've seen survive success share a common trait: they were
          built by people who planned to be wrong. Every major decision was made
          reversible where possible. Every boundary included escape hatches.
          Every abstraction had a migration path.
        </p>

        <p>
          This isn't pessimism — it's pragmatic optimism. You're building for a
          future where you know more than you do today. Give that future-you
          room to act on their better knowledge.
        </p>
      </section>
    </article>
  );
});

export default ArticleContent;
