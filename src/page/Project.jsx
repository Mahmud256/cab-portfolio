import useTheme from '../../hook/useTheme';

import img1 from '../../assets/banner-1.png';
import img2 from '../../assets/banner-2.png';
import img3 from '../../assets/banner-3.jpeg';
import img8 from '../../assets/banner-8.jpg';
import img5 from '../../assets/banner-5.png';
import img7 from '../../assets/banner-7.jpg';
import img9 from '../../assets/banner-9.png';
import img10 from '../../assets/banner-10.jpg';

const Project = () => {
  const { darkMode, themeColor, bgColor } = useTheme();

  // 🔹 Web Projects (3)
  const webProjects = [
    { id: 1, title: 'Dhaka Dream Nest', img: img8, link: 'https://dhaka-dream-nest.vercel.app/' },
    { id: 2, title: 'Gulshan Dream Nest', img: img3, link: 'https://assignment-12-6f6d3.web.app/' },
    { id: 3, title: 'Modern Technology and Electronics', img: img1, link: 'https://assignment-1010.netlify.app/' },
  ];

  // 🔹 SQA Projects (3)
  const sqaProjects = [
    { id: 4, title: 'Online Gift Shop - Testing Project (Manual, API Testing) ', img: img2, link: 'https://github.com/Mahmud256/Manual-and-API-Testing-OGS-Demo-Website' },
    { id: 5, title: 'Luxora - E2E Automation Test (Selenium, Mocha, POM)', img: img5, link: 'https://github.com/Mahmud256/luxora-test' },
    { id: 6, title: 'Group Study Assignment – Automation Testing (Playwright, POM)', img: img7, link: 'https://github.com/Mahmud256/gsa' },
  ];

  // 🔹 Data Analysis Projects (2)
  const dataProjects = [
    { id: 7, title: 'Olympics 2024 Data Analysis', img: img9, link: 'https://github.com/Mahmud256/olympics-2024-analysis' },
    { id: 8, title: 'Amazon Sales Report Analysis', img: img10, link: 'https://github.com/Mahmud256/AmazonSalesReportAnalysis' },
  ];

  // 🔥 Reusable Card
  const ProjectCard = ({ project }) => (
    <div className="group rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

      <div className="relative overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */} 
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"> 
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full text-white font-semibold backdrop-blur-md border-2 border-white/30" style={{ borderColor: bgColor }} > View Project </a> 
        </div>
      </div>

      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold" style={{ color: bgColor }}>
          {project.title}
        </h3>
      </div>
    </div>
  );

  // 🔥 Section Component
  const Section = ({ title, projects }) => (
    <div className="mb-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${themeColor}`}>
        {title}
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="project"
      className={`pb-14 px-6 ${darkMode === 'dark' ? 'bg-gray-900' : 'bg-[#ecedf5]'}`}
    >
      {/* Main Title */}
      <div className="text-center py-14">
        <h2 className={`text-4xl md:text-5xl font-bold ${themeColor}`}>
          My Projects
        </h2>
        <p className="text-gray-400 mt-3">Showcasing my skills and experience</p>
      </div>

      {/* Sections */}
      <Section title="Web Development Projects" projects={webProjects} />
      <Section title="SQA Projects" projects={sqaProjects} />
      <Section title="Data Analysis Projects" projects={dataProjects} />
    </section>
  );
};

export default Project;