// import React from "react";
// import { useState } from "react";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// function ImageScrolleArr({ imageData }) {
//   const [curr, setCurr] = useState(0);
//   console.log(curr);
//   if (curr === imageData.length - 2) {
//     console.log(curr + "inside the if ");
//     setCurr(0);
//   }
//   return (
//     <>
//       <div
//         className="ml-[1rem]"
//         onClick={() => {
//           if (curr != 0) setCurr(curr - 3);
//           else setCurr(imageData.length-1);
//         }}
//       >
//         <FaArrowAltCircleRight />
//       </div>
//       <div className="flex justify-center items-center gap-[0.5rem]">
//         <img className="imgS" src={imageData[curr].path} alt="" />
//         <img className="imgS" src={imageData[curr + 1].path} alt="" />
//         <img className="imgS" src={imageData[curr + 2].path} alt="" />
//         <div
//           className="ml-[1rem]"
//           onClick={() => {
//             if (curr != imageData.length - 3) setCurr(curr + 1);
//             else setCurr(0);
//           }}
//         >
//           <FaArrowAltCircleRight />
//         </div>
//       </div>
//     </>
//   );
// }

// export default ImageScrolleArr;
