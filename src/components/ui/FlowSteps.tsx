interface FlowStepsProps {
  steps: string[];
}

export default function FlowSteps({ steps }: FlowStepsProps) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-foreground">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span aria-hidden className="text-accent">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
