import {
  Activity,
  Bell,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Cloud,
  Database,
  Filter,
  Gauge,
  Layers3,
  MoreHorizontal,
  Search,
  Server,
  Settings,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const metrics = [
  {
    title: "Active Pipelines",
    value: "128",
    variation: "+12.8%",
    description: "vs. previous month",
    icon: Workflow,
    chart: [24, 35, 30, 48, 42, 58, 52, 70, 64, 82, 78, 92],
  },
  {
    title: "Data Processed",
    value: "48.6 TB",
    variation: "+18.2%",
    description: "across all platforms",
    icon: Database,
    chart: [20, 24, 32, 28, 39, 47, 43, 52, 61, 58, 72, 79],
  },
  {
    title: "Success Rate",
    value: "99.84%",
    variation: "+0.21%",
    description: "last 30 days",
    icon: CheckCircle2,
    chart: [72, 74, 73, 78, 76, 81, 80, 86, 85, 89, 91, 94],
  },
  {
    title: "Cloud Cost",
    value: "$18.4K",
    variation: "-8.7%",
    description: "optimized this month",
    icon: CircleDollarSign,
    chart: [88, 85, 82, 76, 79, 70, 68, 62, 65, 55, 52, 48],
    positive: true,
  },
];

const pipelineVolume = [
  { day: "Mon", ingestion: 48, transformation: 72, analytics: 42 },
  { day: "Tue", ingestion: 64, transformation: 54, analytics: 58 },
  { day: "Wed", ingestion: 55, transformation: 84, analytics: 64 },
  { day: "Thu", ingestion: 76, transformation: 69, analytics: 52 },
  { day: "Fri", ingestion: 68, transformation: 91, analytics: 73 },
  { day: "Sat", ingestion: 42, transformation: 52, analytics: 36 },
  { day: "Sun", ingestion: 58, transformation: 74, analytics: 48 },
];

const pipelines = [
  {
    name: "customer_360_pipeline",
    source: "PostgreSQL",
    destination: "Snowflake",
    status: "Healthy",
    duration: "04m 18s",
    records: "8.4M",
    lastRun: "2 min ago",
  },
  {
    name: "ecommerce_orders_elt",
    source: "Amazon S3",
    destination: "dbt Core",
    status: "Healthy",
    duration: "06m 42s",
    records: "12.8M",
    lastRun: "8 min ago",
  },
  {
    name: "marketing_events_stream",
    source: "Kafka",
    destination: "Databricks",
    status: "Running",
    duration: "02m 14s",
    records: "4.7M",
    lastRun: "Now",
  },
  {
    name: "finance_daily_snapshot",
    source: "Oracle",
    destination: "Redshift",
    status: "Warning",
    duration: "12m 38s",
    records: "2.1M",
    lastRun: "16 min ago",
  },
];

const qualityMetrics = [
  {
    title: "Completeness",
    value: 98,
    description: "12.4K fields validated",
  },
  {
    title: "Accuracy",
    value: 96,
    description: "4.8K rules passed",
  },
  {
    title: "Freshness",
    value: 92,
    description: "3 delayed datasets",
  },
];

const activities = [
  {
    icon: Check,
    title: "Pipeline completed",
    description: "customer_360_pipeline processed 8.4M rows",
    time: "2 min ago",
    type: "success",
  },
  {
    icon: Sparkles,
    title: "dbt models deployed",
    description: "18 models published to production",
    time: "14 min ago",
    type: "info",
  },
  {
    icon: Zap,
    title: "Warehouse optimized",
    description: "Monthly compute cost reduced by 8.7%",
    time: "38 min ago",
    type: "success",
  },
  {
    icon: Bell,
    title: "Freshness warning",
    description: "finance_daily_snapshot exceeded its SLA",
    time: "1 hour ago",
    type: "warning",
  },
];

const Sparkline = ({ values }) => {
  const width = 120;
  const height = 42;
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const range = maxValue - minValue || 1;

  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - minValue) / range) * (height - 8) - 4;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-11 w-28 overflow-visible"
    >
      <defs>
        <linearGradient
          id="sparkline-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      <polyline
        points={points}
        fill="none"
        stroke="url(#sparkline-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MetricCard = ({ metric }) => {
  const Icon = metric.icon;

  return (
    <article className="relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0f141e]/90 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.14),transparent_68%)]" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-400/15 bg-slate-400/[0.07]">
              <Icon size={19} className="text-slate-300" />
            </div>

            <span className="text-sm font-medium text-slate-400">
              {metric.title}
            </span>
          </div>

          <p className="text-[28px] font-bold tracking-[-0.04em] text-white">
            {metric.value}
          </p>

          <div className="mt-2 flex items-center gap-2 text-xs">
            <span
              className={
                metric.positive
                  ? "font-semibold text-emerald-400"
                  : "font-semibold text-sky-400"
              }
            >
              {metric.variation}
            </span>

            <span className="text-slate-500">{metric.description}</span>
          </div>
        </div>

        <div className="mt-auto self-end opacity-90">
          <Sparkline values={metric.chart} />
        </div>
      </div>
    </article>
  );
};

