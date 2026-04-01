import { FiCheck } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Starter', price: 19, period: '/month',
    description: 'Perfect for individuals and small projects getting started.',
    features: ['Access to 10 tools', '5GB cloud storage', 'Email support', 'Basic analytics', 'Single user license'],
    popular: false, cta: 'Get Starter',
  },
  {
    name: 'Professional', price: 49, period: '/month',
    description: 'Ideal for professionals who need advanced features and integrations.',
    features: ['Access to 80+ tools', '50GB cloud storage', 'Priority support', 'Advanced analytics', 'Team collaboration (5 users)', 'API access'],
    popular: true, cta: 'Get Professional',
  },
  {
    name: 'Enterprise', price: 99, period: '/month',
    description: 'Built for large teams that need unlimited access and dedicated support.',
    features: ['Access to all 150+ tools', 'Unlimited storage', 'Dedicated account manager', 'Custom integrations', 'Unlimited team members', 'SLA guarantee'],
    popular: false, cta: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" style={{ backgroundColor: '#F5F6FA', padding: '72px 0 88px' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <div
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: '#EEF0FF', color: '#5D5FEF' }}
          >
            Simple Pricing
          </div>
          <h2
            style={{ fontFamily: 'Sora, sans-serif' }}
            className="text-3xl md:text-4xl font-extrabold text-dark mb-4"
          >
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-gray-custom text-lg" style={{ maxWidth: '580px', margin: '0 auto' }}>
            Flexible pricing plans tailored for every team size. Start free, upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={plan.popular ? '' : 'card-hover'}
              style={{
                position: 'relative',
                borderRadius: '22px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                background: plan.popular
                  ? 'linear-gradient(145deg, #5D5FEF 0%, #7B7DF7 50%, #9B6BFF 100%)'
                  : '#fff',
                color: plan.popular ? '#fff' : '#1A1D2E',
                border: plan.popular ? 'none' : '1px solid #E2E4EF',
                boxShadow: plan.popular
                  ? '0 24px 60px rgba(93,95,239,0.30)'
                  : '0 2px 10px rgba(0,0,0,0.04)',
                transform: plan.popular ? 'scale(1.04)' : 'none',
                transition: plan.popular ? 'none' : 'all 0.35s cubic-bezier(0.25,0.8,0.25,1)',
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div
                  style={{
                    position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: '#FFB347', color: '#1A1D2E', fontSize: '11px', fontWeight: 800,
                    padding: '5px 18px', borderRadius: '20px',
                    boxShadow: '0 4px 14px rgba(255,179,71,0.35)',
                    letterSpacing: '0.04em', whiteSpace: 'nowrap',
                  }}
                >
                  ⭐ Most Popular
                </div>
              )}

              <h3
                style={{
                  fontFamily: 'Sora, sans-serif',
                  color: plan.popular ? '#fff' : '#1A1D2E',
                  fontSize: '20px', fontWeight: 700, marginBottom: '8px',
                }}
              >
                {plan.name}
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: plan.popular ? 'rgba(255,255,255,0.78)' : '#6B7194' }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '26px' }}>
                <span
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '52px', fontWeight: 800, lineHeight: 1,
                    color: plan.popular ? '#fff' : '#1A1D2E',
                  }}
                >
                  ${plan.price}
                </span>
                <span
                  className="text-sm ml-1"
                  style={{ color: plan.popular ? 'rgba(255,255,255,0.65)' : '#6B7194' }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: plan.popular ? 'rgba(255,255,255,0.15)' : '#E2E4EF',
                  marginBottom: '22px',
                }}
              />

              {/* Features */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '13px', marginBottom: '30px', flex: 1 }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm">
                    <div
                      style={{
                        width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                        backgroundColor: plan.popular ? 'rgba(255,179,71,0.25)' : '#E8FFF5',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <FiCheck
                        style={{
                          width: '11px', height: '11px',
                          color: plan.popular ? '#FFB347' : '#00D68F',
                        }}
                      />
                    </div>
                    <span style={{ color: plan.popular ? 'rgba(255,255,255,0.88)' : '#6B7194' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={plan.popular ? 'pricing-btn-popular' : 'pricing-btn-secondary'}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
