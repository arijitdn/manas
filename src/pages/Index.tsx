import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Shield,
  AlertTriangle,
  Users,
  Eye,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Index() {
  // Banner images for auto-sliding
  const bannerImages = [
    {
      src: "/banner.jpg",
      alt: "Anti Drug Campaign",
    },
    {
      src: "/banner2.jpg",
      alt: "Stop Child Marriage",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length,
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-10 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Jeevan Raksha
                <span className="block text-2xl md:text-3xl lg:text-2xl font-normal opacity-90">
                  Your Partner in the Fight Against Drugs and Child Marriage
                </span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                A confidential platform to report drug-related activities and
                child marriage cases. Your identity will remain completely
                anonymous while helping build a safer India free from drugs and
                child marriage.
              </p>
              <div className="flex flex-col items-center sm:flex-row gap-4">
                <Link to="/submit-tip">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto py-6"
                  >
                    Submit a Tip
                  </Button>
                </Link>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <div>
                    <p className="flex items-center gap-2 text-center text-lg font-bold">
                      <Phone className="h-5 w-5" />
                      <span>1933 (Toll Free)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="relative overflow-hidden rounded-lg">
                  {bannerImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-auto transition-all duration-1000 ease-in-out ${
                        index === currentImageIndex
                          ? "opacity-100 translate-x-0"
                          : index < currentImageIndex
                            ? "opacity-0 -translate-x-full absolute top-0 left-0"
                            : "opacity-0 translate-x-full absolute top-0 left-0"
                      }`}
                    />
                  ))}

                  {/* Slide indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {bannerImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">
                    Report Drug Activity
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Anonymously report suspected drug trafficking, cultivation, or
                  distribution in your area.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to="/submit-tip" className="w-full">
                  <Button className="w-full">Report Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-l-4 border-l-destructive hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-destructive" />
                  <CardTitle className="text-lg">
                    Report Child Marriage
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Confidentially report cases of child marriage or prevent
                  upcoming ceremonies in your community.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to="/submit-tip" className="w-full">
                  <Button className="w-full bg-destructive hover:bg-destructive/90">
                    Report Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-l-4 border-l-gov-green hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Phone className="h-6 w-6 text-gov-green" />
                  <CardTitle className="text-lg">Emergency Helpline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Call our 24/7 toll-free helpline for immediate assistance and
                  counseling support.
                </CardDescription>
                <div className="text-center p-4 bg-gov-green/10 rounded-lg">
                  <p className="text-2xl font-bold text-gov-green">1933</p>
                  <p className="text-sm text-gray-600">Toll Free</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gov-blue hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-gov-blue" />
                  <CardTitle className="text-lg">Email Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Send detailed information and supporting documents via our
                  secure email system.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a href="mailto:info.ncbmanas@gov.in" className="w-full">
                  <Button className="w-full hover:bg-blue-700">
                    Send Email
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About MANAS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About Jeevan Raksha Initiative
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Jeevan Raksha is a comprehensive initiative designed to combat
                  both drug abuse and child marriage through community
                  participation and government support. Our dual mission
                  protects vulnerable individuals and strengthens social fabric.
                </p>
                <p>
                  Our platform ensures complete anonymity while enabling
                  citizens to report drug-related activities, child marriage
                  cases, seek help for addiction, and access support resources.
                  Every report contributes to building a safer, more protective
                  society.
                </p>
                <p>
                  With advanced security measures and a dedicated team of
                  professionals, Jeevan Raksha serves as a bridge between
                  communities and law enforcement agencies, child welfare
                  services, and support organizations.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More About Our Mission
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">
                    100% Anonymous
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Complete privacy protection
                  </p>
                </div>
                <div className="text-center p-6 bg-gov-green/5 rounded-lg">
                  <Users className="h-8 w-8 text-gov-green mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">
                    Community Driven
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Citizens helping citizens
                  </p>
                </div>
                <div className="text-center p-6 bg-gov-blue/5 rounded-lg">
                  <Eye className="h-8 w-8 text-gov-blue mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">
                    24/7 Monitoring
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Round-the-clock support
                  </p>
                </div>
                <div className="text-center p-6 bg-gov-saffron/5 rounded-lg">
                  <FileText className="h-8 w-8 text-gov-saffron mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">
                    Secure Reports
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Encrypted data handling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Messages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Messages from Officials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read important messages and directives from our district
              leadership regarding drug prevention and child protection
              initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* District Magistrate Message */}
            <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  District Magistrate
                </CardTitle>
                <p className="text-sm text-gray-500 font-medium">
                  Administrative Head
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-l-primary">
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "Jeevan Raksha represents our collective commitment to
                    protecting our communities. Every citizen has a role to play
                    in creating a safer environment for our children and
                    families. Your vigilance and participation make a real
                    difference."
                  </blockquote>
                </div>
                <div className="mt-4 text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    — District Magistrate
                  </p>
                  <p className="text-xs text-gray-500">
                    District Administration
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Superintendent of Police Message */}
            <Card className="border-t-4 border-t-gov-blue hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gov-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-gov-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Superintendent of Police
                </CardTitle>
                <p className="text-sm text-gray-500 font-medium">
                  Law Enforcement Head
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-gov-blue/5 p-4 rounded-lg border-l-4 border-l-gov-blue">
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "Law enforcement is most effective when communities actively
                    participate. Through Jeevan Raksha, we can work together to
                    identify threats early and take swift action to protect our
                    most vulnerable citizens."
                  </blockquote>
                </div>
                <div className="mt-4 text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    — Superintendent of Police
                  </p>
                  <p className="text-xs text-gray-500">District Police</p>
                </div>
              </CardContent>
            </Card>

            {/* District Administration Message */}
            <Card className="border-t-4 border-t-gov-green hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gov-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-10 w-10 text-gov-green" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  District Administration
                </CardTitle>
                <p className="text-sm text-gray-500 font-medium">
                  Coordinating Authority
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-gov-green/5 p-4 rounded-lg border-l-4 border-l-gov-green">
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "Our administration is committed to creating comprehensive
                    support systems. Jeevan Raksha bridges the gap between
                    citizens and services, ensuring help reaches those who need
                    it most, when they need it."
                  </blockquote>
                </div>
                <div className="mt-4 text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    — District Administration
                  </p>
                  <p className="text-xs text-gray-500">Coordination Office</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Notice */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Joint Statement on Community Safety
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The District Administration, Police Department, and all
                    concerned authorities work in coordination to ensure the
                    safety and protection of our citizens. We encourage all
                    community members to actively participate in the Jeevan
                    Raksha initiative and report any suspicious activities
                    through the secure channels provided.
                  </p>
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <span>Last updated: July 2025</span>
                    <span className="mx-2">•</span>
                    <span>Official District Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Making a Difference Together
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Together, we&apos;re building a stronger defense against drug
              abuse and child marriage across India, protecting our communities
              and children.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center place-content-center">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                24/7
              </div>
              <p className="text-gray-300">Helpline Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gov-green mb-2">
                100%
              </div>
              <p className="text-gray-300">Anonymous Reporting</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gov-blue mb-2">
                Pan-India
              </div>
              <p className="text-gray-300">Coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gov-saffron mb-2">
                Multi-Channel
              </div>
              <p className="text-gray-300">Support System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-gov-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <svg
                className="w-16 h-16 text-primary/30 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mb-6">
              "The greatest revolution of our generation is the discovery that
              human beings, by changing the inner attitudes of their minds, can
              change the outer aspects of their lives."
            </blockquote>
            <cite className="text-lg text-gray-600 font-medium">
              — William James
            </cite>
            <div className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
              <p className="text-lg text-gray-700 italic">
                Every report you make, every call for help you answer, creates
                ripples of change. Together, we can break the chains of
                addiction and protect our children's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How Jeevan Raksha Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, secure, and effective ways to report drug-related
              activities, child marriage cases, and seek help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Report or Call
              </h3>
              <p className="text-gray-600">
                Use our online portal, call 1933, or send an email to report
                drug-related activities or child marriage cases anonymously.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gov-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gov-green">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure Processing
              </h3>
              <p className="text-gray-600">
                Your report is securely processed by trained professionals while
                maintaining complete confidentiality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gov-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gov-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Action Taken
              </h3>
              <p className="text-gray-600">
                Appropriate action is taken by law enforcement agencies based on
                the information provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Resources &amp; Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access educational materials, awareness content, and support
              resources for drug abuse prevention and child marriage awareness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Awareness Guide</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive guide on recognizing signs of drug abuse and
                  preventing child marriage in communities.
                </CardDescription>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gov-green" />
                  <span>Support Centers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Find certified rehabilitation centers, child protection
                  services, and support groups in your area.
                </CardDescription>
                <Link to="/awareness">
                  <Button variant="outline" className="w-full">
                    Find Centers
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ExternalLink className="h-5 w-5 text-gov-blue" />
                  <span>UMANG App</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Access Jeevan Raksha services through the official UMANG
                  mobile application for reporting and support.
                </CardDescription>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Download App
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Gallery - Our Impact in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Witness the positive change happening across India through our
              community-driven initiatives in drug prevention and child
              protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=center"
                alt="Community Awareness Program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-1">
                  Community Awareness Program
                </h3>
                <p className="text-sm opacity-90">
                  Educating communities about drug prevention and child safety
                </p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1596496356933-9b6e0b186b88?w=400&h=300&fit=crop&crop=center"
                alt="Student Workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-1">
                  Student Workshops
                </h3>
                <p className="text-sm opacity-90">
                  Engaging with youth to build awareness and resilience
                </p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop&crop=center"
                alt="Government Officials Meeting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-1">
                  Policy Development
                </h3>
                <p className="text-sm opacity-90">
                  Working with authorities to strengthen protection laws
                </p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop&crop=center"
                alt="Rehabilitation Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-1">
                  Rehabilitation Support
                </h3>
                <p className="text-sm opacity-90">
                  Providing care and recovery assistance to those in need
                </p>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop&crop=center"
                alt="Technology Training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-1">
                  Digital Literacy Programs
                </h3>
                <p className="text-sm opacity-90">
                  Empowering communities with digital reporting tools
                </p>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop&crop=center"
                alt="Success Stories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-1">Success Stories</h3>
                <p className="text-sm opacity-90">
                  Celebrating lives saved and communities transformed
                </p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              <Eye className="h-5 w-5 mr-2" />
              View Complete Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              Emergency? Need Immediate Help?
            </h3>
            <p className="mb-4">
              If you or someone you know is in immediate danger from drugs or
              facing child marriage, contact emergency services
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Phone className="h-5 w-5" />
                <span className="font-bold">Police: 100</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Phone className="h-5 w-5" />
                <span className="font-bold">Medical: 108</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Phone className="h-5 w-5" />
                <span className="font-bold">Jeevan Raksha: 1933</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
