import { UserProfile } from "@clerk/clerk-react";
import React from "react";
import { PageHeader } from "../components";

const UserProfilePage = () => {
  return (
    <>
      <div className="flex justify-center py-2">
        <UserProfile />
      </div>
    </>
  );
};

export default UserProfilePage;
