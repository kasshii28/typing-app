import { Fragment } from "react";
import { NavCourse } from "@/app/components/NavCourse/NavCourse";
import { CourseDescriptions } from "@/app/constants/courseDescriptions/courseDescriptions";

export default function Home() {
	return (
		<Fragment>
			<div className="grid grid-cols-3 gap-4 p-4">
				{CourseDescriptions.map((course) => {
					return Object.entries(course).map(([key, value]) => (
						<NavCourse
							key={key}
							title={value.title}
							content={value.content}
							url={value.url}
						/>
					));
				})}
			</div>
		</Fragment>
	);
}
