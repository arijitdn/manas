import { Link } from "react-router-dom";
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
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                MANAS
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal opacity-90">
                  Mental Health &amp; Normalcy Augmentation System
                </span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                A confidential platform to report drug-related activities and
                seek help. Your identity will remain completely anonymous while
                helping build a drug-free India.
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
                <img
                  src="/banner.jpg"
                  alt="MANAS Portal Illustration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                About MANAS Initiative
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MANAS (Mental Health &amp; Normalcy Augmentation System) is a
                  pioneering initiative by the Narcotics Control Bureau,
                  Government of India, designed to combat drug abuse and
                  trafficking through community participation.
                </p>
                <p>
                  Our platform ensures complete anonymity while enabling
                  citizens to report drug-related activities, seek help for
                  addiction, and access rehabilitation resources. Every report
                  contributes to building a safer, drug-free society.
                </p>
                <p>
                  With advanced security measures and a dedicated team of
                  professionals, MANAS serves as a bridge between communities
                  and law enforcement agencies.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More About NCB
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

      {/* Statistics */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Making a Difference
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Together, we&apos;re building a stronger defense against drug
              abuse and trafficking across India.
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

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How MANAS Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, secure, and effective ways to report drug-related
              activities and seek help.
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
                drug-related activities anonymously.
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
              resources for drug abuse prevention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Drug Awareness Guide</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive guide on recognizing signs of drug abuse and
                  prevention strategies.
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
                  <span>Rehabilitation Centers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Find certified rehabilitation centers and support groups in
                  your area.
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
                  Access MANAS services through the official UMANG mobile
                  application.
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

      {/* Emergency Banner */}
      <section className="py-8 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              Emergency? Need Immediate Help?
            </h3>
            <p className="mb-4">
              If you or someone you know is in immediate danger, contact
              emergency services
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
                <span className="font-bold">MANAS: 1933</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
