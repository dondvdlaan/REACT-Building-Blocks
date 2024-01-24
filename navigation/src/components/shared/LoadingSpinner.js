import { ReactElement } from "react";

import "./LoadingSpinner.css"
import "./Spinner.css"

export default function LoadingSpinner(props) {
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
