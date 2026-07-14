import { useMemo } from "react";


const AnimatedBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Background */}

      <div className="absolute inset-0 bg-[#09090B]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Aurora */}

      <div className="absolute -top-60 -left-44 w-[750px] h-[750px] bg-violet-700/25 rounded-full blur-[160px] animate-pulse" />

      <div
        className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[180px]"
        style={{
          animation: "blob 18s infinite alternate",
        }}
      />

      <div
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"
        style={{
          animation: "blob2 16s infinite alternate",
        }}
      />

      {/* Center Glow */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="w-[450px] h-[450px] rounded-full bg-violet-500/10 blur-[120px]" />

      </div>

      {/* Particles */}

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Shooting Star */}

      <div
        className="absolute top-16 left-0 w-40 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg,transparent,white,transparent)",
          animation: "shoot 8s linear infinite",
        }}
      />

      {/* Noise Overlay */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Animations */}

      <style>{`

        @keyframes float{

          0%{
            transform:translateY(0px);
            opacity:.25;
          }

          50%{
            transform:translateY(-18px);
            opacity:.9;
          }

          100%{
            transform:translateY(0px);
            opacity:.25;
          }

        }

        @keyframes blob{

          0%{
            transform:translate(0,0) scale(1);
          }

          50%{
            transform:translate(-80px,-40px) scale(1.15);
          }

          100%{
            transform:translate(40px,40px) scale(.95);
          }

        }

        @keyframes blob2{

          0%{
            transform:translate(0,0);
          }

          100%{
            transform:translate(120px,-60px);
          }

        }

        @keyframes shoot{

          0%{
            transform:translateX(-200px);
            opacity:0;
          }

          10%{
            opacity:1;
          }

          70%{
            opacity:1;
          }

          100%{
            transform:translateX(1700px);
            opacity:0;
          }

        }

      `}</style>
    </div>
  );
};

export default AnimatedBackground;