import React from "react";
import Card from "./Card";
function Profile({reviews}) {
  return (
    <div>
      
      <Card data={reviews}/>
    </div>
  );
}

export default Profile;
