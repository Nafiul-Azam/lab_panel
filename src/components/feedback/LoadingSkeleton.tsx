export function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-4 w-1/3 rounded bg-clinic-100" />
      <div className="h-16 rounded-2xl bg-clinic-100" />
      <div className="h-16 rounded-2xl bg-clinic-100" />
    </div>
  );
}
