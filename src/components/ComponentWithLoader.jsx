import React from "react";
import { SpinnerLoader } from "./SpinnerLoader";

export function ComponentWithLoader({ loading, children }) {
  if (loading)
    return (
      <div className="h-full  flex flex-col justify-center items-center gap-2 uppercase">
        <SpinnerLoader />
        <i className="text-gray-500">loading...</i>
      </div>
    );
  return <>{children}</>;
}
