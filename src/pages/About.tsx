import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import engineersImage from "@/assets/engineers-team.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality services in every project we undertake.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to provide efficient and sustainable solutions.",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Building trust through transparency, ethical practices, and reliable partnerships.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuously evolving to meet the changing needs of the energy industry.",
    },
  ];

  const milestones = [
    { year: "1998", event: "Company Founded" },
    { year: "2005", event: "Expanded Operations Internationally" },
    { year: "2012", event: "Reached 250+ Completed Projects" },
    { year: "2018", event: "Implemented Advanced Safety Protocols" },
    { year: "2023", event: "Achieved 500+ Projects Milestone" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About OilRig Solutions</h1>
            <p className="text-xl text-primary-foreground/90">
              A legacy of excellence in oil and rig operations, built on expertise, innovation, and unwavering commitment to safety
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 1998, OilRig Solutions began with a vision to revolutionize the oil and rig industry through innovative solutions and exceptional service delivery. Over the past 25 years, we have grown from a small operation to become a trusted leader in the energy sector.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering commitment to safety and environmental responsibility. Today, we serve clients across multiple continents, delivering comprehensive solutions for complex energy challenges.
                </p>
                <p>
                  With a team of over 50 expert engineers and technicians, we combine decades of experience with cutting-edge technology to provide unparalleled service quality. Our track record speaks for itself – over 500 successful projects and a 99% client satisfaction rate.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={engineersImage} 
                alt="Our Team" 
                className="rounded-lg shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-card text-center hover:shadow-premium transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className="w-24 flex-shrink-0">
                    <div className="text-3xl font-bold text-accent">{milestone.year}</div>
                  </div>
                  <div className="flex-1 p-6 bg-card rounded-lg shadow-card border border-border">
                    <p className="text-lg font-semibold text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Team by Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-lg">Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">25</div>
              <div className="text-lg">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">100+</div>
              <div className="text-lg">Safety Awards</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
