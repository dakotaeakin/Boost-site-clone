import React from "react";

//TO DO:
//Add prop for image url

const ProfileCard = (props) => {
  return (
    <>
      <div>
        <div>
          <div className="max-w-[400px] w-auto mx-4 h-fit bg-white rounded-lg">
            <div className="flex flex-col justify-start items-center space-y-8 p-8  w-full h-full">
              <img
                className="h-32 w-32 rounded-full"
                src={props.pic}
                // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <h1 className="text-2xl font-bold">{props.name}</h1>
              <p className="font-bold">{props.bio}</p>
              <div>{props.user}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
