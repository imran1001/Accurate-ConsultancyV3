import React from 'react';
import { CheckCircle, Mail, Phone, Shield } from 'lucide-react';

var skills = [
  'Visit and Tourist Visa',
  'Skilled Worker Immigration',
  'Business and Investor Visas',
  'Study Abroad Consulting',
  'Express Entry and PR',
  'Corporate Travel Management',
  'UK and European Immigration',
  'Canada and Australia PR'
];

var stats = [
  { value: '15+',   label: 'Years' },
  { value: '5000+', label: 'Cases' },
  { value: '50+',   label: 'Countries' },
  { value: '98%',   label: 'Success' }
];

function About() {
  var sectionStyle = {
    padding: '6rem 1rem',
    background: 'linear-gradient(135deg, #f8fafc, #f0f4ff)',
    position: 'relative'
  };

  var cardStyle = {
    borderRadius: '1.5rem',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
    border: '1px solid rgba(201,165,90,0.2)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
  };

  var leftStyle = {
    background: 'linear-gradient(135deg, #010610, #0a1628, #1a1060)',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white'
  };

  var rightStyle = {
    background: 'white',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  var photoStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid #c9a55a',
    boxShadow: '0 0 40px rgba(201,165,90,0.5)',
    marginBottom: '1.5rem'
  };

  var badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 20px',
    borderRadius: '9999px',
    background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
    color: '#0a1628',
    fontWeight: '700',
    fontSize: '14px',
    marginBottom: '1rem'
  };

  var btnBase = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '9999px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '600'
  };

  var btnGhost = Object.assign({}, btnBase, {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)'
  });

  var btnWa = Object.assign({}, btnBase, {
    background: '#25D366'
  });

  var statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
    padding: '20px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #0a1628, #1a1060)',
    border: '1px solid rgba(201,165,90,0.2)'
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#c9a55a', fontWeight: '700', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Meet the Expert
          </p>
          <h2 style={{ color: '#0a1628', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0.75rem 0 1rem' }}>
            Leadership and Expertise
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
            Decades of experience guiding thousands of clients to their global destinations
          </p>
        </div>

        <div style={cardStyle}>

          <div style={leftStyle}>
            <div style={photoStyle}>
              <img
                src="/photo.png"
                alt="Muhammad Imran Malik"
                style={{ width: '200px', height: '200px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: '900', color: 'white', marginBottom: '0.5rem' }}>
              Muhammad Imran Malik
            </h3>

            <div style={badgeStyle}>
              <Shield size={14} />
              <span>Managing Director</span>
            </div>

            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', marginBottom: '1rem' }}>
              Accurate Consultancy, Lahore, Pakistan
            </p>

            <p style={{ color: '#c9a55a', fontWeight: '600', fontSize:
