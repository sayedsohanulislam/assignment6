const Banner = () => {
  return (
    <section id="home" className="bg-white overflow-hidden">
      <div className="container-custom" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="banner-flex">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: '#EEF0FF', color: '#5D5FEF' }}
            >
              🚀 #1 Digital Marketplace
            </div>
            <h1
              style={{ fontFamily: 'Sora, sans-serif', lineHeight: 1.15 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1A1D2E] mb-6"
            >
              Discover Premium{' '}
              <span className="gradient-text">Digital Tools</span>{' '}
              for Your Workflow
            </h1>
            <p className="text-[#6B7194] text-lg mb-8 leading-relaxed" style={{ maxWidth: '520px' }}>
              Boost your productivity with handpicked digital tools. From design to development, find everything you need to level up your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="btn-primary-custom text-white px-8 py-3.5 rounded-xl font-bold text-base inline-block text-center"
              >
                Explore Tools
              </a>
              <a
                href="#steps"
                className="inline-block text-center px-8 py-3.5 rounded-xl font-bold text-base text-[#1A1D2E] transition-all"
                style={{ border: '2px solid #E2E4EF' }}
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right Illustration Cards */}
          <div className="flex-1 relative" style={{ minWidth: 0 }}>
            <div className="relative w-full" style={{ maxWidth: '480px', margin: '0 auto' }}>
              {/* Background Blobs */}
              <div
                className="absolute rounded-full"
                style={{
                  top: '-40px', right: '-40px', width: '250px', height: '250px',
                  backgroundColor: '#5D5FEF', opacity: 0.08, filter: 'blur(60px)',
                }}
              ></div>
              <div
                className="absolute rounded-full"
                style={{
                  bottom: '-40px', left: '-40px', width: '250px', height: '250px',
                  backgroundColor: '#FF6B6B', opacity: 0.08, filter: 'blur(60px)',
                }}
              ></div>

              {/* Card Grid */}
              <div className="banner-card-grid">
                <div
                  className="rounded-2xl p-6 text-white shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #5D5FEF, #7B7DF7)' }}
                >
                  <span className="text-3xl mb-3 block">🎨</span>
                  <h3 style={{ fontFamily: 'Sora, sans-serif' }} className="font-bold text-lg">Design</h3>
                  <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>50+ Tools</p>
                </div>
                <div
                  className="rounded-2xl p-6 shadow-lg"
                  style={{ backgroundColor: '#fff', border: '1px solid #E2E4EF', marginTop: '32px' }}
                >
                  <span className="text-3xl mb-3 block">💻</span>
                  <h3 style={{ fontFamily: 'Sora, sans-serif' }} className="font-bold text-lg text-[#1A1D2E]">Dev Tools</h3>
                  <p className="text-[#6B7194] text-sm mt-1">40+ Tools</p>
                </div>
                <div
                  className="rounded-2xl p-6 shadow-lg"
                  style={{ backgroundColor: '#fff', border: '1px solid #E2E4EF' }}
                >
                  <span className="text-3xl mb-3 block">📊</span>
                  <h3 style={{ fontFamily: 'Sora, sans-serif' }} className="font-bold text-lg text-[#1A1D2E]">Analytics</h3>
                  <p className="text-[#6B7194] text-sm mt-1">30+ Tools</p>
                </div>
                <div
                  className="rounded-2xl p-6 text-white shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)', marginTop: '-16px' }}
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
