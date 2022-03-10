import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
//Firebase
import db from "../Firebase.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { onValue } from "firebase/database";
export default function Demo_response() {
    var [index, setIndex] = useState(0);
    var detailList = [];
    var detailListId = [];
    var cvsFileData = [];
    var mergedCsvData = [];
  
    var [tester, setTester] = useState(true);
  
    var [detail, setDetail] = useState({});
    var [detailId, setDetailId] = useState(0);
    var [CsvDetail, setCsvDetail] = useState({});
    var [detailListLength, setDetailListLength] = useState(0);
  
async function getInfo() {
    
    const demo_data = collection(db, "demo-page");
    var demo_doc = await getDocs(demo_data);
    detailList = demo_doc.docs.map((doc) => doc.data());
    detailListId = demo_doc.docs.map((doc) => doc.id);

    demo_doc.forEach((doc) => {
      cvsFileData = [
        [doc.data().FirstName],
        [doc.data().LastName],
        [doc.data().company],
        [doc.data().semester],
        [doc.data().phone],
        [doc.data().email],
        [doc.data().s1],
      ];

      mergedCsvData.push(cvsFileData);
    });

    setDetail(detailList[index]);
    setDetailId(detailListId[index]);
    setDetailListLength(detailList.length);
    setCsvDetail(mergedCsvData);

    return detailList;
  }

  if (tester == true) {
    // console.log("RAN");
    window.addEventListener("load", getInfo());
    setTester(false);
  }
function downloadCsv() {
    if (CsvDetail.length == 0) {
      alert("There are no responses yet!");
      return;
    }

    //define the heading for each row of the data
    var csv =
      "FirstName,LastName,company,Semester,PhoneNo,EmailId,Which Information are you seeking?*";
    csv += "\n";

    //merge the data with CSV
    CsvDetail.forEach(function (row) {
      //to replace , with ;
      row.forEach(function (row1) {
        row1[0] = row1[0].replace(/,/g, ";");
        row1[0] = row1[0].replace(/\n/g, ";");
      });
      csv += row.join(",");
      csv += "\n";
    });

    var hiddenElement = document.createElement("a");
    hiddenElement.href =
      "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csv);
    hiddenElement.target = "_blank";

    //provide the name for the CSV file to be downloaded
    hiddenElement.download = "demo_response.csv";
    hiddenElement.click();
  }
 return <div className="response">
<>


<a className="downloadCsv">
              <i
                onClick={downloadCsv}
                className="fa fa-download"
                aria-hidden="true"
              ></i>
            </a>
</>

  </div>;
}
