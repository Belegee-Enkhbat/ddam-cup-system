export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden" style={{ backgroundColor: 'rgb(2, 6, 23)' }}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-animate {
          background: linear-gradient(-45deg, #00d4ff, #0099ff, #00d4ff);
          background-size: 300% 300%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 gradient-animate rounded-full blur-xl opacity-50" />
          <div className="absolute inset-0 border-2 border-transparent border-t-cyan-400 border-r-blue-400 rounded-full animate-spin" />
        </div>
        <div className="text-slate-400 font-light tracking-widest text-sm">LOADING TEAMS</div>
      </div>
    </div>
  );
}
