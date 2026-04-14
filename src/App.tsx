import { useEffect, useState } from 'react';
import './styles.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const letters = ['П', 'Р', 'И', 'В', 'Е', 'Т'];
  const greetings = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo', 'Olá'];

  return (
    <div className="min-h-dvh bg-cream relative overflow-hidden flex flex-col">
      {/* Geometric background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large diagonal stripe */}
        <div
          className={`absolute -top-20 -left-20 w-[60vw] h-[200vh] bg-soviet-red transform -rotate-12 origin-top-left transition-transform duration-1000 ease-out ${loaded ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ transitionDelay: '200ms' }}
        />

        {/* Circle accent */}
        <div
          className={`absolute top-[10%] right-[5%] w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border-8 border-charcoal transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transitionDelay: '600ms' }}
        />

        {/* Small geometric accents */}
        <div
          className={`absolute bottom-[20%] right-[15%] w-16 h-16 md:w-24 md:h-24 bg-golden rotate-45 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '800ms' }}
        />

        {/* Triangle */}
        <svg
          className={`absolute bottom-[30%] left-[60%] w-20 h-20 md:w-32 md:h-32 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 rotate-180'}`}
          style={{ transitionDelay: '700ms' }}
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 90,90 10,90" fill="none" stroke="#1a1a1a" strokeWidth="6"/>
        </svg>

        {/* Horizontal lines */}
        <div className="absolute top-[25%] left-0 w-full">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-0.5 bg-charcoal/20 mb-3 transition-all duration-700 ${loaded ? 'w-full' : 'w-0'}`}
              style={{ transitionDelay: `${900 + i * 100}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-8 md:py-12">
        {/* Main greeting */}
        <div
          className="relative cursor-pointer select-none"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Shadow text for depth */}
          <div
            className="absolute top-2 left-2 md:top-3 md:left-3 text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tight text-charcoal/10 flex"
            aria-hidden="true"
          >
            {letters.map((letter, i) => (
              <span
                key={i}
                className={`inline-block transition-transform duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Main text */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tight text-charcoal relative flex">
            {letters.map((letter, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-500 hover:text-soviet-red ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{
                  transitionDelay: `${300 + i * 80}ms`,
                  transform: hovered ? `rotate(${(i - 2.5) * 3}deg) translateY(${Math.sin(i) * 5}px)` : undefined
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle with rotating greetings */}
        <div
          className={`mt-6 md:mt-8 lg:mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '1000ms' }}
        >
          {greetings.map((greeting, i) => (
            <span
              key={greeting}
              className="text-sm md:text-base lg:text-lg font-body text-charcoal/60 px-2 md:px-3 py-1 border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-cream transition-colors duration-300"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {greeting}
            </span>
          ))}
        </div>

        {/* Decorative message */}
        <p
          className={`mt-8 md:mt-12 lg:mt-16 max-w-lg text-center font-body text-base md:text-lg text-charcoal/70 leading-relaxed px-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '1200ms' }}
        >
          A simple greeting carries infinite warmth.
          <br />
          <span className="text-soviet-red font-semibold">Welcome, friend.</span>
        </p>

        {/* Interactive element */}
        <button
          className={`mt-8 md:mt-10 group relative overflow-hidden bg-charcoal text-cream font-body font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 transition-all duration-500 hover:shadow-brutal ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '1400ms' }}
          onClick={() => {
            const audio = new AudioContext();
            const oscillator = audio.createOscillator();
            const gain = audio.createGain();
            oscillator.connect(gain);
            gain.connect(audio.destination);
            oscillator.frequency.value = 523.25;
            gain.gain.value = 0.1;
            oscillator.start();
            gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.3);
            oscillator.stop(audio.currentTime + 0.3);
          }}
        >
          <span className="relative z-10">Say Hello Back</span>
          <div className="absolute inset-0 bg-soviet-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        </button>
      </main>

      {/* Animated corner accent */}
      <div
        className={`absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 -translate-x-10 translate-y-10'}`}
        style={{ transitionDelay: '1600ms' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0 100 L100 100 L100 0" fill="none" stroke="#c41e3a" strokeWidth="4"/>
          <circle cx="100" cy="100" r="8" fill="#c41e3a"/>
        </svg>
      </div>

      {/* Footer */}
      <footer
        className={`relative z-10 py-4 md:py-6 text-center transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1800ms' }}
      >
        <p className="font-body text-xs text-charcoal/40">
          Requested by @web-user · Built by @clonkbot
        </p>
      </footer>
    </div>
  );
}

export default App;
