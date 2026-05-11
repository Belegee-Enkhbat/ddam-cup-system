export function GlobalStyles() {
  return (
    <style>{`
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes floatCard {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-8px);
        }
      }

      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }

      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes float1 {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
        50% { transform: translateY(-30px) translateX(20px); opacity: 0.3; }
      }

      @keyframes float2 {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.08; }
        50% { transform: translateY(40px) translateX(-25px); opacity: 0.25; }
      }

      @keyframes float3 {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.12; }
        50% { transform: translateY(-25px) translateX(-30px); opacity: 0.28; }
      }

      @keyframes float4 {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.09; }
        50% { transform: translateY(35px) translateX(35px); opacity: 0.26; }
      }

      .sport-bg-icon {
        position: absolute;
        pointer-events: none;
      }

      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }

      .animate-floatCard {
        animation: floatCard 3s ease-in-out infinite;
      }

      .shimmer-effect {
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
      }

      div::-webkit-scrollbar {
        height: 6px;
        width: 6px;
      }

      div::-webkit-scrollbar-track {
        background: transparent;
      }

      div::-webkit-scrollbar-thumb {
        background: rgba(148, 163, 184, 0.3);
        border-radius: 3px;
      }

      div::-webkit-scrollbar-thumb:hover {
        background: rgba(148, 163, 184, 0.5);
      }

      * {
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
      }

      button {
        position: relative;
      }

      button::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at var(--mx, 0) var(--my, 0), rgba(255, 255, 255, 0.05), transparent);
        pointer-events: none;
        border-radius: inherit;
      }
    `}</style>
  );
}
