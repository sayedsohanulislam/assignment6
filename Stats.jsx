const statsData = [
  { value: '10K+', label: 'Active Users',  icon: '👥', color: '#5D5FEF', bg: '#EEF0FF', shadow: 'rgba(93,95,239,0.18)' },
  { value: '150+', label: 'Digital Tools', icon: '🛠️', color: '#FF6B6B', bg: '#FFF0F0', shadow: 'rgba(255,107,107,0.18)' },
  { value: '99%',  label: 'Satisfaction',  icon: '⭐', color: '#FFB347', bg: '#FFF8ED', shadow: 'rgba(255,179,71,0.18)' },
  { value: '24/7', label: 'Support',       icon: '💬', color: '#00D68F', bg: '#E8FFF5', shadow: 'rgba(0,214,143,0.18)' },
];

const Stats = () => {
  return (
    <section
      style={{ borderTop: '1px solid #E2E4EF', borderBottom: '1px solid #E2E4EF', padding: '60px 0', backgroundColor: '#fff' }}
    >
      <div className="container-custom">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="card-hover text-center p-7 rounded-2xl"
              style={{ border: '1px solid #E2E4EF', backgroundColor: '#fff' }}
            >
              <div
                className="icon-box"
                style={{
                  width: '64px', height: '64px', borderRadius: '18px',
                  backgroundColor: stat.bg,
                  border: `1.5px solid ${stat.color}22`,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 18px',
                  fontSize: '28px',
                  boxShadow: `0 8px 24px ${stat.shadow}`,
                }}
              >
                {stat.icon}
              </div>
              <h3
                style={{ fontFamily: 'Sora, sans-serif', color: stat.color }}
                className="text-3xl md:text-4xl font-extrabold mb-1"
              >
                {stat.value}
              </h3>
              <p className="text-gray-custom font-medium text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
