import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  let category = props.category;
  function getCourses() {
    if (category === "All") {
      let allCourse = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourse.push(courseData);
        });
      });
      return allCourse;
    } else {
      return courses[category];
    }
  }

  // courses like or unlike

  const [likedCourses, setLikedCoursed] = useState([]);

  return (
    <>
      
      {
            courses!==" " ? (<div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                  {getCourses().map((course) => {
                    return (
                      <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCoursed={setLikedCoursed}
                      ></Card>
                    )
                  })}
                </div>) : (<div className="flex justify-center items-center text-2xl font-bold "> Course data is empty..</div>)
      }
      ;
    </>
  );
}

export default Cards;
