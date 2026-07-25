"use client";

const navItems = ["Overview", "Analytics", "Reports", "Insights", "Settings"];

const stats = [
  { label: "Total Insights", value: "1,284" },
  { label: "Data Sources", value: "42" },
  { label: "Accuracy", value: "98.7%" },
];

const bars = [
  { label: "Neural Net", width: "85%", color: "#8b5cf6" },
  { label: "Regression", width: "65%", color: "#3b82f6" },
  { label: "Clustering", width: "50%", color: "#06b6d4" },
  { label: "Anomaly Detection", width: "40%", color: "#10b981" },
  { label: "Forecast", width: "72%", color: "#6366f1" },
];

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-24 px-6">
      <div className="w-full max-w-5xl rounded-2xl border border-zinc-800 overflow-hidden flex h-[600px]">

        {/* Sidebar */}
        <aside className="w-52 bg-zinc-900 flex flex-col p-5 shrink-0">
          <div className="text-white font-bold text-xl mb-10 tracking-tight">⬡ Xai</div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div
                key={item}
                className={`px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                  item === "Overview"
                    ? "bg-white text-black font-medium"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main panel */}
        <main className="flex-1 bg-[#111111] p-8 overflow-y-auto">
          <p className="text-zinc-500 text-sm">Good morning,</p>
          <h2 className="text-white text-2xl font-semibold mt-1 mb-8">Here&apos;s your overview</h2>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl p-5 border border-zinc-800"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <p className="text-zinc-500 text-xs mb-2">{label}</p>
                <p className="text-white text-2xl font-bold">{value}</p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div
            className="rounded-xl p-6 border border-zinc-800"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <p className="text-zinc-400 text-sm font-medium mb-5">Model Performance</p>
            <div className="flex flex-col gap-4">
              {bars.map(({ label, width, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-zinc-400 text-xs w-36 shrink-0">{label}</span>
                  <div className="flex-1 bg-zinc-800 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width, backgroundColor: color }}
                    />
                  </div>
                  <span className="text-zinc-500 text-xs w-8 text-right">{width}</span>
                </div>
              ))}
            </div>
          </div>
        </main>

      </div>
    </section>
  );
}
