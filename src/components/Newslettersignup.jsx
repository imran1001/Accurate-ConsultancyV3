import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Sending data as a clean JSON payload with lowercase keys
      const response = await fetch('https://formspree.io/f/xwvjvaag', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify({
          email: email,
          source: 'Newsletter Signup - Footer'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to subscribe. Try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8 p-6 rounded-2xl animate-slideInLeft"
      style={{
        background: 'linear-gradient(135deg, rgba(201,165,90,0.1), rgba(240,192,64,0.05))',
        border: '1px solid rgba(201,165,90,0.2)'
      }}>
      <h4 className="font-bold mb-2" style={{ color: 'white' }}>📧 Get Immigration Tips</h4>
      <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
        Subscribe for visa guides, success tips, and updates
      </p>

      {submitted ? (
        <div className="flex items-center space-x-2 text-green-400 animate-fadeInUp">
          <CheckCircle size={18} />
          <span className="text-sm font-semibold">Welcome! Check your email.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Mail size={16} className="absolute text-gray-400 pointer-events-none"
              style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={loading}
              style={{
                width: '100%',
                paddingLeft: '36px',
                paddingRight: '12px',
                paddingTop: '10px',
                paddingBottom: '10px',
                borderRadius: '8px',
                border: '1px solid rgba(201,165,90,0.3)',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '14px',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(201,165,90,0.6)';
                e.target.style.background = 'rgba(255,255,255,0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(201,165,90,0.3)',
                e.target.style.background = 'rgba(255,255,255,0.1)'
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              paddingLeft: '16px',
              paddingRight: '16px',
              borderRadius: '8px',
              background: loading ? '#9ca3af' : 'linear-gradient(135deg, #c9a55a, #f0c040)',
              color: '#0a1628',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '14px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => {
              if (!loading) {
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}

      {error && (
        <div className="flex items-center space-x-2 text-red-400 mt-2 animate-slideInLeft">
          <AlertCircle size={16} />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;
