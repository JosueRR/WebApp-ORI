import React from 'react';

function Popup({ trigger, setTrigger, children }) {
  if (!trigger) return null;

  return (
    <div className="popup fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-25">
      <div className="popup-inner bg-white rounded-lg p-8 w-auto shadow-lg relative">
        {children}
      </div>
    </div>
  );
}

export default Popup;