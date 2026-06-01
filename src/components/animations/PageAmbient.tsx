/** Subtle depth only — no colored blobs */
export default function PageAmbient() {
  return (
    <div
      className="fixed inset-0 -z-20 pointer-events-none aria-hidden"
      aria-hidden
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 50% -30%, hsl(var(--foreground) / 0.03), transparent 55%)",
      }}
    />
  );
}
