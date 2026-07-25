"use client";

import { useState } from "react";

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

const weekBars = [
  { day: "Mon", height: 40 },
  { day: "Tue", height: 80 },
  { day: "Wed", height: 60 },
  { day: "Thu", height: 120 },
  { day: "Fri", height: 90 },
  { day: "Sat", height: 110 },
  { day: "Sun", height: 75 },
];

const reports = [
  { name: "Q2 Intelligence Report", status: "Completed", color: "#16a34a" },
  { name: "Anomaly Detection Summary", status: "In Progress", color: "#ca8a04" },
  { name: "Forecast Analysis", status: "Completed", color: "#16a34a" },
  { name: "Data Audit", status: "Pending", color: "#52525b" },
];

const insights = [
  { border: "#7c3aed", title: "Spike Detected", desc: "Unusual traffic pattern identified at 03:00 UTC" },
  { border: "#ef4444", title: "Model Drift Alert", desc: "Regression accuracy dropped by 4.2% over 48 hours" },
  { border: "#22c55e", title: "New Cluster Found", desc: "847 records grouped into a previously unseen behavioral segment" },
];

const settingRows = [
  { label: "Workspace Name", type: "input", value: "Xai Workspace" },
  { label: "API Key", type: "masked", value: "••••••••••••••••" },
  { label: "Notifications", type: "toggle" },
  { label: "Data Retention", type: "text", value: "90 days" },
];

const panel: React.CSSProperties = { backgroundColor: "#1a1a1a", borderRadius: "12px", padding: "20px", border: "1px solid #27272a" };
const title: React.CSSProperties = { fontSize: "18px", fontWeight: 600, color: "white", marginBottom: "20px" };

function AnalyticsView() {
  return (
    <div>
      <p style={title}>Weekly Performance</p>
      <div style={{ ...panel, marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "140px" }}>
          {weekBars.map(({ day, height }) => (
            <div key={day} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flex: 1 }}>
              <div style={{ width: "100%", height: `${height}px`, backgroundColor: "#7c3aed", borderRadius: "4px 4px 0 0" }} />
              <span style={{ fontSize: "11px", color: "#a1a1aa" }}>{day}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={panel}>
        {[{ label: "Avg Daily Insights", value: "183" }, { label: "Peak Day", value: "Thursday" }].map(({ label, value }) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #27272a" }}>
            <span style={{ fontSize: "13px", color: "#a1a1aa" }}>{label}</span>
            <span style={{ fontSize: "13px", color: "white", fontWeight: 500 }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportsView() {
  return (
    <div>
      <p style={title}>Recent Reports</p>
      <div style={panel}>
        {reports.map(({ name, status, color }) => (
          <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #27272a" }}>
            <span style={{ fontSize: "13px", color: "white" }}>{name}</span>
            <span style={{ fontSize: "11px", color: "white", backgroundColor: color, padding: "3px 10px", borderRadius: "999px", fontWeight: 500 }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightsView() {
  return (
    <div>
      <p style={title}>AI Insights</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {insights.map(({ border, title: t, desc }) => (
          <div key={t} style={{ ...panel, borderLeft: `4px solid ${border}` }}>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "white", marginBottom: "4px" }}>{t}</p>
            <p style={{ fontSize: "12px", color: "#a1a1aa" }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsView() {
  return (
    <div>
      <p style={title}>Settings</p>
      <div style={panel}>
        {settingRows.map(({ label, type, value }) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #27272a" }}>
            <span style={{ fontSize: "13px", color: "#a1a1aa" }}>{label}</span>
            {type === "input" && (
              <input readOnly value={value} style={{ backgroundColor: "#0a0a0a", border: "1px solid #3f3f46", borderRadius: "6px", padding: "4px 10px", fontSize: "13px", color: "white", width: "160px" }} />
            )}
            {type === "masked" && (
              <input readOnly value={value} style={{ backgroundColor: "#0a0a0a", border: "1px solid #3f3f46", borderRadius: "6px", padding: "4px 10px", fontSize: "13px", color: "#a1a1aa", width: "160px", letterSpacing: "2px" }} />
            )}
            {type === "toggle" && (
              <div style={{ width: "40px", height: "22px", backgroundColor: "#16a34a", borderRadius: "999px", position: "relative" }}>
                <div style={{ position: "absolute", right: "3px", top: "3px", width: "16px", height: "16px", backgroundColor: "white", borderRadius: "50%" }} />
              </div>
            )}
            {type === "text" && (
              <span style={{ fontSize: "13px", color: "white" }}>{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [active, setActive] = useState("Overview");

  return (
    <section style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", padding: "96px 24px" }}>
      <div style={{ width: "100%", maxWidth: "960px", borderRadius: "16px", border: "1px solid #27272a", overflow: "hidden", display: "flex", height: "600px" }}>

        {/* Sidebar */}
        <aside style={{ width: "208px", backgroundColor: "#111111", display: "flex", flexDirection: "column", padding: "20px", flexShrink: 0 }}>
          <div style={{ color: "white", fontWeight: 700, fontSize: "20px", marginBottom: "40px", letterSpacing: "-0.5px" }}>⬡ Xai</div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {navItems.map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  cursor: "pointer",
                  backgroundColor: active === item ? "#ffffff" : "transparent",
                  color: active === item ? "#000000" : "#a1a1aa",
                  fontWeight: active === item ? 500 : 400,
                  transition: "background-color 0.15s, color 0.15s",
                }}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main panel */}
        <main style={{ flex: 1, backgroundColor: "#0f0f0f", padding: "32px", overflowY: "auto" }}>
          {active === "Overview" && (
            <>
              <p style={{ fontSize: "13px", color: "#71717a", marginBottom: "4px" }}>Good morning,</p>
              <h2 style={{ fontSize: "22px", fontWeight: 600, color: "white", marginBottom: "28px" }}>Here&apos;s your overview</h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "24px" }}>
                {stats.map(({ label, value }) => (
                  <div key={label} style={panel}>
                    <p style={{ fontSize: "11px", color: "#71717a", marginBottom: "8px" }}>{label}</p>
                    <p style={{ fontSize: "24px", fontWeight: 700, color: "white" }}>{value}</p>
                  </div>
                ))}
              </div>

              <div style={panel}>
                <p style={{ fontSize: "13px", color: "#a1a1aa", fontWeight: 500, marginBottom: "20px" }}>Model Performance</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {bars.map(({ label, width, color }) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontSize: "12px", color: "#a1a1aa", width: "140px", flexShrink: 0 }}>{label}</span>
                      <div style={{ flex: 1, backgroundColor: "#27272a", borderRadius: "999px", height: "8px" }}>
                        <div style={{ width, backgroundColor: color, height: "8px", borderRadius: "999px" }} />
                      </div>
                      <span style={{ fontSize: "12px", color: "#71717a", width: "32px", textAlign: "right" }}>{width}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {active === "Analytics" && <AnalyticsView />}
          {active === "Reports" && <ReportsView />}
          {active === "Insights" && <InsightsView />}
          {active === "Settings" && <SettingsView />}
        </main>

      </div>
    </section>
  );
}
