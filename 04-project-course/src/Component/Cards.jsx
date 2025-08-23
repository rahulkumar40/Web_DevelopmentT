// import React from "react";
import React from 'react'
import Card from './Card';

function Cards({ courses }) {
  const allCourse = [];
//   const getCourses = () => {
//       console.log("hii")
//     Object.values(courses).forEach((courseCategor) => {
//       courseCategor.forEach((course) => {
//         allCourse.push(course);
//       });
//     });
//     return allCourse;
//   };

  
  console.log(allCourse)
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nihil quia pariatur obcaecati voluptatibus adipisci possimus illo laborum aliquam ad dignissimos nostrum! Voluptates enim illum porro praesentium perferendis ex aut.
      {/* {
            getCourses().map((course)=>{
                  return (
                        <Card {...course} />
                  )
            })
      } */}
    </div>
  );
}

export default Cards;
