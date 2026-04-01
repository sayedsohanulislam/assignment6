const Banner = () => {
  return (
    <section id="home" className="bg-white overflow-hidden" style={{ position: 'relative' }}>
      {/* Dot grid background */}
      <div
        style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, #5D5FEF 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ paddingTop: '72px', paddingBottom: '72px', position: 'relative' }}>
        <div className="banner-flex">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: '#EEF0FF', color: '#5D5FEF' }}
            >
              <span
                style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  backgroundColor: '#5D5FEF', display: 'inline-block',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }}
              />
              🚀 #1 Digital Marketplace
            </div>

            <h1
              style={{ fontFamily: 'Sora, sans-serif', lineHeight: 1.12 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-dark mb-6"
            >
              Discover Premium{' '}
              <span className="gradient-text">Digital Tools</span>{' '}
              for Your Workflow
            </h1>

            <p className="text-gray-custom text-lg mb-8 leading-relaxed" style={{ maxWidth: '520px', margin: '0 auto 32px' }}>
              Boost your productivity with handpicked digital tools. From design to development, find everything you need to level up your projects.
            </p>
            <p style={{ maxWidth: '520px', display: 'none' }} />

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#products"
                className="btn-primary-custom text-white px-8 py-4 rounded-xl font-bold text-base inline-block text-center"
                style={{ letterSpacing: '0.01em' }}
              >
                Explore Tools →
              </a>
              <a
                href="#steps"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-dark hover:bg-light-bg transition-all"
                style={{ border: '2px solid #E2E4EF' }}
              >
                <span style={{ fontSize: '13px', opacity: 0.6 }}>▶</span> How It Works
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-5 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex" style={{ gap: '1px' }}>
                  {[1,2,3,4,5].map((i) => (
                    <span key={i} style={{ color: '#FFB347', fontSize: '15px' }}>★</span>
                  ))}
                </div>
                <span className="text-sm font-bold text-dark">4.9</span>
                <span className="text-sm text-gray-custom">(2.4k reviews)</span>
              </div>
              <div style={{ width: '1px', height: '22px', backgroundColor: '#E2E4EF' }} className="hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <span className="text-sm text-gray-custom">Trusted by</span>
                <span className="text-sm font-bold text-dark">10,000+</span>
                <span className="text-sm text-gray-custom">users worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Illustration Cards */}
          <div className="flex-1 relative" style={{ minWidth: 0 }}>
            <div className="relative w-full" style={{ maxWidth: '480px', margin: '0 auto' }}>
              {/* Background Blobs */}
              <div
                className="absolute rounded-full animate-blob"
                style={{
                  top: '-50px', right: '-50px', width: '300px', height: '300px',
                  backgroundColor: '#5D5FEF', opacity: 0.07, filter: 'blur(70px)',
                  pointerEvents: 'none',
                }}
              />
              <div
                className="absolute rounded-full animate-blob"
                style={{
                  bottom: '-50px', left: '-50px', width: '300px', height: '300px',
                  backgroundColor: '#FF6B6B', opacity: 0.07, filter: 'blur(70px)',
                  animationDelay: '3s',
                  pointerEvents: 'none',
                }}
              />

              {/* Card Grid */}
              <div className="banner-card-grid">
                {/* Design card */}
                <div
                  className="rounded-2xl p-6 text-white animate-float"
                  style={{
                    background: 'linear-gradient(135deg, #5D5FEF, #7B7DF7)',
                    boxShadow: '0 20px 48px rgba(93,95,239,0.40)',
                  }}
                >
                  <span className="text-3xl mb-3 block">🎨</span>
                  <h3 style={{ fontFamily: 'Sora, sans-serif' }} className="font-bold text-lg">Design</h3>
                  <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>50+ Tools</p>
                </div>

                {/* Dev Tools card */}
                <div
                  className="rounded-2xl p-6 card-hover animate-float-delayed"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #E2E4EF',
                    marginTop: '32px',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.07)',
                  }}
                >
                  <span className="text-3xl mb-3 block">💻</span>
                  <h3 style={{ fontFamily: 'Sora, sans-serif' }} className="font-bold text-lg text-dark">Dev Tools</h3>
                  <p className="text-gray-custom text-sm mt-1">40+ Tools</p>
                </div>

                {/* Analytics card */}
                <div
                  className="rounded-2xl p-6 card-hover animate-float-delayed"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #E2E4EF',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.07)',
                    animationDelay: '0.6s',
                  }}
                >
                  <span className="text-3xl mb-3 block">📊</span>
                  <h3 style={{ fontFamily: 'Sora, sans-serif' }} className="font-bold text-lg text-dark">Analytics</h3>
                  <p className="text-gray-custom text-sm mt-1">30+ Tools</p>
                </div>

                {/* Marketing card */}
                <div
                  className="rounded-2xl p-6 text-white animate-float"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
                    marginTop: '-16px',
                    boxShadow: '0 20px 48px rgba(255,107,107,0.38)',
                    animationDelay: '1s',
                  }}
                >
                  <span className="text-3xl mb-3 block">🚀</span>
                  <h3 style={{ fontFamily: 'Sora, sans-serif' }} className="font-bold text-lg">Marketing</h3>
                  <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>35+ Tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
