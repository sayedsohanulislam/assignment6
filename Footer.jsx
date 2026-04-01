import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: '#1A1D2E', color: '#fff', paddingTop: '72px', paddingBottom: '36px' }}>
      <div className="container-custom">
        <div className="footer-grid" style={{ marginBottom: '56px' }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5" style={{ marginBottom: '20px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: '38px', height: '38px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #5D5FEF, #7B7DF7)',
                  flexShrink: 0,
                }}
              >
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>D</span>
              </div>
              <span style={{ fontFamily: 'Sora, sans-serif' }} className="font-bold text-xl">
                Digi<span style={{ color: '#7B7DF7' }}>Tools</span>
              </span>
            </div>
            <p style={{ color: '#8B8FAD', fontSize: '14px', lineHeight: 1.75, marginBottom: '24px', maxWidth: '280px' }}>
              Your one-stop marketplace for premium digital tools. Empowering creators, developers, and businesses worldwide.
            </p>
            <div className="flex" style={{ gap: '10px' }}>
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, i) => (
                <a key={i} href="#" className="social-icon">
                  <Icon style={{ width: '15px', height: '15px' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', marginBottom: '22px', color: '#fff' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '13px', listStyle: 'none' }}>
              {['Home', 'Products', 'Pricing', 'About Us', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', marginBottom: '22px', color: '#fff' }}>
              Resources
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '13px', listStyle: 'none' }}>
              {['Documentation', 'Help Center', 'API Reference', 'Community', 'Changelog'].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', marginBottom: '22px', color: '#fff' }}>
              Contact Us
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '18px', listStyle: 'none' }}>
              <li className="flex items-start" style={{ gap: '12px' }}>
                <div
                  style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    backgroundColor: '#2A2D42', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}
                >
                  <FiMail style={{ width: '14px', height: '14px', color: '#7B7DF7' }} />
                </div>
                <span style={{ color: '#8B8FAD', fontSize: '14px', lineHeight: 1.5, paddingTop: '6px' }}>
                  support@digitools.com
                </span>
              </li>
              <li className="flex items-start" style={{ gap: '12px' }}>
                <div
                  style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    backgroundColor: '#2A2D42', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}
                >
                  <FiPhone style={{ width: '14px', height: '14px', color: '#7B7DF7' }} />
                </div>
                <span style={{ color: '#8B8FAD', fontSize: '14px', lineHeight: 1.5, paddingTop: '6px' }}>
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start" style={{ gap: '12px' }}>
                <div
                  style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    backgroundColor: '#2A2D42', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}
                >
                  <FiMapPin style={{ width: '14px', height: '14px', color: '#7B7DF7' }} />
                </div>
                <span style={{ color: '#8B8FAD', fontSize: '14px', lineHeight: 1.6, paddingTop: '4px' }}>
                  123 Innovation Drive,<br />San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center"
          style={{ borderTop: '1px solid #2A2D42', paddingTop: '28px', gap: '16px' }}
        >
          <p style={{ color: '#8B8FAD', fontSize: '13px' }}>
            © 2026 DigiTools. All rights reserved.
          </p>
          <div className="flex" style={{ gap: '28px' }}>
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  color: '#8B8FAD', fontSize: '13px', textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.color = '#7B7DF7'}
                onMouseLeave={e => e.target.style.color = '#8B8FAD'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
