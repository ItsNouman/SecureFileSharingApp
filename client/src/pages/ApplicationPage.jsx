import React, { useState } from "react";
import { ApplicationTabs, PageHeader, UploadForm } from "../components";

const ApplicationPage = () => {
  const [progress, setProgress] = useState(50);

  return (
    <>
      <UploadForm progress={progress} />
    </>
  );
};

export default ApplicationPage;
