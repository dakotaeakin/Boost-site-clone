import React from "react";

{
  /* <svg viewBox="0 0 200 153">
                            <path fill="none" class="bg" d="M181.712 146.5C189.532 132.787 194 116.916 194 100C194 48.0852 151.915 6 100 6C48.0852 6 6 48.0852 6 100C6 116.916 10.468 132.787 18.2883 146.5"></path>
                            <path fill="none" id="usage" class="usage" d="M181.712 146.5C189.532 132.787 194 116.916 194 100C194 48.0852 151.915 6 100 6C48.0852 6 6 48.0852 6 100C6 116.916 10.468 132.787 18.2883 146.5" style="stroke-dashoffset: 785.268px;"></path>
                        </svg> */
}

const contact = (test) => {
  console.log(test);
  return <div>contact</div>;
};

export default contact;

contact.requireAuth = true; //Require user to be logged in to view this page.
