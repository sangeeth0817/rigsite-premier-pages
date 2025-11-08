import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Users, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-rig.jpg";
import drillingImage from "@/assets/drilling-equipment.jpg";

const Home = () => {
  const services = [
    {
      icon: Wrench,
      title: "Drilling Operations",
      description: "Advanced drilling solutions with cutting-edge technology and experienced operators.",
    },
    {
      icon: Shield,
      title: "Safety Consulting",
      description: "Comprehensive safety programs ensuring compliance and protecting your workforce.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Industry-leading professionals with decades of combined experience.",
    },
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Engineers" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up opacity-0">
            Engineering Excellence
            <br />
            <span className="text-accent bg-clip-text animate-float">In Every Operation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up opacity-0 stagger-1">
            Leading provider of comprehensive oil and rig solutions with unmatched expertise and reliability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 stagger-2">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 hover:scale-105 transition-all duration-300 text-primary font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-2xl hover-glow"
            >
              Get Started <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-accent/80">{stat.number}</div>
                <div className="text-muted-foreground font-medium transition-colors duration-300 group-hover:text-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your oil and rig operational needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2 group cursor-pointer overflow-hidden bg-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-2xl transition-colors duration-300 group-hover:text-accent">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base transition-colors duration-300 group-hover:text-foreground">{service.description}</CardDescription>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                View All Services <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose OilRig Solutions</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                With over 25 years of industry experience, we deliver exceptional results through innovation, expertise, and unwavering commitment to safety.
              </p>
              <ul className="space-y-4">
                {[
                  "Industry-leading safety standards",
                  "State-of-the-art equipment and technology",
                  "Highly experienced engineering team",
                  "24/7 operational support",
                  "Environmental compliance and sustainability",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="mt-8 bg-accent hover:opacity-90 text-primary font-semibold"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-accent opacity-20 rounded-lg blur-xl group-hover:opacity-30 transition-opacity duration-500" />
              <img 
                src={drillingImage} 
                alt="Drilling Equipment" 
                className="rounded-lg shadow-premium relative z-10 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and discover how we can support your operations
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-primary font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover-glow group">
              Get in Touch <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
