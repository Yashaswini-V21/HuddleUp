import React, { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/ui/PageWrapper";
import { Users, Zap, Shield, Globe, TrendingUp, Heart, ChevronRight } from "lucide-react";

const About = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const stats = [
    { value: "10K+", label: "moments shared daily", color: "var(--accent)", icon: TrendingUp },
    { value: "25+", label: "sports from cricket to curling", color: "var(--turf-green)", icon: Globe },
    { value: "50+", label: "countries watching together", color: "var(--sun-yellow)", icon: Users }
  ];

  const principles = [
    {
      icon: Heart,
      title: "Community First, Always",
      desc: "No algorithm deciding what you see. No ads interrupting your flow. Just pure, unfiltered sports passion from people who actually care.",
      color: "#22c55e",       // emerald
      colorLight: "rgba(34, 197, 94, 0.15)",
      colorGlow: "rgba(34, 197, 94, 0.35)",
    },
    {
      icon: Zap,
      title: "Built for Speed",
      desc: "Upload highlights in seconds. Stream without buffering. React in real-time. Because when the game is on, every second counts.",
      color: "#00E5FF",       // cyan accent
      colorLight: "rgba(0, 229, 255, 0.15)",
      colorGlow: "rgba(0, 229, 255, 0.35)",
    },
    {
      icon: Shield,
      title: "Safe Space, Real Talk",
      desc: "Rivalries are fun. Toxicity isn't. We keep it competitive but respectful, so everyone can bring their A-game without the BS.",
      color: "#a78bfa",       // violet
      colorLight: "rgba(167, 139, 250, 0.15)",
      colorGlow: "rgba(167, 139, 250, 0.35)",
    }
  ];

  return (
    <PageWrapper>
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      
      {/* Hero Section */}
      <section className="px-4 md:px-12 pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              We built{' '}
              <span style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                HuddleUp
              </span>
              <br />
              for the fans
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl" style={{ 
              color: 'var(--text-sub)', 
              lineHeight: '1.6' 
            }}>
              Because fans were yelling into the void after moments that deserved a crowd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 md:px-12 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <p className="text-base sm:text-lg md:text-xl" style={{ 
              color: 'var(--text-main)', 
              lineHeight: '1.8' 
            }}>
              Every platform promised community. Most delivered isolation.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl" style={{ 
              color: 'var(--text-sub)', 
              lineHeight: '1.8' 
            }}>
              You'd upload the greatest play you've ever seen, and it would vanish in 60 seconds. 
              You'd start a debate about the GOAT, and the algorithm would bury it for engagement-bait.
            </p>

            <div className="py-8 md:py-12">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ 
                color: 'var(--text-main)',
                lineHeight: '1.4'
              }}>
                So we built something different.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="px-4 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative p-6 md:p-8 cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover-lift"
                  style={{
                    background: 'var(--tier-1-bg)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {/* Animated gradient background on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}05)`,
                      pointerEvents: 'none'
                    }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-xl"
                    style={{ background: stat.color }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent 
                        className="w-8 h-8 md:w-10 md:h-10 mb-4 transition-colors duration-300" 
                        style={{ color: stat.color }} 
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 transition-colors duration-300" 
                      style={{ color: stat.color }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <p className="text-sm md:text-base transition-colors duration-300" style={{ color: 'var(--text-sub)' }}>
                      {stat.label}
                    </p>
                  </div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      border: `2px solid ${stat.color}`,
                      boxShadow: `0 0 20px ${stat.color}40`,
                      pointerEvents: 'none'
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 md:px-12 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12" style={{ 
            color: 'var(--text-sub)', 
            lineHeight: '1.8' 
          }}>
            We're not trying to replace Twitter for hot takes or YouTube for polished content. 
            We're the place you go when something just happened and you need to talk about it <em>right now</em>.
          </p>

          <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
            <p className="text-base sm:text-lg" style={{ color: 'var(--text-sub)', lineHeight: '1.8' }}>
              We don't use recommendation algorithms.
            </p>
            <p className="text-base sm:text-lg" style={{ color: 'var(--text-sub)', lineHeight: '1.8' }}>
              We don't sell your attention to advertisers.
            </p>
            <p className="text-base sm:text-lg" style={{ color: 'var(--text-sub)', lineHeight: '1.8' }}>
              We don't optimize for "engagement" — we optimize for actual conversation between actual fans.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Cards */}
      <section className="px-4 md:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-12" 
            style={{ color: 'var(--text-sub)', letterSpacing: '0.2em' }}>
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              const isHovered = hoveredIdx === idx;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative p-6 rounded-xl border overflow-hidden cursor-pointer"
                  style={{
                    background: isHovered
                      ? `linear-gradient(135deg, ${principle.colorLight} 0%, var(--tier-1-bg) 60%)`
                      : 'var(--tier-1-bg)',
                    borderColor: isHovered ? principle.color : 'var(--border-subtle)',
                    boxShadow: isHovered
                      ? `0 0 20px ${principle.colorGlow}, 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 ${principle.colorLight}`
                      : 'inset 0 0 0 1px rgba(255,255,255,0.03)',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Shimmer sweep on hover */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(105deg, transparent 40%, ${principle.colorLight} 50%, transparent 60%)`,
                      backgroundSize: '200% 100%',
                      backgroundPosition: isHovered ? '100% 0' : '-100% 0',
                      transition: 'background-position 0.8s ease',
                      pointerEvents: 'none',
                      zIndex: 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  {/* Top accent line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '10%',
                      right: '10%',
                      height: '2px',
                      background: `linear-gradient(90deg, transparent, ${principle.color}, transparent)`,
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.4s ease, left 0.4s ease, right 0.4s ease',
                      ...(isHovered ? { left: '5%', right: '5%' } : {}),
                    }}
                  />

                  {/* Icon container */}
                  <div
                    className="relative mb-4 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: isHovered ? principle.colorLight : 'var(--accent-glow)',
                      transform: isHovered ? 'scale(1.1) rotate(-6deg)' : 'scale(1) rotate(0deg)',
                      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      boxShadow: isHovered ? `0 0 16px ${principle.colorGlow}` : 'none',
                      zIndex: 1,
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{
                        color: isHovered ? principle.color : 'var(--accent)',
                        transition: 'color 0.3s ease',
                        filter: isHovered ? `drop-shadow(0 0 6px ${principle.colorGlow})` : 'none',
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="relative text-lg font-bold mb-2"
                    style={{
                      color: isHovered ? principle.color : 'var(--ice-white)',
                      transition: 'color 0.3s ease',
                      zIndex: 1,
                    }}
                  >
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="relative text-sm"
                    style={{
                      color: isHovered ? 'var(--ice-white-soft)' : 'var(--text-sub)',
                      transition: 'color 0.3s ease',
                      zIndex: 1,
                      lineHeight: '1.7'
                    }}
                  >
                    {principle.desc}
                  </p>

                  {/* Bottom glow bar */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '20%',
                      right: '20%',
                      height: '1px',
                      background: `radial-gradient(ellipse at center, ${principle.color} 0%, transparent 70%)`,
                      opacity: isHovered ? 0.6 : 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-4 md:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight" style={{ color: 'var(--text-main)' }}>
              This is your stadium.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mt-2 md:mt-4" style={{ 
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              We just keep the lights on.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
    </PageWrapper>
  );
};

export default About;
