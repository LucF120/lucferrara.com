import React from 'react';

function Landing() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative" 
         style={{ 
           background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
           fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
         }}>
      
      {/* Animated background elements */}
      <div className="position-absolute w-100 h-100" style={{ overflow: 'hidden', zIndex: 1 }}>
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
            bottom: '20%',
            left: '15%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container-fluid px-4" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 text-center">
            
            {/* Main Content */}
            <div className="text-center mb-5">
              <h1 
                className="display-1 fw-bold text-white mb-4"
                style={{ 
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 30px rgba(255,255,255,0.3)'
                }}
              >
                Luc Ferrara
              </h1>
            </div>

            {/* Contact Grid */}
            <div className="row g-4 mb-5 justify-content-center">
              
              {/* Email */}
              <div className="col-12 col-md-6 col-lg-3">
                <div 
                  className="card h-100 border-0 text-center py-4 px-2 transition-all"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <div className="mb-3">
                    <i className="fas fa-envelope" style={{ fontSize: '2rem', color: '#fff' }}></i>
                  </div>
                  <h5 className="text-white mb-3">Email</h5>
                  <a 
                    href="mailto:contact@lucferrara.com" 
                    className="text-white-50 text-decoration-none"
                    style={{ fontSize: '0.9rem' }}
                  >
                    contact@lucferrara.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="col-12 col-md-6 col-lg-3">
                <div 
                  className="card h-100 border-0 text-center p-4 transition-all"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <div className="mb-3">
                    <i className="fas fa-phone" style={{ fontSize: '2rem', color: '#fff' }}></i>
                  </div>
                  <h5 className="text-white mb-3">Phone</h5>
                  <a 
                    href="tel:+1234567890" 
                    className="text-white-50 text-decoration-none"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Available upon request
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="col-12 col-md-6 col-lg-3">
                <div 
                  className="card h-100 border-0 text-center p-4 transition-all"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <div className="mb-3">
                    <i className="fas fa-map-marker-alt" style={{ fontSize: '2rem', color: '#fff' }}></i>
                  </div>
                  <h5 className="text-white mb-3">Location</h5>
                  <p className="text-white-50 mb-0" style={{ fontSize: '0.9rem' }}>
                    Based in<br />
                    United States<br />
                    Remote Available
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="col-12 col-md-6 col-lg-3">
                <div 
                  className="card h-100 border-0 text-center p-4 transition-all"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <div className="mb-3">
                    <i className="fas fa-share-alt" style={{ fontSize: '2rem', color: '#fff' }}></i>
                  </div>
                  <h5 className="text-white mb-3">Social</h5>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="https://github.com/lucf120" target="_blank" rel="noopener noreferrer" className="text-white-50" style={{ fontSize: '1.2rem' }}>
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/lucferrara" target="_blank" rel="noopener noreferrer" className="text-white-50" style={{ fontSize: '1.2rem' }}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .transition-all {
          transition: all 0.3s ease !important;
        }
      `}</style>
    </div>
  );
}

export default Landing;