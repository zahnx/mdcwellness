// src/pages/About.jsx
import React from "react";
import { UserCheck, Award, TreeDeciduous } from "lucide-react";

export default function About() {
  const whyChooseUs = [
    {
      icon: <UserCheck className="text-primary w-10 h-10" />,
      title: "Personalized Service",
      text: "Every journey is unique. Our treatments are tailored precisely to your body's specific needs and your mind's current state.",
    },
    {
      icon: <Award className="text-primary w-10 h-10" />,
      title: "Expert Practitioners",
      text: "Our team consists of internationally certified specialists who blend ancient wisdom with modern therapeutic techniques.",
    },
    {
      icon: <TreeDeciduous className="text-primary w-10 h-10" />,
      title: "Serene Environment",
      text: "Designed by leading acoustic and sensory architects, our sanctuary is a total immersion into quietude and natural beauty.",
    },
  ];

  const team = [
    {
      name: "Dr. Elena",
      role: "Wellness Expert",
      desc: "Specializing in holistic physiology and stress management systems.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsY-gCC9bfzkFIcXkBMrCjSZwChs2Lk5kylKwCtcLJfO5lUeuIchaEPhqoHCLCCTz3TC4QQ1Iccp9ArC0H4xhIiYPWMObi_NkAF9LRyVp7jcJiFVpEiLAuHVNe2oMyzspbz-NBUx1NExO1RvEc6VQx18j4jBV8BPTabPTFLi0QrLDvBiwzLiI5yMSKCnbVbczlXix9DWk7nSpJ1NVAf1mzb8I2QgDeURocHXwO1iHhuP5O3Ux6YUu9CteO3jLgNVgUXm-9WVimb-g",
    },
    {
      name: "Marcus",
      role: "Lead Therapist",
      desc: "Expert in deep tissue restoration and neuromuscular balancing.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxxOLjuBW0wn-Uxb_wz0yNgJ9GRgnfLAxm37O7QwHgIfNda8T6qqlC8YMN1jG5FOuw26TX3_f00pnrGt58zwLGQpw0KnrCDk2yUpZhrb7h8JHb-lfwbs0hnQAgFqY3J_9tIZEv176VXP6X7mggudWPmpi_SoxC3m_UatXjdat6RGA6eBSj6rd7rHqoGO4FMXpCTa61I-Qhhv7wwPVueThWzvOzxBb66LnkEjgS-cALJNkfK8_YNbxxA_tIqrGGvvn_1e6eAoiyNw8",
    },
    {
      name: "Sofia",
      role: "Serenity Specialist",
      desc: "Dedicated to mindfulness meditation and sensory aromatherapeutics.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD1X-yNmJFBnaTIfP9CasR3ZLUdw1n-Ohbe07kKrH8-pnbblnpRwdTeaPAezSZgSCZXSTRS17w0LikZqQAkhRlXNk6yLANKvIbXFMOltkCcw45q_spFMWjJNvHtHI4L_2lNEW9Xq6KV2-rmnKt2qcikGtZzU9ZlAhF9S81ZRlOlI6Y0sjqArTEVr_sscJSfBXma_P1A3kvH9g30bF0H-7RwSLcElW0dNCXX6cEpTk-7nkAugpFM2tTvgLai0BmuxxOsCd_aiURE94",
    },
    {
      name: "Julian",
      role: "Body Architect",
      desc: "Focuses on functional movement and postural alignment therapies.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFCa0UqGWsR_mwPLaVNtKxEB4NRo8sRw1_q_utYhFrG-SZJMVrasd3SjR9ZW26WX7e2sY5Ls_Z3llcnycMEALdpUe41G_CjCg_rYD3qIpnbaFwCCdyQ0jYSiiZ7IWj1ojdnbNQj6OsD0X5yJj76GRwV2s99W_Q-AhXs0sGZsL7gBVhWJyFrH5vJPaMMXz0L4XuEgi5u28S2xHOCa8K3aRpv6A15hU2Q4JITW63av6JmKoZY9nhROCYLLSHDTRPS8aeYqPWngryQL4",
    },
  ];

  return (
    <main className=" font-body bg-surface text-on-surface">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full h-[614px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-primary-container/20 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA25bFEr2lxmUynaIEiEFiMXyw7B-4rcYyLCCUaVX80NW8cqqwtQFsEFp1tnuwzjjhuQcpVzD9lvDdJ_2wnKd4mszjJQ3lfceYB8ktyW6aST65Tk5C0XnCyQEq6AW0I0gsPin2TKzo8e_VWgfKW78RkItnKrxKYco70KAeVV3-SLb8DivOjr-968kGu7M9VPywIvLUHtumdfW3CMi6UNzr0OLsPoTzQ1fZJTxgqpLOHAqngsGLwbSmcYEf_1uFSkXTUzfh8kvnAi20"
          alt="Peaceful wellness spa interior"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 drop-shadow-sm tracking-tight">
            Our Story
          </h1>
          <p className="font-manrope text-lg md:text-xl text-white/90 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            A journey toward inner peace, crafted with intention and grounded in
            silence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="font-manrope text-sm uppercase tracking-[0.3em] text-primary font-bold">
                The Core Purpose
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight mt-4">
                Mission &amp; Vision
              </h2>
            </div>
            <p className="font-body text-lg text-on-surface-variant leading-loose">
              We believe that true wellness is found in the moments between the
              noise. Our mission is to provide a meticulously curated haven for
              relaxation and high-quality care, where every detail is designed
              to restore the soul. We envision a world where the sanctuary isn't
              just a place you visit, but a state of mind you carry with you.
            </p>
            <div className="pt-4">
              <div className="h-[1px] w-24 bg-primary-container/30"></div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-sm">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWurVzbvCrv8NbBoc_3ngKeTSyM5aTSVfqKOrxNr66dNvlefUmwJfbRjg-Rl566j-Q39jmTPHlu9hmRiV8i-AUJeZUDhNNe36zDnT5EgehUhzBCI2L_PB60iLxujYmvv7G-XvFbpVTZ7QaAUTy5PG2lvIVHec0itCFLU-DdCGbKjFNe9Ym34AWo9YcY6_IfAMtWjMcAr8i8vjqii_yvCfP8yGFJCW2HiIQHJlsoaRO_fvYYoKR4eCwPtWmhpTuaAdTvPuDYG9OcuM"
                alt="Serene woman meditating"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary-fixed rounded-full -z-10 opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low px-6 rounded-[3rem]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl mb-4">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest p-10 rounded-xl space-y-6 hover:translate-y-[-8px] transition-transform duration-500"
            >
              {item.icon}
              <h3 className="font-headline text-2xl">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between  mb-16 gap-6">
            <div className="max-w-xl">
              <span className="font-manrope text-sm uppercase tracking-[0.3em] text-primary font-bold">
                The Hands of Healing
              </span>
              <h2 className="font-headline text-4xl md:text-5xl mt-4">
                Meet the Team
              </h2>
            </div>
            <p className="font-body text-on-surface-variant max-w-sm mb-2">
              Dedicated individuals committed to your holistic transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-surface-container">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={member.img}
                    alt={member.name}
                  />
                </div>
                <h4 className="font-headline text-xl">{member.name}</h4>
                <p className="font-manrope text-xs text-primary font-bold uppercase tracking-widest mt-1 mb-3">
                  {member.role}
                </p>
                <p className="font-body text-sm text-on-surface-variant px-4">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 mb-16">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-on-primary relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full blur-[100px] opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
          <h2 className="font-headline text-4xl md:text-5xl mb-8 relative z-10">
            Ready to Start Your Journey?
          </h2>
          <p className="font-body text-on-primary-container text-lg max-w-2xl mx-auto mb-12 relative z-10 opacity-90">
            Step into the silence and rediscover your natural state of balance.
            Our practitioners are ready to welcome you.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-surface text-primary px-10 py-4 rounded-full font-manrope font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300">
              Book Now
            </button>
            <button className="border border-on-primary/30 text-on-primary px-10 py-4 rounded-full font-manrope font-bold uppercase tracking-widest hover:bg-on-primary/10 transition-colors">
              View Services
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
