import { SPORTS } from '../sports';

export function BackgroundIcons() {
  return (
    <>
      {[0, 1, 2, 3].map((idx) => {
        const sport = SPORTS[idx % SPORTS.length];
        const animationNames = ['float1', 'float2', 'float3', 'float4'];
        const durations = ['8s', '10s', '12s', '9s'];
        const positions = [
          { top: '10%', left: '5%' },
          { top: '20%', right: '8%' },
          { top: '60%', left: '10%' },
          { bottom: '15%', right: '5%' },
        ];

        return (
          <div
            key={`bg-sport-${idx}`}
            className="sport-bg-icon"
            style={{
              ...positions[idx],
              animation: `${animationNames[idx]} ${durations[idx]} ease-in-out infinite`,
            }}
          >
            <sport.icon className="w-32 h-32 text-slate-700" strokeWidth={0.5} />
          </div>
        );
      })}
    </>
  );
}
