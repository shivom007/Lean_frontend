/* eslint-disable react/prop-types */
import { useState } from "react";
import Icons from "../constants";
import Close from "./Close";
import Open from "./Open";
import IssueForm from "./IssueForm";
import FeedbackForm from "./FeedbackForm";
import SuggestionForm from "./SuggestionForm";
import ContactForm from "./ContactForm";
const FloatingBoxAction = ({setMessage, setIsSubmitted}) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(true);
  const [formShow, setFormShow] = useState(false);
  const [selectedForm, setSelectedForm] = useState(0);
  const handleClose = () => {
    setShow(false);
    setModal(false);
    setFormShow(false);
    setSelectedForm(0);
  };
  const handleOpen = () => {
    setShow(true);
    setModal(true);
    setIsSubmitted(false);
  };
  const handleFormShow = (id) => {
    setFormShow(true);
    setModal(false);
    setSelectedForm(id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "auto",
        background: "transparent",
        gap: "32px",
      }}
    >
      {formShow && selectedForm === 1 && <IssueForm handleClose={handleClose}  setIsSubmitted={setIsSubmitted}   setMessage={setMessage} />}
      {formShow && selectedForm === 2 && <FeedbackForm handleClose={handleClose}  setIsSubmitted={setIsSubmitted}   setMessage={setMessage} />}
      {formShow && selectedForm === 3 && <SuggestionForm handleClose={handleClose}  setIsSubmitted={setIsSubmitted}  setMessage={setMessage} />}
      {formShow && selectedForm === 4 && <ContactForm handleClose={handleClose}  setIsSubmitted={setIsSubmitted}   setMessage={setMessage} />}

      <div style={{ display: "flex", flexDirection: modal ? "column" : "row", gap: modal ? "32px" : "24px", flexWrap: 'wrap-reverse' }}>
        <div
          style={{
            gap: modal ? "16px" : "24px",
            display: "flex",
            flexDirection: modal ? "column" : "row-reverse",
            marginRight: formShow ? "20px" : "0px",
          }}
        >
          {show &&
            Icons.map((icon) => {
              return (
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    width: modal ? "256px" : "auto",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                  key={icon.id}
                >
                  <div
                    onClick={() => handleFormShow(icon.id)}
                    style={{
                      display: modal ? "flex" : "none",
                      width: "auto",
                      backgroundColor: "#F8F8F8",
                      height: "32px",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: "4px",
                      border: "1px solid #CCCCCC",
                      color: "black",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontSize: "18px",
                      padding: "20px 16px 20px 16px",
                      cursor: "pointer",
                      boxShadow: "1px 1px 8x #00000080",
                    }}
                  >
                    {icon.name}
                  </div>

                  <icon.Component selectedForm={selectedForm} handleFormShow={() => handleFormShow(icon.id)} />
                </div>
              );
            })}
        </div>
        {show ? <Close onClick={handleClose} /> : <Open onClick={handleOpen} />}
      </div>
    </div>
  );
};

export default FloatingBoxAction;
