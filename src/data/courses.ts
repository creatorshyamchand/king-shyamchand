
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
    id: "english-5-8",
    title: "English for Class 5-8",
    description: "Build strong English fundamentals with our comprehensive course designed for middle school students.",
    fullDescription: "This comprehensive English course is designed for students in classes 5-8, focusing on building a strong foundation in English grammar, vocabulary, reading comprehension, and writing skills. Through interactive lessons and practical exercises, students will develop confidence in their English communication abilities. The course follows the CBSE and ICSE curriculum guidelines, ensuring comprehensive coverage of all relevant topics.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
    price: 2500,
    level: "Class 5-8",
    duration: "6 months",
    syllabus: [
      {
        title: "Grammar Fundamentals",
        description: "Parts of speech, tenses, sentence structure, and punctuation"
      },
      {
        title: "Vocabulary Enhancement",
        description: "Word building, synonyms, antonyms, and contextual usage"
      },
      {
        title: "Reading Comprehension",
        description: "Understanding different text types, interpretation, and analysis"
      },
      {
        title: "Writing Skills",
        description: "Essays, letters, stories, and creative writing"
      },
      {
        title: "Speaking & Listening",
        description: "Pronunciation, speech delivery, and active listening skills"
      }
    ],
    instructor: {
      name: "Mithun Das",
      bio: "Mr. Mithun Das is a seasoned English teacher with over 10 years of experience teaching students from various age groups. He specializes in making English learning enjoyable and accessible to students."
    }
  },
  {
    id: "english-9-12",
    title: "English for Class 9-12",
    description: "Advanced English course for high school students preparing for board exams and competitive tests.",
    fullDescription: "Our advanced English course for classes 9-12 prepares students for board examinations and builds essential skills for higher education. The curriculum covers advanced grammar concepts, literary analysis, critical thinking, and academic writing. Students will work with diverse text types and develop the analytical skills needed for excellence in English at the senior secondary level. The course is aligned with both CBSE and ICSE board requirements.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&h=500",
    price: 3500,
    level: "Class 9-12",
    duration: "8 months",
    syllabus: [
      {
        title: "Advanced Grammar",
        description: "Complex grammatical structures, error correction, and usage analysis"
      },
      {
        title: "Literature Analysis",
        description: "Character study, theme analysis, and literary devices"
      },
      {
        title: "Critical Reading",
        description: "Argumentative and persuasive texts, inference, and evaluation"
      },
      {
        title: "Academic Writing",
        description: "Essays, reports, articles, and formal writing"
      },
      {
        title: "Exam Preparation",
        description: "Board exam formats, time management, and answering techniques"
      },
      {
        title: "Communication Skills",
        description: "Debates, discussions, and presentation skills"
      }
    ],
    instructor: {
      name: "Mithun Das",
      bio: "Mr. Mithun Das is a seasoned English teacher with over 10 years of experience teaching students from various age groups. He specializes in making English learning enjoyable and accessible to students."
    }
  }
];

export const getCourse = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};
