"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BOLIVIA_DATA = [
  { month: "M1", volume: 10, label: "Jan" },
  { month: "M2", volume: 28, label: "Feb" },
  { month: "M3", volume: 65, label: "Mar" },
  { month: "M4", volume: 120, label: "Apr" },
  { month: "M5", volume: 195, label: "May" },
  { month: "M6", volume: 285, label: "Jun" },
  { month: "M7", volume: 370, label: "Jul" },
  { month: "M8", volume: 480, label: "Aug" },
  { month: "M9", volume: 580, label: "Sep" },
  { month: "M10", volume: 700, label: "Oct" },
];

const BRAZIL_DATA = [
  { month: "M1", volume: 900, label: "Jan" },
  { month: "M2", volume: 1100, label: "Feb" },
  { month: "M3", volume: 1650, label: "Mar" },
  { month: "M4", volume: 2700, label: "Apr" },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glow-card px-3 py-2 text-xs font-mono">
      <div className="text-neutral-500 mb-1">{label}</div>
      <div className="text-blue-400 font-bold">${payload[0].value}K/mo</div>
    </div>
  );
}

interface GrowthChartProps {
  type?: "bolivia" | "brazil";
  height?: number;
}

export function GrowthChart({ type = "bolivia", height = 200 }: GrowthChartProps) {
  const data = type === "bolivia" ? BOLIVIA_DATA : BRAZIL_DATA;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
        <defs>
          <linearGradient id={`grad-${type}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.01} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
        <XAxis
          dataKey="label"
          tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 10, fontFamily: "monospace" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 10, fontFamily: "monospace" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="volume"
          stroke="#3b82f6"
          strokeWidth={2}
          fill={`url(#grad-${type})`}
          dot={false}
          activeDot={{ r: 4, fill: "#3b82f6", stroke: "#fff", strokeWidth: 1 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
