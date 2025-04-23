
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-academy-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Mythun Academy</h1>
            <p className="text-xl">
              Learn about our mission, values, and the team behind Mythun Academy
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-academy-dark">Our Story</h2>
                <p className="mb-4 text-gray-700">
                  Mythun Academy was founded by Mr. Mithun Das with a vision to transform English education in Murshidabad. 
                  After years of teaching in various schools and noticing gaps in the conventional education system, 
                  Mr. Das established this academy to provide quality English education that focuses not just on exams 
                  but on building a genuine appreciation for the language.
                </p>
                <p className="mb-4 text-gray-700">
                  Starting with just a handful of students in 2015, the academy has now grown to become one of the most 
                  trusted names in English education in Aurangabad, Suti 2, Murshidabad. Our alumni have gone on to excel 
                  in their academic pursuits and professional careers, carrying forward the strong foundation we helped them build.
                </p>
                <p className="text-gray-700">
                  Today, Mythun Academy continues its mission of nurturing young minds and helping them master the English 
                  language through comprehensive courses, personalized attention, and innovative teaching methods.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=600" 
                  alt="Our Academy" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-academy-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-academy-primary">Our Mission</h3>
                <p className="text-gray-700">
                  To make quality English education accessible to all students, helping them develop strong language 
                  skills that prepare them not only for academic success but for effective communication in the real world.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold mb-3 text-academy-primary">Excellence</h4>
                  <p className="text-gray-700">
                    We strive for excellence in all aspects of our teaching and student development.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold mb-3 text-academy-primary">Personalization</h4>
                  <p className="text-gray-700">
                    We recognize that each student learns differently and tailor our approach accordingly.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold mb-3 text-academy-primary">Innovation</h4>
                  <p className="text-gray-700">
                    We continuously evolve our teaching methods to incorporate the best practices in education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Teacher */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Teacher</h2>
            <div className="flex flex-col md:flex-row gap-10 items-center max-w-4xl mx-auto">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-academy-primary flex items-center justify-center text-white text-5xl font-bold">
                  M
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Mr. Mithun Das</h3>
                <p className="text-academy-primary font-medium mb-4">Founder & Lead Instructor</p>
                <p className="text-gray-700 mb-4">
                  Mr. Mithun Das has over 10 years of experience teaching English to students of all age groups. 
                  He holds a Master's degree in English Literature and has received multiple accolades for his 
                  innovative teaching methodologies.
                </p>
                <p className="text-gray-700 mb-4">
                  His approach combines traditional grammar rules with contemporary usage, ensuring that students 
                  not only score well in exams but also develop practical language skills that serve them throughout life.
                </p>
                <p className="text-gray-700">
                  Mr. Das is passionate about making English learning accessible and enjoyable for all students, 
                  regardless of their previous exposure to the language.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Location */}
        <section className="py-16 bg-academy-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Visit Us</h2>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-3">Our Location</h3>
                  <p className="mb-4 text-gray-700">
                    Mythun Academy is conveniently located in the heart of Aurangabad, easily accessible by public transport.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Address:</h4>
                    <p className="text-gray-700">
                      Aurangabad, Suti 2<br />
                      Murshidabad, West Bengal<br />
                      India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operating Hours:</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gray-200 rounded-lg min-h-[250px] flex items-center justify-center">
                  <p className="text-gray-600 text-center p-4">
                    [Map Location]<br />
                    Visit us to learn more about our courses and teaching methodology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
