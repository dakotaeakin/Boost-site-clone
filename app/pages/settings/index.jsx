import React from "react";

const contact = (test) => {
  console.log(test);
  return <div>contact</div>;
};

export default contact;

contact.requireAuth = true; //Require user to be logged in to view this page.
