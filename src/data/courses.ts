
export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  price: number;
  level: string;
  duration: string;
  syllabus: { title: string; description: string }[];
  instructor: {
    name: string;
    bio: string;
  };
}

export const courses: Course[] = [
  {
    id: "english-foundation",
    title: "English Foundation Course",
    description: "Master essential English skills with comprehensive foundation course designed for beginners.",
    fullDescription: "This foundation course is perfect for students who want to build a strong base in English. Through structured lessons and practical exercises, students will develop confidence in basic English communication, grammar, and writing skills. The course is designed to make learning English accessible and enjoyable.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
    price: 2000,
    level: "Beginner",
    duration: "3 months",
    syllabus: [
      {
        title: "Basic Grammar",
        description: "Fundamentals of English grammar and sentence structure"
      },
      {
        title: "Vocabulary Building",
        description: "Essential words and phrases for daily communication"
      },
      {
        title: "Reading Skills",
        description: "Basic comprehension and reading techniques"
      },
      {
        title: "Writing Practice",
        description: "Simple sentence construction and paragraph writing"
      }
    ],
    instructor: {
      name: "Shyamchand Das",
      bio: "Mr. Shyamchand Das is a dedicated English educator with over 12 years of experience in teaching students of all levels. His patient and methodical approach helps students build confidence in English communication."
    }
  },
  {
    id: "english-advanced",
    title: "Advanced English & Literature",
    description: "Elevate your English proficiency with our comprehensive advanced course focusing on literature and advanced communication.",
    fullDescription: "This advanced course is designed for students who want to excel in English literature and advanced communication. The course covers complex grammar concepts, literary analysis, and advanced writing techniques. Perfect for students preparing for competitive exams and higher education.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&h=500",
    price: 3000,
    level: "Advanced",
    duration: "4 months",
    syllabus: [
      {
        title: "Advanced Grammar",
        description: "Complex grammatical structures and advanced usage"
      },
      {
        title: "Literature Analysis",
        description: "Critical analysis of various literary works"
      },
      {
        title: "Academic Writing",
        description: "Essay writing, research papers, and creative writing"
      },
      {
        title: "Public Speaking",
        description: "Advanced communication and presentation skills"
      }
    ],
    instructor: {
      name: "Shyamchand Das",
      bio: "Mr. Shyamchand Das is a dedicated English educator with over 12 years of experience in teaching students of all levels. His patient and methodical approach helps students build confidence in English communication."
    }
  }
];

export const getCourse = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};
