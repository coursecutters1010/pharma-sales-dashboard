'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString('en-IN');
  const formattedTime = time.toLocaleTimeString('en-IN');

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Surya Alluri
          </h1>

          <p className="text-xl text-gray-300 mb-4">
            Business Intelligence and Project Management Professional
          </p>

          <p className="text-sm text-gray-500 mb-10">
            {formattedDate} • {formattedTime}
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 px-6 py-3 rounded-full hover:border-white transition"
            >
              Contact
            </a>
          </div>
        </div>

      </section>

      {/* STATS */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-3 text-center">
          <div>
            <p className="text-3xl font-bold">2</p>
            <p className="text-gray-500 text-sm">Major BI Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold">40%</p>
            <p className="text-gray-500 text-sm">Efficiency Gain</p>
          </div>
          <div>
            <p className="text-3xl font-bold">1+</p>
            <p className="text-gray-500 text-sm">Experience</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold mb-12 text-center">
          Selected Work
        </h2>

        {/* FEATURED PROJECT */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-gray-800 rounded-2xl p-8 mb-12 hover:scale-[1.01] transition">

          <h3 className="text-2xl font-semibold mb-3">
            Pharma Sales & Inventory Dashboard
          </h3>

          <p className="text-gray-400 mb-6 max-w-2xl">
            End-to-end BI dashboard built in Tableau analyzing pharmaceutical sales performance,
            regional trends, and inventory optimization for business decision-making.
          </p>

          <div className="rounded-xl overflow-hidden border border-gray-700 mb-6">
            <iframe
              src="https://public.tableau.com/views/TheUnderdawggg/Dashboard1?:showVizHome=no&:embed=true"
              width="100%"
              height="520"
              style={{ border: "none" }}
            />
          </div>

          <a
            href="https://github.com/coursecutters1010/pharma-sales-dashboard"
            target="_blank"
            className="text-indigo-400 hover:text-indigo-300"
          >
            View GitHub Repository →
          </a>

        </div>

        {/* NEW PROJECT (ADDED) */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-gray-800 rounded-2xl p-8 mb-12 hover:scale-[1.01] transition">

          <h3 className="text-2xl font-semibold mb-3">
            Customer & Sales Intelligence Dashboard
          </h3>

          <p className="text-gray-400 mb-6 max-w-2xl">
            Built a BI case study dashboard to analyze customer behavior, sales performance,
            and regional trends. Helps identify business opportunities and performance gaps
            using data-driven insights.
          </p>

          <a
            href="https://public.tableau.com/app/profile/surya.alluri/viz/TheUnderdawggg/Dashboard1"
            target="_blank"
            className="text-green-400 hover:text-green-300"
          >
            View Live Dashboard →
          </a>

        </div>

        {/* OTHER PROJECTS */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:scale-[1.02] transition">
            <h3 className="font-semibold mb-2">Sales Analytics Dashboard</h3>
            <p className="text-gray-400 text-sm">
              KPI tracking system for revenue performance monitoring.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:scale-[1.02] transition">
            <h3 className="font-semibold mb-2">Startup Funding Insights</h3>
            <p className="text-gray-400 text-sm">
              Analysis of investment trends across startup ecosystems.
            </p>
          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section className="py-24 px-6 border-t border-gray-800">
        
        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="mb-4 font-semibold">BI Tools</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Tableau</li>
              <li>Power BI</li>
              <li>SQL</li>
              <li>Excel</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="mb-4 font-semibold">Analytics</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Data Visualization</li>
              <li>Data Cleaning</li>
              <li>Reporting</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="mb-4 font-semibold">Business</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Project Management</li>
              <li>Stakeholder Communication</li>
              <li>Problem Solving</li>
            </ul>
          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 border-t border-gray-800">
        
        <h2 className="text-4xl font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto border-l border-gray-700 pl-6">
          <h3 className="font-semibold text-lg">
            Investor Relations Associate
          </h3>
          <p className="text-gray-500">Hyderabad Angels</p>
        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center border-t border-gray-800">
        
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-2">
          📞 +91 7032173958
        </p>

        <p className="text-gray-400 mb-6">
          📧 allurisurya.10@gmail.com
        </p>

        <div className="flex justify-center gap-6 text-sm">
          <a href="https://github.com/coursecutters1010" className="text-indigo-400 hover:text-indigo-300">
            GitHub
          </a>
          <a href="#" className="text-indigo-400 hover:text-indigo-300">
            LinkedIn
          </a>
          <a href="#" className="text-indigo-400 hover:text-indigo-300">
            Resume
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-600 text-xs border-t border-gray-800">
        <p>© {new Date().getFullYear()} Surya Alluri</p>
      </footer>

    </div>
  );
}