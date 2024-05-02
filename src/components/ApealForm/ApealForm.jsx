import React from "react";
import { useState } from 'react';
import "./ApealForm.css";
import { MdCloudUpload, MdDelete, MdPictureAsPdf } from 'react-icons/md';
import { IoSend } from "react-icons/io5";
import { AiFillFileImage } from 'react-icons/ai';

const ApealForm = ({ visible }) => {
  const [fileName, setFileName] = useState("No selected file");
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName("No selected file");
    }
  };
  const handleDeleteFile = () => {
    if (fileName !== "No selected file") {
      setFileName("No selected file");
    } else {
      alert("No file selected to delete.");
    }
  };
  return (
    <div className={`apeal-popup ${!visible ? "hide" : ""}`}>
      <form className="apeal-form">
      <div className="close-button-div">
      <button className="close-button"  onClick={() => handleExitButtonClick()}>
          X
        </button>
      </div>
      <input type="text" placeholder="Course Code" />
      <input type="text" placeholder="Section" />
      <input type="text" placeholder="Time" />
      <input type="text" placeholder="Date" />
      <textarea placeholder="Text for reasons" className="text-area-input"></textarea>
      
      <div className="file-div">
     <div className="row-file">
     <input type="file" accept=".pdf" className="input-field" onChange={handleFileChange} />
      
     {fileName !== "No selected file" && (
        <button className="delete-button-container" onClick={handleDeleteFile}>
          <MdDelete className="delete-button" />
          <span>Delete</span>
        </button>
      )}
     </div>
        
      </div>
      <span>
      <p style={{ color: 'red' }}>Choose a PDF file only</p>
      </span>

      <div className='sent-button-div'>
        
        
        <button className="send-button" onClick={() => {
        
        }}>
          <IoSend className="" />
          <span>Send</span>
        </button>
      </div>
      
     </form>
      
    </div>
  );
};

export default ApealForm;
