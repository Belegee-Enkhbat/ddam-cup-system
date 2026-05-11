import type { Player } from '../types';

export function getPlayerQuality(player: Player): { label: string; color: string; textColor: string } {
  const scores = Object.values(player.sportScores);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

  if (avg >= 7.5) return { label: 'EXCELLENT', color: 'bg-emerald-500/20 border-emerald-500/50', textColor: 'text-emerald-400' };
  if (avg >= 6.5) return { label: 'VERY GOOD', color: 'bg-cyan-500/20 border-cyan-500/50', textColor: 'text-cyan-400' };
  if (avg >= 5) return { label: 'GOOD', color: 'bg-blue-500/20 border-blue-500/50', textColor: 'text-blue-400' };
  return { label: 'DEVELOPING', color: 'bg-slate-500/20 border-slate-500/50', textColor: 'text-slate-400' };
}
