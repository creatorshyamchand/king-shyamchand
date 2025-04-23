
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";

const Index = () => {
  const [testimonials] = useState([
    {
      name: "Riya Sharma",
      class: "Class 10",
      content: "Mythun Academy's English course helped me improve my writing skills significantly. I scored an A+ in my board exam!",
    },
    {
      name: "Arjun Patel",
      class: "Class 7",
      content: "The interactive teaching style makes learning English fun. I used to dislike grammar, but now I enjoy it!",
    },
    {
      name: "Neha Gupta",
      class: "Class 12",
      content: "The focused preparation for board exams was exactly what I needed. The practice materials were very helpful.",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-academy-primary to-academy-secondary text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Mythun Academy</h1>
            <p className="text-xl mb-6">Excellence in English Education</p>
            <p className="mb-8">
              Transform your English skills with our specialized courses taught by expert instructor Mr. Mithun Das.
              Comprehensive programs for students from Class 5 to 12.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button className="bg-white text-academy-primary hover:bg-academy-light">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-academy-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600" 
              alt="English Education" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-academy-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=800" 
                alt="Mythun Academy" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-academy-dark">About Mythun Academy</h2>
              <p className="mb-4 text-gray-700">
                Mythun Academy was founded with a mission to provide quality English education to students across all grade levels. 
                We are located in Aurangabad, Suti 2, Murshidabad, West Bengal, India.
              </p>
              <p className="mb-6 text-gray-700">
                Our approach combines traditional teaching methods with modern techniques, ensuring that students not only excel in their examinations but also develop a genuine appreciation for the English language.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="font-bold text-academy-primary text-xl">Experienced</h3>
                  <p className="text-gray-600">Led by expert teacher Mr. Mithun Das</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="font-bold text-academy-primary text-xl">Comprehensive</h3>
                  <p className="text-gray-600">Complete curriculum coverage for all levels</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="font-bold text-academy-primary text-xl">Result-Oriented</h3>
                  <p className="text-gray-600">Proven track record of student success</p>
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
            <h2 className="text-3xl font-bold mb-2">Our English Courses</h2>
            <p className="text-gray-600">Specialized programs tailored to different age groups</p>
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
            <h2 className="text-3xl font-bold mb-2">What Our Students Say</h2>
            <p className="text-gray-600">Success stories from our students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="mb-4 text-gray-700 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.class}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-academy-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your English Skills?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join Mythun Academy today and embark on a journey toward English language mastery.
          </p>
          <Link to="/courses">
            <Button className="bg-white text-academy-primary hover:bg-academy-light px-8 py-2">
              Enroll Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
