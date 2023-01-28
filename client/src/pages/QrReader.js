import { QrCodeScanner } from "react-simple-qr-code-scanner";
import React, { useState } from 'react';
import "../assets/styles/styles.css"
function QrReader() {

    const [QrResult, setQrResult] = useState("");

  return (
    <div className="qrpage">
    <div className="qrscanner">
    <h1>Luigi's Scannerino</h1>
    <br/>
    <QrCodeScanner
      onResult={(result) => {
        setQrResult(result.text)
        console.log(result);
        
      }}
      Errors={(error) => {
        //console.log(error);
      }}
      facingMode={"enviroment"} //or user
    />
    <br/>
    <p>{QrResult}</p>
    <button className="qrbutton">Add Manually</button>
    </div>
    </div>
  );
}

export default QrReader;