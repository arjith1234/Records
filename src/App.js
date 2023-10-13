import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const tableStyle = {
  backgroundColor: "black",
  color: "white",
  borderCollapse: "collapse",
};

const thStyle = {
  border: "1px solid white",
  padding: "8px",
};

const tdStyle = {
  border: "1px solid white",
  padding: "8px",
};

function App() {
  const url = "https://dummyjson.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios
      .get(url)
      .then((res) => {
        if (Array.isArray(res.data.users)) {
          setData(res.data);
        } else {
          console.error("Data is not an array:", res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <h1 style={{ color: "white" }}>Dummy Data</h1>
      <table style={tableStyle}>
  <thead>
    <tr>
      <th style={thStyle}>ID</th>
      <th style={thStyle}>First Name</th>
      <th style={thStyle}>Last Name</th>
      <th style={thStyle}>Maiden Name</th>
      <th style={thStyle}>Age</th>
      <th style={thStyle}>Gender</th>
      <th style={thStyle}>Email</th>
      <th style={thStyle}>Phone</th>
      <th style={thStyle}>Username</th>
      <th style={thStyle}>Password</th>
      <th style={thStyle}>Birth Date</th>
      <th style={thStyle}>Image</th>
      <th style={thStyle}>Blood Group</th>
      <th style={thStyle}>Height</th>
      <th style={thStyle}>Weight</th>
      <th style={thStyle}>Eye Color</th>
      <th style={thStyle}>Hair Color</th>
      <th style={thStyle}>Hair Type</th>
      <th style={thStyle}>Domain</th>
      <th style={thStyle}>IP</th>
      <th style={thStyle}>Address</th>
      <th style={thStyle}>City</th>
      <th style={thStyle}>Coordinates</th>
      <th style={thStyle}>Postal Code</th>
      <th style={thStyle}>State</th>
      <th style={thStyle}>Mac Address</th>
      <th style={thStyle}>University</th>
      <th style={thStyle}>Card Expire</th>
      <th style={thStyle}>Card Number</th>
      <th style={thStyle}>Card Type</th>
      <th style={thStyle}>Currency</th>
      <th style={thStyle}>IBAN</th>
      <th style={thStyle}>Company Address</th>
      <th style={thStyle}>Company City</th>
      <th style={thStyle}>Company Coordinates</th>
      <th style={thStyle}>Company Postal Code</th>
      <th style={thStyle}>Company State</th>
      <th style={thStyle}>Company Department</th>
      <th style={thStyle}>Company Name</th>
      <th style={thStyle}>Company Title</th>
      <th style={thStyle}>EIN</th>
      <th style={thStyle}>SSN</th>
      <th style={thStyle}>User Agent</th>
    </tr>
  </thead>
  <tbody>
  {data.users && data.users.map((dataObj) => (
            <tr key={dataObj.id}>
        <td style={tdStyle}>{dataObj.id}</td>
        <td style={tdStyle}>{dataObj.firstName}</td>
        <td style={tdStyle}>{dataObj.lastName}</td>
        <td style={tdStyle}>{dataObj.maidenName}</td>
        <td style={tdStyle}>{dataObj.age}</td>
        <td style={tdStyle}>{dataObj.gender}</td>
        <td style={tdStyle}>{dataObj.email}</td>
        <td style={tdStyle}>{dataObj.phone}</td>
        <td style={tdStyle}>{dataObj.username}</td>
        <td style={tdStyle}>{dataObj.password}</td>
        <td style={tdStyle}>{dataObj.birthDate}</td>
        <td style={tdStyle}>{dataObj.image}</td>
        <td style={tdStyle}>{dataObj.bloodGroup}</td>
        <td style={tdStyle}>{dataObj.height}</td>
        <td style={tdStyle}>{dataObj.weight}</td>
        <td style={tdStyle}>{dataObj.eyeColor}</td>
        <td style={tdStyle}>{dataObj.hair.color}</td>
        <td style={tdStyle}>{dataObj.hair.type}</td>
        <td style={tdStyle}>{dataObj.domain}</td>
        <td style={tdStyle}>{dataObj.ip}</td>
        <td style={tdStyle}>{dataObj.address.address}</td>
        <td style={tdStyle}>{dataObj.address.city}</td>
        <td style={tdStyle}>{`Lat: ${dataObj.address.coordinates.lat}, Lng: ${dataObj.address.coordinates.lng}`}</td>
        <td style={tdStyle}>{dataObj.address.postalCode}</td>
        <td style={tdStyle}>{dataObj.address.state}</td>
        <td style={tdStyle}>{dataObj.macAddress}</td>
        <td style={tdStyle}>{dataObj.university}</td>
        <td style={tdStyle}>{dataObj.bank.cardExpire}</td>
        <td style={tdStyle}>{dataObj.bank.cardNumber}</td>
        <td style={tdStyle}>{dataObj.bank.cardType}</td>
        <td style={tdStyle}>{dataObj.bank.currency}</td>
        <td style={tdStyle}>{dataObj.bank.iban}</td>
        <td style={tdStyle}>{dataObj.company.address.address}</td>
        <td style={tdStyle}>{dataObj.company.address.city}</td>
        <td style={tdStyle}>{`Lat: ${dataObj.company.address.coordinates.lat}, Lng: ${dataObj.company.address.coordinates.lng}`}</td>
        <td style={tdStyle}>{dataObj.company.address.postalCode}</td>
        <td style={tdStyle}>{dataObj.company.address.state}</td>
        <td style={tdStyle}>{dataObj.company.department}</td>
        <td style={tdStyle}>{dataObj.company.name}</td>
        <td style={tdStyle}>{dataObj.company.title}</td>
        <td style={tdStyle}>{dataObj.ein}</td>
        <td style={tdStyle}>{dataObj.ssn}</td>
        <td style={tdStyle}>{dataObj.userAgent}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
}

export default App;
