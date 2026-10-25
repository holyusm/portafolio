import type { ProjectStatus } from "@/content/types";

const color: Record<ProjectStatus, string> = {
  live: "bg-[var(--live)]",
  development: "bg-accent",
  delivered: "bg-muted",
};

export function StatusDot({
  status,
  label,
}: {
  status: ProjectStatus;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 text-sm">
      <span aria-hidden className={`size-2.5 rounded-full ${color[status]}`} />
      {label}
    </span>
  );
}
