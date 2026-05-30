import React from 'react';

import { Award, Globe, Users, CheckCircle, Linkedin, Mail, Phone, Star, Shield, TrendingUp } from 'lucide-react';



const About = () => {

  const expertise = [

    'Visit & Tourist Visa Processing',

    'Skilled Worker Immigration',

    'Business & Investor Visas',

    'Study Abroad Consulting',

    'Express Entry & PR Pathways',

    'Corporate Travel Management',

    'UK & European Immigration',

    'Canada & Australia PR',

  ];



  const achievements = [

    { icon: Award,      value: '15+',    label: 'Years Experience'    },

    { icon: Users,      value: '5,000+', label: 'Cases Handled'       },

    { icon: Globe,      value: '50+',    label: 'Countries Covered'   },

    { icon: TrendingUp, value: '98%',    label: 'Success Rate'        },

  ];



  return (

    <section

      id="about"

      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"

      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f0f4ff 50%, #fef9ec 100%)' }}

    >

      {/* Background Decorations */}

      <div

        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"

        style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }}

      />

      <div

        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"

        style={{ background: 'radial-gradient(circle, #3b4fca, transparent)' }}

      />



      <div className="max-w-7xl mx-auto relative z-10">



        {/* Section Header */}

        <div className="text-center mb-16">

          <span

            className="font-bold text-xs tracking-[0.3em] uppercase"

            style={{ color: '#c9a55a' }}

          >

            Meet the Expert

          </span>

          <h2

            className="text-4xl md:text-5xl font-bold mt-3 mb-4"

            style={{ color: '#0a1628' }}

          >

            Leadership & Expertise

          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">

            Decades of experience guiding thousands of clients to their global destinations

          </p>

        </div>



        {/* Main Card */}

        <div

          className="rounded-3xl overflow-hidden shadow-2xl"

          style={{ border: '1px solid rgba(201,165,90,0.2)' }}

        >

          <div className="grid lg:grid-cols-2">



            {/* LEFT — Photo + Info */}

            <div

              className="relative p-10 flex flex-col items-center justify-center text-white text-center"

              style={{ background: 'linear-gradient(135deg, #010610 0%, #0a1628 50%, #1a1060 100%)' }}

            >

              {/* Gold orb behind photo */}

              <div

                className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"

                style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }}

              />



              {/* Photo */}

              <div className="relative mb-6">

                {/* Gold ring */}

                <div

                  className="absolute inset-0 rounded-full"

                  style={{

                    background: 'linear-gradient(135deg, #c9a55a, #f0c040, #c9a55a)',

                    padding: '3px',

                    borderRadius: '50%'

                  }}

                />

                <div

                  className="relative rounded-full overflow-hidden"

                  style={{

                    width: '200px',

                    height: '200px',

                    border: '4px solid transparent',

                    background: 'linear-gradient(#0a1628, #0a1628) padding-box, linear-gradient(135deg, #c9a55a, #f0c040) border-box',

                    boxShadow: '0 0 40px rgba(201,165,90,0.4)'

                  }}

                >

                  <img

                    src="/photo.png"

                    alt="Muhammad Imran Malik - Managing Director"

                    style={{

                      width: '200px',

                      height: '200px',

                      objectFit: 'cover',

                      objectPosition: 'center top',

                      display: 'block'

                    }}

                  />

                </div>

              </div>



              {/* Name & Title */}

              <div className="relative z-10">

                <h3 className="text-2xl md:text-3xl font-black text-white mb-1">

                  Muhammad Imran Malik

                </h3>

                <div

                  className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full mb-4"

                  style={{

                    background: 'linear-gradient(135deg, #c9a55a, #f0c040)',

                    color: '#0a1628'

                  }}

                >

                  <Shield size={14} />

                  <span className="font-bold text-sm">Managing Director</span>

                </div>

                <p className="text-sm font-medium mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>

                  Accurate Consultancy · Lahore, Pakistan

                </p>



                {/* Star Rating */}

                <div className="flex items-center justify-center space-x-1 mb-6">

                  {[1,2,3,4,5].map(i => (

                    <Star key={i} size={18} fill="#c9a55a" style={{ color: '#c9a55a' }} />

                  ))}

                  <span className="text-sm ml-2 font-semibold" style={{ color: '#c9a55a' }}>

                    4.9/5 Client Rating

                  </span>

                </div>



                {/* Contact Buttons */}

                <div className="flex items-center justify-center space-x-3 flex-wrap gap-2">

                  

                    href="mailto:info@accurate-consultancy.com"

                    className="flex items-center space-x-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"

                    style={{

                      background: 'rgba(255,255,255,0.1)',

                      border: '1px solid rgba(255,255,255,0.2)',

                      color: 'white',

                      textDecoration: 'none'

                    }}

                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,165,90,0.6)'}

                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}

                  >

                    <Mail size={15} />

                    <span>Email</span>

                  </a>

                  

                    href="tel:+923160285386"

                    className="flex items-center space-x-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"

                    style={{

                      background: 'rgba(255,255,255,0.1)',

                      border: '1px solid rgba(255,255,255,0.2)',

                      color: 'white',

                      textDecoration: 'none'

                    }}

                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,165,90,0.6)'}

                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}

                  >

                    <Phone size={15} />

                    <span>Call</span>

                  </a>

                  

                    href="https://wa.me/923160285386"

                    target="_blank"

                    rel="noopener noreferrer"

                    className="flex items-center space-x-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"

                    style={{

                      background: '#25D366',

                      color: 'white',

                      textDecoration: 'none'

                    }}

                  >

                    <span>WhatsApp</span>

                  </a>

                </div>

              </div>

            </div>



            {/* RIGHT — Bio & Expertise */}

            <div className="p-10 bg-white flex flex-col justify-center">



              {/* Bio */}

              <div className="mb-8">

                <h4

                  className="text-xl font-bold mb-4"

                  style={{ color: '#0a1628' }}

                >

                  About Muhammad Imran Malik

                </h4>

                <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>

                  With over <strong style={{ color: '#0a1628' }}>15 years of dedicated experience</strong> in 

                  visa and immigration consulting, Muhammad Imran Malik has established himself as one of 

                  Pakistan's most trusted immigration professionals.

                </p>

                <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>

                  As the <strong style={{ color: '#0a1628' }}>Managing Director</strong> of Accurate Consultancy, 

                  he has personally guided over <strong style={{ color: '#0a1628' }}>5,000+ clients</strong> across 

                  50+ countries — from visit visas to complex investor immigration programs in the USA, UK, 

                  Canada, and Australia.

                </p>

                <p className="text-gray-600 leading-relaxed" style={{ fontSize: '15px' }}>

                  His deep regulatory knowledge, ethical approach, and commitment to client success has 

                  earned Accurate Consultancy a <strong style={{ color: '#c9a55a' }}>98% approval rate</strong> — 

                  one of the highest in the industry.

                </p>

              </div>



              {/* Expertise Grid */}

              <div className="mb-8">

                <h4

                  className="text-base font-bold mb-4 uppercase tracking-wide"

                  style={{ color: '#0a1628' }}

                >

                  Areas of Expertise

                </h4>

                <div className="grid grid-cols-2 gap-2">

                  {expertise.map((item, i) => (

                    <div

                      key={i}

                      className="flex items-center space-x-2 py-2 px-3 rounded-xl"

                      style={{ background: '#f8fafc', border: '1px solid #f0f0f0' }}

                    >

                      <CheckCircle

                        size={14}

                        style={{ color: '#c9a55a', flexShrink: 0 }}

                      />

                      <span

                        className="text-xs font-semibold"

                        style={{ color: '#374151' }}

                      >

                        {item}

                      </span>

                    </div>

                  ))}

                </div>

              </div>



              {/* Stats Row */}

              <div

                className="grid grid-cols-4 gap-3 p-5 rounded-2xl"

                style={{

                  background: 'linear-gradient(135deg, #0a1628, #1a1060)',

                  border: '1px solid rgba(201,165,90,0.2)'

                }}

              >

                {achievements.map((a, i) => (

                  <div key={i} className="text-center">

                    <a.icon

                      size={18}

                      className="mx-auto mb-1"

                      style={{ color: '#c9a55a' }}

                    />

                    <div

                      className="font-black text-white"

                      style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}

                    >

                      {a.value}

                    </div>

                    <div

                      className="text-xs leading-tight mt-0.5"

                      style={{ color: 'rgba(255,255,255,0.5)' }}

                    >

                      {a.label}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};



export default About;
