import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pipelineImage from "@/assets/pipeline.jpg";
import drillingImage from "@/assets/drilling-equipment.jpg";
import rigImage from "@/assets/hero-rig.jpg";

const Projects = () => {
  const projects = [
    {
      title: "North Sea Offshore Platform",
      location: "North Sea, Europe",
      year: "2023",
      category: "Offshore Drilling",
      description: "Successfully completed installation and commissioning of advanced drilling equipment on a major offshore platform, increasing production capacity by 35%.",
      image: rigImage,
      stats: [
        { label: "Duration", value: "18 months" },
        { label: "Team Size", value: "45 specialists" },
        { label: "Capacity Increase", value: "35%" },
      ],
    },
    {
      title: "Trans-Continental Pipeline",
      location: "Middle East",
      year: "2022",
      category: "Infrastructure",
      description: "Managed the construction and maintenance of a 500km pipeline infrastructure project, ensuring environmental compliance and on-time delivery.",
      image: pipelineImage,
      stats: [
        { label: "Length", value: "500 km" },
        { label: "Duration", value: "24 months" },
        { label: "Safety Record", value: "Zero incidents" },
      ],
    },
    {
      title: "Onshore Well Development",
      location: "Texas, USA",
      year: "2023",
      category: "Drilling Operations",
      description: "Executed comprehensive drilling operations for 15 new wells, implementing cutting-edge directional drilling techniques.",
      image: drillingImage,
      stats: [
        { label: "Wells Completed", value: "15" },
        { label: "Duration", value: "12 months" },
        { label: "Efficiency Gain", value: "28%" },
      ],
    },
    {
      title: "Equipment Modernization",
      location: "Gulf of Mexico",
      year: "2022",
      category: "Maintenance & Upgrades",
      description: "Complete modernization of drilling equipment across three platforms, reducing downtime by 40% and improving safety standards.",
      image: rigImage,
      stats: [
        { label: "Platforms", value: "3" },
        { label: "Downtime Reduction", value: "40%" },
        { label: "Budget", value: "$45M" },
      ],
    },
    {
      title: "Safety System Implementation",
      location: "Alaska, USA",
      year: "2021",
      category: "Safety Consulting",
      description: "Designed and implemented comprehensive safety protocols and emergency response systems for extreme weather operations.",
      image: drillingImage,
      stats: [
        { label: "Sites Covered", value: "8" },
        { label: "Personnel Trained", value: "200+" },
        { label: "Incident Reduction", value: "65%" },
      ],
    },
    {
      title: "Deep Water Exploration",
      location: "West Africa",
      year: "2023",
      category: "Exploration",
      description: "Led deep water exploration project utilizing advanced subsea technology and real-time monitoring systems.",
      image: rigImage,
      stats: [
        { label: "Depth", value: "3,000m" },
        { label: "Duration", value: "20 months" },
        { label: "Success Rate", value: "100%" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-primary-foreground/90">
              Delivering excellence across diverse and challenging oil and rig operations worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">$2B+</div>
              <div className="text-muted-foreground">Total Project Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-none shadow-card hover:shadow-premium transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-primary font-semibold">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-3 bg-secondary rounded-lg">
                        <div className="text-lg font-bold text-accent">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Capabilities</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We handle projects of all scales and complexities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Small Scale", range: "$1M - $10M", description: "Focused operations with rapid deployment" },
              { title: "Medium Scale", range: "$10M - $50M", description: "Regional projects with dedicated teams" },
              { title: "Large Scale", range: "$50M+", description: "Multi-year international operations" },
            ].map((capability, index) => (
              <div key={index} className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-2">{capability.title}</h3>
                <div className="text-accent text-xl font-semibold mb-3">{capability.range}</div>
                <p className="text-primary-foreground/80">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
