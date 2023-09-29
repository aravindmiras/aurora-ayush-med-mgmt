import {Html5QrcodeScanner} from "html5-qrcode";
import React, { useState, useEffect } from 'react';
function QrScanner(){

    const [scanResult, setScanResult]=useState(null);

    useEffect(()=>{
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox:{
                width: 250,
                height:250,
            },
            fps: 10,
        });
    
        scanner.render(success, error);
    
        function success(result){
            scanner.clear();
            setScanResult(result);
            setTimeout(() => {
                // Navigate to the success page after 4 seconds
                location.href = `/post/PatientVending/${result}`; // Use the relative URL of the success page
              }, 2000);
        }
    
        function error(err){
            console.warn(err);
        }
    },[]);



    return(
    <div className="App">
        <h1>Qr Code Scanning</h1>
        
        { scanResult
        ?   <div>Success: <a >{scanResult}</a></div>
        : <div id="reader"></div>
        }
    </div>
    );
}
export default QrScanner;

