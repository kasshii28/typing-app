import { NavCourseProps } from "@/app/types/components/navCourse";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const NavCourse = ({
  title,
  content,
  url
}: NavCourseProps) => {
  return (
    <Link href={url}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter className="flex">
          <ArrowRight/>
          <p>コースをプレイする</p>
        </CardFooter>
      </Card>
    </Link>
  )
}