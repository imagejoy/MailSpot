import { Mail, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const metrics = [
  { label: 'Emails today', value: '142', icon: Mail, sub: '↑ 12% from yesterday' },
  { label: 'Auto-replied', value: '128', icon: CheckCircle2, sub: '90% handle rate' },
  { label: 'Avg response', value: '4s', icon: Clock, sub: 'Was 6h manually' },
  { label: 'Escalated', value: '14', icon: AlertTriangle, sub: '2 urgent · 12 review' },
];

const categories = [
  { label: 'Product questions', pct: 42, color: 'bg-emerald-500' },
  { label: 'Billing inquiries', pct: 28, color: 'bg-landing-dark' },
  { label: 'Support requests', pct: 18, color: 'bg-amber-500' },
  { label: 'Feature requests', pct: 8, color: 'bg-blue-500' },
  { label: 'Escalated', pct: 4, color: 'bg-red-500' },
];

const recentReplies = [
  { from: 'Sarah Chen', subject: 'Order #1042 status', status: 'Auto-replied', time: '2s' },
  { from: 'Marcus Webb', subject: 'Cancel subscription', status: 'Escalated', time: '—' },
  { from: 'Priya Nair', subject: 'Integration docs?', status: 'Auto-replied', time: '3s' },
  { from: 'Tom Kirby', subject: 'Billing question', status: 'Auto-replied', time: '1s' },
  { from: 'Aisha Powell', subject: 'Feature request', status: 'Queued', time: '—' },
];

const statusColor: Record<string, string> = {
  'Auto-replied': 'text-emerald-700 border-emerald-300 bg-emerald-50',
  'Escalated': 'text-red-700 border-red-300 bg-red-50',
  'Queued': 'text-amber-700 border-amber-300 bg-amber-50',
};

export function LandingDemoDashboard() {
  return (
    <div className="p-4 sm:p-6 space-y-4 text-[#0a0a0a]" style={{ backgroundColor: '#f7f7f4', fontFamily: "'Onest', system-ui, sans-serif", fontSize: '13px' }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <Mail className="h-4 w-4" />
        <span className="font-medium text-sm tracking-tight">MailSpot</span>
        <span className="text-landing-light-muted text-xs ml-2">/ Inbox</span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics.map(m => (
          <div key={m.label} className="rounded-lg border border-landing-grid bg-white p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-landing-light-muted font-medium">{m.label}</span>
              <m.icon className="h-3.5 w-3.5 text-landing-light-muted" />
            </div>
            <div className="text-lg font-bold leading-tight">{m.value}</div>
            <p className="text-[10px] text-landing-light-muted mt-0.5">{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Category breakdown */}
      <div className="rounded-lg border border-landing-grid bg-white p-3">
        <p className="text-xs font-semibold mb-3">Email categories</p>
        <div className="space-y-2">
          {categories.map(c => (
            <div key={c.label} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px]">{c.label}</span>
                <span className="text-[11px] tabular-nums text-landing-light-muted">{c.pct}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-landing-grid/60">
                <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent replies table */}
      <div className="rounded-lg border border-landing-grid bg-white p-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold">Recent replies</p>
          <span className="text-[10px] text-landing-light-muted">View all →</span>
        </div>
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-landing-grid text-landing-light-muted">
              <th className="text-left font-medium pb-2">From</th>
              <th className="text-left font-medium pb-2 hidden sm:table-cell">Subject</th>
              <th className="text-left font-medium pb-2">Status</th>
              <th className="text-right font-medium pb-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {recentReplies.map(r => (
              <tr key={r.from + r.subject} className="border-b border-landing-grid/50 last:border-0">
                <td className="py-2 font-medium">{r.from}</td>
                <td className="py-2 text-landing-light-muted hidden sm:table-cell">{r.subject}</td>
                <td className="py-2">
                  <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${statusColor[r.status] ?? ''}`}>
                    {r.status}
                  </Badge>
                </td>
                <td className="py-2 text-right tabular-nums text-landing-light-muted">{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
