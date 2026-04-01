const stepsData = [
  {
    step: '01', title: 'Browse Tools',
    description: 'Explore our curated marketplace of 150+ premium digital tools across multiple categories.',
    icon: '🔍', color: '#5D5FEF', bg: '#EEF0FF', shadow: 'rgba(93,95,239,0.20)',
  },
  {
    step: '02', title: 'Add to Cart',
    description: 'Select the tools that fit your needs and add them to your cart with a single click.',
    icon: '🛒', color: '#FF6B6B', bg: '#FFF0F0', shadow: 'rgba(255,107,107,0.20)',
  },
  {
    step: '03', title: 'Checkout',
    description: 'Complete your purchase securely and get instant access to all your selected tools.',
    icon: '💳', color: '#00D68F', bg: '#E8FFF5', shadow: 'rgba(0,214,143,0.20)',
  },
  {
    step: '04', title: 'Start Using',
    description: 'Download and integrate your tools into your workflow immediately after purchase.',
    icon: '🚀', color: '#FFB347', bg: '#FFF8ED', shadow: 'rgba(255,179,71,0.20)',
  },
];

const Steps = () => {
  return (
    <section id="steps" style={{ backgroundColor: '#fff', padding: '72px 0 88px' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '68px' }}>
          <div
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: '#E8FFF5', color: '#00D68F' }}
          >
            Simple Process
          </div>
          <h2
            style={{ fontFamily: 'Sora, sans-serif' }}
            className="text-3xl md:text-4xl font-extrabold text-dark mb-4"
          >
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-custom text-lg" style={{ maxWidth: '580px', margin: '0 auto' }}>
            Getting started with DigiTools is simple. Follow these four easy steps to access premium digital tools.
          </p>
        </div>

        {/* Steps Grid with connector */}
        <div style={{ position: 'relative' }}>
          <div className="steps-connector" />
          <div className="steps-grid">
            {stepsData.map((item, index) => (
              <div key={index} className="text-center" style={{ position: 'relative', zIndex: 1 }}>
                <div
                  className="icon-box"
                  style={{
                    width: '88px', height: '88px', borderRadius: '24px',
                    backgroundColor: item.bg,
                    border: `1.5px solid ${item.color}28`,
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', margin: '0 auto 22px',
                    fontSize: '36px',
                    boxShadow: `0 14px 36px ${item.shadow}`,
                  }}
                >
                  {item.icon}
                </div>

                <div
                  style={{
                    color: item.color, fontFamily: 'Sora, sans-serif',
                    fontWeight: 800, fontSize: '11px', letterSpacing: '2px',
                    marginBottom: '8px', textTransform: 'uppercase',
                  }}
                >
                  Step {item.step}
                </div>

                <h3
                  style={{ fontFamily: 'Sora, sans-serif' }}
                  className="text-xl font-bold text-dark mb-3"
                >
                  {item.title}
                </h3>

                <p className="text-gray-custom text-sm leading-relaxed" style={{ maxWidth: '220px', margin: '0 auto' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
