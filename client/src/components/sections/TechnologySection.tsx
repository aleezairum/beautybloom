import { TECHNOLOGIES, PROCESS_STEPS } from "@/lib/constants";

export default function TechnologySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-transparent to-orange-400 opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-orange-500 mb-4 block">Innovation</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Photonic</span>
            <span className="text-white"> Technology</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Our proprietary light-activated compounds work in harmony with your skin's natural biology to enhance cellular renewal.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.id} className="group relative">
              <div className="p-8 rounded-2xl glass-effect hover:border-orange-500 transition-all duration-500 border border-transparent hover-scale h-full">
                <div className="text-6xl font-bold gradient-text mb-6 group-hover:animate-glow">
                  {tech.id}
                </div>
                {/* <div className="w-16 h-16 rounded-2xl bg-orange-500 bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                  <i className={`${tech.icon} text-orange-500 text-2xl`}></i>
                </div> */}
                <h3 className="text-xl font-semibold mb-4 text-white">{tech.title}</h3>
                <p className="text-gray-400 leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Visualization */}
        {/* <div className="glass-effect rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">The Science Behind the Glow</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 transition-all duration-300 hover-scale">
                  <i className={`${step.icon} text-orange-500 text-xl`}></i>
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
