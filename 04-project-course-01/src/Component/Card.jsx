import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  const [likeD, setLikeDesc] = useState(true);

  let likedCourses = props.likedCourses;
  let setLikedCoursed = props.setLikedCoursed;

  let course = props.course;
  let description = course.description.length>100 ? (course.description.substring(1, 150) + "...") : (course.description + "...");

  let clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      // pehle se like huaa pada tha
      setLikedCoursed((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      // pahle se like nhi hai ye course
      // insert karna h ye course liked courses me
      if (likedCourses.length === 0) {
        setLikedCoursed(course.id);
      } else {
        setLikedCoursed((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  };
  return (
    <div className="w-[300px] bg-blue-950 bg-opacity-65 rounded-ms overflow-hidden text-white">
      <div className="relative">
        <img src={course.image.url} alt="img-of-course" />
        <div className=" flex justify-center items-center  absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-18px] ">
          <button className="text-3xl" onClick={clickHandler}>
            {!likedCourses.includes(course.id) ? (
              <FcLikePlaceholder />
            ) : (
              <FcLike />
            )}
          </button>
        </div>
      </div>
      <div className="p-4 ">
        <p className="font-bold text-white leading-4">{course.title}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
