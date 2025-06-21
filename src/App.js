import { useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import profile from "./assets/FH.jpg"

export default function App() {

  useEffect(() => {
    document.title = "Florian Hölken"
    const existing = document.querySelector("link[rel='icon']")
    if (existing) document.head.removeChild(existing)
    const favicon = document.createElement("link")
    favicon.rel = "icon"
    favicon.href = "/favicon.png"
    document.head.appendChild(favicon)
  }, [])

  return (
    <div className="relative">
      {/* Social Sidebar */}
      <div className="fixed left-24 bottom-0 hidden md:flex flex-col items-center gap-5 text-neutral-400 z-50">
        <a href="https://github.com/hoelk-f" target="_blank" rel="noreferrer" className="hover:text-teal-400">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/hoelken-florian/" target="_blank" rel="noreferrer" className="hover:text-teal-400">
          <Linkedin size={20} />
        </a>
        <a href="https://orcid.org/0009-0002-5191-901X" target="_blank" rel="noreferrer" className="hover:text-teal-400">
          <i className="fa-brands fa-orcid text-[20px]"></i>
        </a>
        <a href="https://scholar.google.de/citations?user=dzMARTYAAAAJ&hl=de" target="_blank" rel="noreferrer" className="hover:text-teal-400">
          <i className="fa-brands fa-google-scholar text-[20px]"></i>
        </a>
        <a href="mailto:hoelken@uni-wuppertal.de" className="hover:text-teal-400">
          <Mail size={20} />
        </a>
        <div className="w-px h-[100px] bg-neutral-700 mt-2"></div>
      </div>

      <main className="min-h-screen bg-[#121212] text-neutral-200 px-10 md:px-64 pt-36 pb-20 font-sans">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-neutral-800">
          <nav className="flex justify-between items-center px-6 md:px-64 py-4">
            <a href="/" className="w-10 h-10 border-2 border-teal-400 rounded-md flex items-center justify-center text-teal-400 font-bold text-sm tracking-widest">
              FH
            </a>
            <div className="hidden md:flex gap-6 text-sm text-neutral-400 items-center">
                            <a href="#experience" className="hover:text-teal-400 transition">Experience</a>
              <a href="#projects" className="hover:text-teal-400 transition">Research Projects</a>
              <a href="#research" className="hover:text-teal-400 transition">Research</a>
              
            </div>
          </nav>
        </header>

        <section className="mb-40" id="about">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            <img
              src={profile}
              alt="Portrait of Florian"
              className="w-40 h-40 rounded-full object-cover border border-neutral-800"
            />
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-neutral-100">Hi, I'm Florian.</h2>
              <p className="text-lg md:text-xl text-neutral-400 max-w-3xl">
                Scientific Researcher at the University of Wuppertal, in the Semantic Systems Engineering research group.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-40 scroll-mt-32" id="experience">
          <h3 className="text-3xl font-semibold mb-8 text-neutral-100">Experience</h3>
          <div className="space-y-6">
            <div className="border-l border-neutral-800 pl-6 hover:border-teal-400 transition">
              <h4 className="text-lg font-semibold text-neutral-200">Scientific Researcher @ University of Wuppertal</h4>
              <p className="text-sm text-neutral-500">09/2023 – present</p>
              <p className="mt-2 text-neutral-400">
                Focus on improving data usability in heterogeneous environments using semantic technologies.
              </p>
            </div>
            <div className="border-l border-neutral-800 pl-6 hover:border-teal-400 transition">
              <h4 className="text-lg font-semibold text-neutral-200">Technical Assistant @ University of Wuppertal</h4>
              <p className="text-sm text-neutral-500">01/2022 – 04/2023</p>
              <p className="mt-2 text-neutral-400">
                AI research and development in industrial environments.
              </p>
            </div>
            <div className="border-l border-neutral-800 pl-6 hover:border-teal-400 transition">
              <h4 className="text-lg font-semibold text-neutral-200">Working Student in Controlling @ Vorwerk Automotive</h4>
              <p className="text-sm text-neutral-500">02/2019 – 01/2022</p>
              <p className="mt-2 text-neutral-400">
                Process optimization, data engineering and data analysis.
              </p>
            </div>
            <div className="border-l border-neutral-800 pl-6 hover:border-teal-400 transition">
              <h4 className="text-lg font-semibold text-neutral-200">IT Student Assistant @ University of Wuppertal</h4>
              <p className="text-sm text-neutral-500">02/2013 – 02/2019</p>
              <p className="mt-2 text-neutral-400">
                Technical support and IT services at the Institute for Educational Research.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-40 scroll-mt-32" id="projects">
          <h3 className="text-3xl font-semibold mb-8 text-neutral-100">Research Projects</h3>
          <div className="space-y-6">
            <div className="border border-neutral-800 border-l-4 border-l-neutral-800 border-r-4 border-r-neutral-800 rounded-xl p-6 hover:border-l-teal-400 hover:border-r-teal-400 transition">
              <h4 className="text-lg font-semibold text-neutral-200">
                Gesundes.Tal – Digital Health Promotion in Wuppertal
              </h4>
              <p className="text-sm text-neutral-500">08/2024 – present</p>
              <p className="text-sm text-neutral-500">
                Development of a decentralized health data space using semantic technologies to provide personalized, digital health services and promote preventive healthcare in Wuppertal.
              </p>
            </div>
            <div className="border border-neutral-800 border-l-4 border-l-neutral-800 border-r-4 border-r-neutral-800 rounded-xl p-6 hover:border-l-teal-400 hover:border-r-teal-400 transition">
              <h4 className="text-lg font-semibold text-neutral-200">
                IoT4H – Internet of Things for Crafts
              </h4>
              <p className="text-sm text-neutral-500">08/2023 – present</p>
              <p className="text-sm text-neutral-500">
                Design and implementation of an IoT platform enabling craft businesses to identify and utilize IoT-based applications, including support for sensor selection, installation, and data management.
              </p>
            </div>
            <div className="border border-neutral-800 border-l-4 border-l-neutral-800 border-r-4 border-r-neutral-800 rounded-xl p-6 hover:border-l-teal-400 hover:border-r-teal-400 transition">
              <h4 className="text-lg font-semibold text-neutral-200">
                ASaG – Automated Damage Detection on Freight Cars
              </h4>
              <p className="text-sm text-neutral-500">08/2023 – 08/2024</p>
              <p className="text-sm text-neutral-500">
                Development of AI-based image analysis methods to partially automate the inspection of freight cars, aiming to enhance the efficiency and safety of rail freight transport.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-40 scroll-mt-32" id="research">
          <h3 className="text-3xl font-semibold mb-8 text-neutral-100">Research</h3>
          <div className="space-y-6">
            <div className="border-l border-neutral-800 pl-6 hover:border-teal-400 transition group">
              <h4 className="text-lg font-semibold text-neutral-200">
                Smart City Urban Heat Monitoring using a Solid-based Dataspace
              </h4>
              <p className="text-sm text-neutral-500">
                Hölken, F., Paulus, A., Meisen, T., & Pomp, A. (Accepted – Not Yet Published)
              </p>
              <p className="mt-2 text-neutral-400">
                ESWC2025: The Third International Workshop on Semantics in Dataspaces (SDS 2025), June 2025, Portorož, Slovenia.
              </p>
              <div className="mt-3 ml-4 pl-4 border-l border-neutral-800 group-hover:border-teal-400 transition">
                <div className="flex items-center gap-2 text-sm text-neutral-400 mt-1">
                  <i className="fa-brands fa-github text-[13px] text-neutral-500 w-4"></i>
                  <a href="https://github.com/hoelk-f/smart-city-urban-heat-monitoring" target="_blank" rel="noreferrer" className="hover:text-teal-400">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="border-l border-neutral-800 pl-6 hover:border-teal-400 transition group">
              <h4 className="text-lg font-semibold text-neutral-200">
                Bridging the Discovery Gap in Solid Dataspaces with a Semantic Data Catalog
              </h4>
              <p className="text-sm text-neutral-500">
                Hölken, F., Paulus, A., Meisen, T., & Pomp, A. (Accepted – Not Yet Published)
              </p>
              <p className="mt-2 text-neutral-400">
                2nd Solid Symposium, April 2025, Leiden, Netherlands.
              </p>
              <div className="mt-3 ml-4 pl-4 border-l border-neutral-800 group-hover:border-teal-400 transition">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <i className="fa-solid fa-desktop text-neutral-500 w-4 text-[14px]"></i>
                  <a href="https://semantic-data-catalog.com" target="_blank" rel="noreferrer" className="hover:text-teal-400">
                    Demo
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400 mt-1">
                  <i className="fa-brands fa-github text-neutral-500 w-4 text-[14px]"></i>
                  <a href="https://github.com/hoelk-f/semantic-data-catalog" target="_blank" rel="noreferrer" className="hover:text-teal-400">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://link.springer.com/article/10.1365/s40702-024-01119-7"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="border-l border-neutral-800 pl-6 hover:border-teal-400 transition">
                <h4 className="text-lg font-semibold text-neutral-200">
                  IoT4H: Datengewinnung und -nutzung für innovative Geschäftsmodelle im Handwerk
                </h4>
                <p className="text-sm text-neutral-500">
                  Paulus, A., Hölken, F., Chmielewski, S., & Pomp, A. (2024)
                </p>
                <p className="mt-2 text-neutral-400">
                  <em>HMD Praxis der Wirtschaftsinformatik</em>, 61(6), 1540–1550.
                </p>
              </div>
            </a>
            <a
              href="https://www.mdpi.com/2571-5577/7/1/11"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="border-l border-neutral-800 pl-6 hover:border-teal-400 transition">
                <h4 className="text-lg font-semibold text-neutral-200">
                  Deep learning for automated visual inspection in manufacturing and maintenance: a survey of open-access papers
                </h4>
                <p className="text-sm text-neutral-500">
                  Hütten, N., Alves Gomes, M., Hölken, F., Andricevic, K., Meyes, R., & Meisen, T. (2024)
                </p>
                <p className="mt-2 text-neutral-400">
                  <em>Applied System Innovation</em>, 7(1), 11.
                </p>
              </div>
            </a>
          </div>
        </section>

        <footer className="text-center text-sm text-neutral-500 pb-0">
          &copy; Florian Hölken
        </footer>
      </main>
    </div>
  )
}
