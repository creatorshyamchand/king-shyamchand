import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";
import { Book, Mail, Phone, Award, Code, Crown, GraduationCap, BriefcaseBusiness } from "lucide-react";

const Index = () => {
  const [testimonials] = useState([
    {
      name: "Arpita Roy",
      title: "Senior Developer",
      content: "King Shyam's expertise in web development has transformed our entire tech stack.",
    },
    {
      name: "Rahul Kumar",
      title: "Tech Lead",
      content: "The advanced development courses were exactly what our team needed to level up.",
    },
    {
      name: "Priya Sharma",
      title: "Project Manager",
      content: "His approach to teaching complex concepts makes learning advanced development accessible.",
    },
  ]);

  const [certificates] = useState([
    {
      title: "Advanced Web Development",
      issuer: "International Web Technologies Institute",
      year: 2023,
      icon: <Code className="text-academy-primary" size={24} />
    },
    {
      title: "Full Stack JavaScript Certification",
      issuer: "Global Programming Academy",
      year: 2022,
      icon: <Award className="text-academy-primary" size={24} />
    },
    {
      title: "Cloud Architecture Certification",
      issuer: "Cloud Computing Institute",
      year: 2023,
      icon: <Crown className="text-academy-primary" size={24} />
    }
  ]);

  const [expertise] = useState([
    {
      title: "Full Stack Development",
      description: "Expert in modern web technologies and frameworks",
      icon: <Code className="text-academy-primary" size={32} />
    },
    {
      title: "Technical Leadership",
      description: "Guiding teams to deliver exceptional results",
      icon: <Crown className="text-academy-primary" size={32} />
    },
    {
      title: "Advanced Training",
      description: "Professional development workshops and courses",
      icon: <GraduationCap className="text-academy-primary" size={32} />
    },
    {
      title: "Enterprise Solutions",
      description: "Building scalable business applications",
      icon: <BriefcaseBusiness className="text-academy-primary" size={32} />
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-academy-primary to-academy-secondary text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="text-white" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">King Shyam</h1>
            </div>
            <p className="text-xl mb-6">Elite Web Development & Technical Leadership</p>
            <p className="mb-8">
              With over 15 years of experience in enterprise web development and technical leadership,
              I specialize in creating cutting-edge digital solutions and mentoring the next generation
              of developers. My expertise spans full-stack development, cloud architecture, and
              advanced technical training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button className="bg-white text-academy-primary hover:bg-academy-light">
                  View Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-academy-primary">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&h=600" 
              alt="Professional Web Developer" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Areas of Expertise</h2>
            <p className="text-gray-600">Comprehensive Technical Solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-academy-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-academy-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Professional Certifications</h2>
            <p className="text-gray-600">Validated Expertise in Web Development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-6">
                <div className="flex-shrink-0">{cert.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-academy-primary mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">Awarded in {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-academy-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&h=800" 
                alt="Prof. Shyamchand Das" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-academy-dark">About Prof. Shyamchand Das</h2>
              <p className="mb-4 text-gray-700">
                With over 12 years of experience in English education, Prof. Shyamchand Das has helped countless students 
                achieve their language learning goals through personalized instruction and innovative teaching methods.
              </p>
              <p className="mb-6 text-gray-700">
                Based in West Bengal, India, he specializes in making English learning accessible and enjoyable 
                for students of all levels, from beginners to advanced learners.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="flex justify-center mb-2">
                    <Book className="text-academy-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-academy-primary text-xl">Expert Teacher</h3>
                  <p className="text-gray-600">12+ years experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="flex justify-center mb-2">
                    <Mail className="text-academy-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-academy-primary text-xl">Personalized</h3>
                  <p className="text-gray-600">Individual attention</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="flex justify-center mb-2">
                    <Phone className="text-academy-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-academy-primary text-xl">Always Available</h3>
                  <p className="text-gray-600">Dedicated support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
            <p className="text-gray-600">Comprehensive English programs for all levels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {courses.map((course) => (
              <CourseCard 
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                price={course.price}
                level={course.level}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-academy-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Client Testimonials</h2>
            <p className="text-gray-600">What Industry Leaders Say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <p className="mb-4 text-gray-700 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-academy-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-academy-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Partner with King Shyam to elevate your web development projects and technical expertise.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-academy-primary hover:bg-academy-light px-8 py-2">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
