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
import { FC } from "react";

export const NavCourse: FC<NavCourseProps> = ({
  title,
  content,
  url
}) => {
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