const VolumeChart = () => {
  return (
    <article className="rounded-[26px] border border-white/[0.07] bg-[#0f141e]/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-semibold text-white">
            Data Processing Volume
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Daily workloads across the data platform
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300">
          Last 7 days
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="mt-5 flex items-end justify-between gap-6">
        <div>
          <p className="text-3xl font-bold tracking-tight text-white">
            48.6 TB
          </p>

          <p className="mt-1 text-xs font-medium text-emerald-400">
            ↑ 18.2% from last week
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
            Ingestion
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            Transformation
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            Analytics
          </div>
        </div>
      </div>

      <div className="relative mt-8 h-[210px]">
        <div className="absolute inset-0 flex flex-col justify-between">
          {[100, 75, 50, 25, 0].map((value) => (
            <div key={value} className="flex items-center gap-3">
              <span className="w-7 text-[10px] text-slate-600">{value}</span>
              <div className="h-px flex-1 bg-white/[0.045]" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-10 right-0 top-0 flex items-end justify-between gap-5">
          {pipelineVolume.map((item) => (
            <div
              key={item.day}
              className="flex h-full flex-1 flex-col items-center justify-end"
            >
              <div className="flex h-[175px] w-full items-end justify-center gap-1.5">
                <div
                  className="w-[18%] min-w-[7px] rounded-t-md bg-slate-600"
                  style={{ height: `${item.ingestion}%` }}
                />

                <div
                  className="w-[18%] min-w-[7px] rounded-t-md bg-sky-500"
                  style={{ height: `${item.transformation}%` }}
                />

                <div
                  className="w-[18%] min-w-[7px] rounded-t-md bg-cyan-300"
                  style={{ height: `${item.analytics}%` }}
                />
              </div>

              <span className="mt-3 text-[11px] font-medium text-slate-500">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

const PlatformHealth = () => {
  return (
    <article className="rounded-[26px] border border-white/[0.07] bg-[#0f141e]/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Platform Health</p>

          <p className="mt-1 text-sm text-slate-500">
            Real-time infrastructure status
          </p>
        </div>

        <span className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Operational
        </span>
      </div>

      <div className="mt-7 flex items-center gap-8">
        <div className="relative flex h-44 w-44 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#38bdf8_0deg,#38bdf8_323deg,#1d2634_323deg,#1d2634_360deg)]">
          <div className="flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full bg-[#0f141e]">
            <span className="text-4xl font-bold tracking-tight text-white">
              99.8
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Health score
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-5">
          {[
            {
              name: "Apache Airflow",
              icon: Workflow,
              value: "99.9%",
              status: "Healthy",
            },
            {
              name: "Snowflake",
              icon: Database,
              value: "99.8%",
              status: "Healthy",
            },
            {
              name: "AWS Services",
              icon: Cloud,
              value: "99.7%",
              status: "Healthy",
            },
            {
              name: "Databricks",
              icon: Boxes,
              value: "99.9%",
              status: "Healthy",
            },
          ].map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
                    <Icon size={15} className="text-slate-400" />
                  </div>

                  <span className="text-sm font-medium text-slate-300">
                    {service.name}
                  </span>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-white">
                    {service.value}
                  </p>

                  <p className="text-[10px] text-emerald-400">
                    {service.status}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

const PipelineTable = () => {
  const statusClasses = {
    Healthy:
      "border-emerald-400/15 bg-emerald-400/[0.07] text-emerald-400",
    Running: "border-sky-400/15 bg-sky-400/[0.07] text-sky-400",
    Warning: "border-amber-400/15 bg-amber-400/[0.07] text-amber-400",
  };

  return (
    <article className="overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#0f141e]/90 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <div>
          <p className="text-lg font-semibold text-white">Pipeline Monitor</p>

          <p className="mt-1 text-sm text-slate-500">
            Latest production workflow executions
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300">
          <Filter size={14} />
          Filter
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="border-b border-white/[0.05] text-[10px] uppercase tracking-[0.14em] text-slate-600">
              <th className="px-6 py-4 font-semibold">Pipeline</th>
              <th className="px-4 py-4 font-semibold">Source</th>
              <th className="px-4 py-4 font-semibold">Destination</th>
              <th className="px-4 py-4 font-semibold">Status</th>
              <th className="px-4 py-4 font-semibold">Duration</th>
              <th className="px-4 py-4 font-semibold">Records</th>
              <th className="px-4 py-4 font-semibold">Last run</th>
              <th className="px-5 py-4" />
            </tr>
          </thead>

          <tbody>
            {pipelines.map((pipeline) => (
              <tr
                key={pipeline.name}
                className="border-b border-white/[0.045] last:border-0"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-400/10 bg-slate-400/[0.05]">
                      <Workflow size={15} className="text-slate-400" />
                    </div>

                    <span className="text-sm font-semibold text-slate-200">
                      {pipeline.name}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4 text-xs text-slate-400">
                  {pipeline.source}
                </td>

                <td className="px-4 py-4 text-xs text-slate-400">
                  {pipeline.destination}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusClasses[pipeline.status]}`}
                  >
                    {pipeline.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-xs text-slate-400">
                  {pipeline.duration}
                </td>

                <td className="px-4 py-4 text-xs font-medium text-slate-300">
                  {pipeline.records}
                </td>

                <td className="px-4 py-4 text-xs text-slate-500">
                  {pipeline.lastRun}
                </td>

                <td className="px-5 py-4">
                  <MoreHorizontal size={17} className="text-slate-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

const DataQuality = () => {
  return (
    <article className="rounded-[26px] border border-white/[0.07] bg-[#0f141e]/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Data Quality</p>

          <p className="mt-1 text-sm text-slate-500">
            Reliability of critical datasets
          </p>
        </div>

        <Gauge size={20} className="text-slate-500" />
      </div>

      <div className="mt-7 space-y-6">
        {qualityMetrics.map((metric) => (
          <div key={metric.title}>
            <div className="mb-2 flex items-end justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300">
                  {metric.title}
                </p>

                <p className="mt-1 text-[10px] text-slate-600">
                  {metric.description}
                </p>
              </div>

              <span className="text-sm font-bold text-white">
                {metric.value}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-slate-500 via-sky-500 to-cyan-300"
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">Overall quality score</span>

          <span className="text-lg font-bold text-white">95.3%</span>
        </div>

        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          17,248 automated validation rules executed successfully.
        </p>
      </div>
    </article>
  );
};

const RecentActivity = () => {
  const activityClasses = {
    success: "bg-emerald-400/[0.08] text-emerald-400",
    info: "bg-sky-400/[0.08] text-sky-400",
    warning: "bg-amber-400/[0.08] text-amber-400",
  };

  return (
    <article className="rounded-[26px] border border-white/[0.07] bg-[#0f141e]/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
      <div>
        <p className="text-lg font-semibold text-white">Recent Activity</p>

        <p className="mt-1 text-sm text-slate-500">
          Latest platform updates
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div key={activity.title} className="flex gap-3">
              <div
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${activityClasses[activity.type]}`}
              >
                <Icon size={15} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-300">
                    {activity.title}
                  </p>

                  <span className="shrink-0 text-[10px] text-slate-600">
                    {activity.time}
                  </span>
                </div>

                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

const RafaelDashboard = () => {
  const navigation = [
    { label: "Overview", icon: Layers3, active: true },
    { label: "Pipelines", icon: Workflow },
    { label: "Infrastructure", icon: Server },
    { label: "Data Quality", icon: Gauge },
    { label: "Analytics", icon: Activity },
    { label: "Cloud Costs", icon: CircleDollarSign },
  ];

  return (
    <section className="min-h-screen overflow-hidden bg-[#080b12] p-4 font-sans text-white md:p-6">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_86%_15%,rgba(100,116,139,0.1),transparent_28%)]" />

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto flex min-h-[970px] max-w-[1800px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#0a0e16]/95 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
        <aside className="hidden w-[245px] shrink-0 border-r border-white/[0.06] bg-[#0b0f17] p-5 xl:flex xl:flex-col">
          <div className="flex items-center gap-3 px-2 py-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-500 to-sky-400 shadow-[0_10px_35px_rgba(56,189,248,0.18)]">
              <span className="text-lg font-black text-white">R</span>
            </div>

            <div>
              <p className="font-bold tracking-tight text-white">
                Rafael Data
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Dashboard
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">
              Workspace
            </p>

            <nav className="mt-3 space-y-1.5">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium ${
                      item.active
                        ? "border border-sky-400/10 bg-sky-400/[0.08] text-sky-300"
                        : "border border-transparent text-slate-500"
                    }`}
                  >
                    <Icon size={17} />
                    {item.label}

                    {item.active && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-300" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="mt-8">
            <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">
              Environments
            </p>

            <div className="mt-4 space-y-4 px-3">
              {[
                { name: "Production", color: "bg-emerald-400", value: "84%" },
                { name: "Staging", color: "bg-sky-400", value: "11%" },
                { name: "Development", color: "bg-slate-500", value: "5%" },
              ].map((environment) => (
                <div
                  key={environment.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-2 w-2 rounded-full ${environment.color}`}
                    />

                    <span className="text-xs text-slate-500">
                      {environment.name}
                    </span>
                  </div>

                  <span className="text-[10px] font-medium text-slate-700">
                    {environment.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-400/[0.08]">
                <Cloud size={17} className="text-slate-400" />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-300">
                  Cloud capacity
                </p>

                <p className="mt-0.5 text-[10px] text-slate-600">
                  68% of monthly quota
                </p>
              </div>
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-slate-500 to-sky-400" />
            </div>

            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] py-2.5 text-xs font-semibold text-slate-400">
              <Settings size={14} />
              Workspace settings
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5 lg:px-8">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold tracking-[-0.04em] text-white lg:text-3xl">
                  Rafael&apos;s Dashboard
                </h1>

                <span className="hidden rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-2.5 py-1 text-[10px] font-semibold text-emerald-400 sm:block">
                  LIVE
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500 lg:text-sm">
                Unified data engineering and analytics command center
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 lg:flex">
                <Search size={15} className="text-slate-600" />

                <span className="w-40 text-xs text-slate-600">
                  Search platform...
                </span>

                <span className="rounded-md border border-white/[0.06] bg-white/[0.04] px-1.5 py-0.5 text-[9px] text-slate-600">
                  ⌘ K
                </span>
              </div>

              <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                <Bell size={17} className="text-slate-400" />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
              </button>

              <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-1.5 pr-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-sky-500 text-xs font-bold">
                  RS
                </div>

                <div className="hidden text-left sm:block">
                  <p className="text-xs font-semibold text-slate-300">
                    Rafael Oliveira
                  </p>

                  <p className="text-[9px] text-slate-600">Data Engineer</p>
                </div>

                <ChevronDown size={13} className="text-slate-600" />
              </div>
            </div>
          </header>

          <div className="space-y-5 p-5 lg:p-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
              {metrics.map((metric) => (
                <MetricCard key={metric.title} metric={metric} />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-5 2xl:grid-cols-[1.45fr_0.85fr]">
              <VolumeChart />
              <PlatformHealth />
            </div>

            <PipelineTable />

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              <DataQuality />
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default RafaelDashboard;