
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Course, getCourse } from "@/data/courses";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (courseId) {
      const foundCourse = getCourse(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        navigate("/courses");
      }
      setLoading(false);
    }
  }, [courseId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl">Loading course details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-red-500">Course not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Course Header */}
        <section className="bg-academy-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl mb-6">{course.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Duration: {course.duration}</span>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Level: {course.level}</span>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Instructor: {course.instructor.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">₹{course.price}</span>
                  <Link to={`/payment/${course.id}`}>
                    <Button className="bg-white text-academy-primary hover:bg-academy-light">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6 p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
                <p className="mb-6 text-gray-700">{course.fullDescription}</p>
                
                <h4 className="text-xl font-semibold mb-3">What You'll Learn:</h4>
                <ul className="space-y-2 mb-6">
                  {course.syllabus.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-academy-primary">✓</span>
                      <span className="text-gray-700">{item.title}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-xl font-semibold mb-3">Who This Course is For:</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-academy-primary">✓</span>
                    <span className="text-gray-700">Students in {course.level}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-academy-primary">✓</span>
                    <span className="text-gray-700">Students preparing for school exams</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-academy-primary">✓</span>
                    <span className="text-gray-700">Anyone looking to improve their English skills</span>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="syllabus" className="mt-6 p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-6">Course Syllabus</h3>
                <Accordion type="single" collapsible className="w-full">
                  {course.syllabus.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700 py-2">{item.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="instructor" className="mt-6 p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4">Meet Your Instructor</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-academy-primary flex items-center justify-center text-white text-3xl font-bold">
                      {course.instructor.name.charAt(0)}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h4 className="text-xl font-semibold mb-2">{course.instructor.name}</h4>
                    <p className="text-gray-700 mb-4">{course.instructor.bio}</p>
                    <Separator className="my-4" />
                    <h5 className="font-medium mb-2">Credentials:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Experienced English teacher</li>
                      <li>• Specializes in teaching students from Class 5 to 12</li>
                      <li>• Excellent track record of student success in board exams</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-academy-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Enroll now and take the first step towards mastering English. Limited seats available for each batch.
            </p>
            <Link to={`/payment/${course.id}`}>
              <Button className="bg-academy-primary hover:bg-academy-secondary text-white px-8 py-2">
                Enroll for ₹{course.price}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
