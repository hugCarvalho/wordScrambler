import React from "react";
import "./Backdrop.scss";

function Backdrop({ children, setShowModal, modalStatus }) {
  const [closeModal, setCloseModal] = React.useState(modalStatus);

  return (
    <>
      {!closeModal && (
        <div className="Backdrop" onClick={() => setCloseModal(true)}>
          <div style={overlay} className="message-box">
            <button className="close-popup">X</button>
            <p>{children}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Backdrop;

const overlay = {
  backgroundColor: "rgb(39, 39, 38, .70)",
  background: "rgb(48, 47, 47)",
  top: "30%",
  left: "12%",
  right: "12%",
  bottom: "auto%",
  borderColor: "#ff0000",
  color: "#cccfcf",
};

// const overlayBiggerScreens = {
//   overlay: {
//     backgroundColor: "rgb(39, 39, 38, .70)",
//   },
//   content: {
//     background: "rgb(48, 47, 47)",
//     top: "25%",
//     left: "31%",
//     right: "31%",
//     bottom: "auto%",
//     borderColor: "#ff0000",
//     color: "#cccfcf",
//     fontSize: "2.1rem",
//     lineHeight: "3.4rem",
//   },
// };
