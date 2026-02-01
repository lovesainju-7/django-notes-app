// import React from 'react'
// import { Link } from 'react-router-dom'
// import { ReactComponent as Addicon } from '../assets/add.svg'

// const AddButton = () => {
//   return (
//     <div className='floating-button'>
//         <Link to='note/new/'>
//             <Addicon/>
//         </Link>
//     </div>
//   )
// }

// export default AddButton

import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Addicon } from "../assets/add.svg";

const AddButton = () => {
  return (
    <>
      {/* TOP RIGHT BUTTON */}
      <div className="top-right-button">
        <Link to="/list-note">
          <button className="list-note-btn">LIST NOTE</button>
        </Link>
      </div>

      {/* EXISTING FLOATING + BUTTON */}
      <div className="floating-button">
        <Link to="/note/new/">
          <Addicon />
        </Link>
      </div>
    </>
  );
};

export default AddButton;
