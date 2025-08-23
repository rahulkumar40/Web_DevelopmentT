import React from "react";

function Card({ title, date, image }) {
  return (
    <div className="w-[200px] border p-2 rounded shadow-lg">
      <div className="h-[150px] flex justify-center items-center bg-gray-100 overflow-hidden">
        {image && image.type.startsWith("image/") ? (
          // Display image
          <img
            src={URL.createObjectURL(image)} // Generate preview URL for the image
            alt={title || "Image"}
            className="h-full w-full object-cover"
          />
        ) : image && image.type.startsWith("video/") ? (
          // Display video
          <video controls className="h-full w-full object-cover">
            <source src={URL.createObjectURL(image)} type={image.type} />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Unsupported file type
          <p className="text-sm text-gray-600">File type not supported</p>
        )}
      </div>
      {/* Title and Date */}
      <div>
        <p className="font-bold">{title || "Untitled"}</p>
        <p className="text-sm text-gray-500">{date || "No date Provided"}</p>
      </div>
    </div>
  );
}

export default Card;
