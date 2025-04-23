
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  level: string;
}

const CourseCard = ({ id, title, description, image, price, level }: CourseProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <span className="bg-academy-accent text-academy-dark rounded-full px-3 py-1 text-xs font-medium">
            {level}
          </span>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">₹{price}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/courses/${id}`} className="w-full">
          <Button className="w-full bg-academy-primary hover:bg-academy-secondary">
            View Course
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
