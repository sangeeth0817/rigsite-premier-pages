import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Shield, 
  Construction, 
  Settings, 
  ClipboardCheck, 
  Zap,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Construction,
      title: "Drilling Operations",
      description: "Comprehensive drilling services utilizing state-of-the-art equipment and techniques for optimal well performance.",
      features: [
        "Onshore & offshore drilling",
        "Directional drilling expertise",
        "Well planning and design",
        "Real-time monitoring systems",
      ],
    },
    {
      icon: Wrench,
      title: "Equipment Maintenance",
      description: "Preventive and corrective maintenance services to ensure maximum uptime and operational efficiency.",
      features: [
        "Scheduled maintenance programs",
        "Emergency repair services",
        "Equipment upgrades",
        "Performance optimization",
      ],
    },
    {
      icon: Shield,
      title: "Safety Consulting",
      description: "Expert safety consulting services to protect your workforce and ensure regulatory compliance.",
      features: [
        "Safety audits and assessments",
        "HSE training programs",
        "Risk management strategies",
        "Compliance certification",
      ],
    },
    {
      icon: Settings,
      title: "Well Services",
      description: "Complete well intervention and workover services to maximize production and extend well life.",
      features: [
        "Well completion services",
        "Workover operations",
        "Well stimulation",
        "Production enhancement",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project management ensuring on-time, on-budget delivery of complex operations.",
      features: [
        "Project planning & execution",
        "Resource optimization",
        "Quality assurance",
        "Stakeholder coordination",
      ],
    },
    {
      icon: Zap,
      title: "Technical Support",
      description: "Round-the-clock technical support and consulting services for all your operational needs.",
      features: [
        "24/7 emergency support",
        "Technical consulting",
        "Troubleshooting assistance",
        "Remote monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive solutions designed to meet the diverse needs of the oil and rig industry
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Consultation", description: "Understanding your unique requirements and challenges" },
              { step: "02", title: "Planning", description: "Developing comprehensive strategies and timelines" },
              { step: "03", title: "Execution", description: "Implementing solutions with precision and expertise" },
              { step: "04", title: "Support", description: "Ongoing assistance and continuous improvement" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss how we can tailor our services to meet your specific needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:opacity-90 text-primary font-semibold text-lg px-8 py-6">
                Contact Our Team <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
