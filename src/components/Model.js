/** @format */

import React, { useState } from "react";
import axios from "axios";
import "./Model.css"; // Import custom CSS file

const Model = () => {
  const [formData, setFormData] = useState({
    protocol_type: "",
    service: "",
    flag: "",
    src_bytes: 0,
    dst_bytes: 0,
    count: 0,
    srv_count: 0,
    serror_rate: 0.0,
    rerror_rate: 0.0,
  });

  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent negative values for numeric inputs
    if (
      name === "src_bytes" ||
      name === "dst_bytes" ||
      name === "count" ||
      name === "srv_count" ||
      name === "serror_rate" ||
      name === "rerror_rate"
    ) {
      // Ensure the value is a positive number or an empty string
      if (value !== "" && parseFloat(value) < 0) {
        return; // Prevent input if the value is negative
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Check if all required fields have been filled
    if (
      !formData.protocol_type ||
      !formData.service ||
      !formData.flag ||
      formData.src_bytes === "" ||
      formData.dst_bytes === "" ||
      formData.count === "" ||
      formData.srv_count === "" ||
      formData.serror_rate === "" ||
      formData.rerror_rate === ""
    ) {
      setError("Please fill out all the fields.");
      return false;
    }
    setError(""); // Clear the error if everything is valid
    return true;
  };

  const predictKNN = async () => {
    if (!validateForm()) return; // Don't proceed if validation fails

    setPrediction("");
    // Create an array with default values and override with form inputs
    const inputArray = [
      0, // duration
      formData.protocol_type,
      formData.service,
      formData.flag,
      formData.src_bytes,
      formData.dst_bytes,
      0, // land
      0, // wrong_fragment
      0, // urgent
      0, // hot
      0, // num_failed_logins
      0, // logged_in
      0, // num_compromised
      0, // root_shell
      0, // su_attempted
      0, // num_root
      0, // num_file_creations
      0, // num_shells
      0, // num_access_files
      0, // num_outbound_cmds
      0, // is_host_login
      0, // is_guest_login
      formData.count,
      formData.srv_count,
      formData.serror_rate,
      0.0, // srv_serror_rate
      formData.rerror_rate,
      0.0, // srv_rerror_rate
      0.0, // same_srv_rate
      0.0, // diff_srv_rate
      0.0, // srv_diff_host_rate
      0, // dst_host_count
      0, // dst_host_srv_count
      0.0, // dst_host_same_srv_rate
      0.0, // dst_host_diff_srv_rate
      0.0, // dst_host_same_src_port_rate
      0.0, // dst_host_srv_diff_host_rate
      0.0, // dst_host_serror_rate
      0.0, // dst_host_srv_serror_rate
      0.0, // dst_host_rerror_rate
      0.0, // dst_host_srv_rerror_rate
    ];

    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/predictKNN",
        {
          params: { Input: inputArray.join(",") },
        }
      );
      setPrediction(response.data.result);
    } catch (error) {
      console.error("Error in prediction: ", error);
    }
  };

  return (
    <div className="model-container">
      <h2 className="title"> Input</h2>
      <form className="form-container">
        <div className="input-group">
          <label htmlFor="protocol_type" className="input-label">
            Protocol Type:
          </label>
          <select
            id="protocol_type"
            name="protocol_type"
            value={formData.protocol_type}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="tcp">TCP</option>
            <option value="udp">UDP</option>
            <option value="icmp">ICMP</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="service" className="input-label">
            Service:
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="http">HTTP</option>
            <option value="smtp">SMTP</option>
            <option value="ftp_data">FTP Data</option>
            <option value="eco_i">ECO_i</option>
            <option value="private">Private</option>
            <option value="other">Other</option>
            <option value="domain_u">Domain_u</option>
            <option value="ftp">FTP</option>
            <option value="telnet">Telnet</option>
            <option value="finger">Finger</option>
            <option value="pop_3">POP_3</option>
            <option value="ntp_u">NTP_u</option>
            <option value="uucp_path">UUCP_PATH</option>
            <option value="auth">AUTH</option>
            <option value="Z39_50">Z39_50</option>
            <option value="courier">Courier</option>
            <option value="imap4">IMAP4</option>
            <option value="sql_net">SQL_NET</option>
            <option value="IRC">IRC</option>
            <option value="remote_job">REMOTE_JOB</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="flag" className="input-label">
            Flag:
          </label>
          <select
            id="flag"
            name="flag"
            value={formData.flag}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="SF">SF</option>
            <option value="S0">S0</option>
            <option value="REJ">REJ</option>
            <option value="RSTR">RSTR</option>
            <option value="SH">SH</option>
            <option value="S3">S3</option>
            <option value="S2">S2</option>
            <option value="S1">S1</option>
            <option value="OTH">OTH</option>
            <option value="RSTO">RSTO</option>
            <option value="RSTOS0">RSTOS0</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="src_bytes" className="input-label">
            Source Bytes:
          </label>
          <input
            id="src_bytes"
            type="number"
            name="src_bytes"
            value={formData.src_bytes}
            onChange={handleChange}
            min="0" // Prevent negative values
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="dst_bytes" className="input-label">
            Destination Bytes:
          </label>
          <input
            id="dst_bytes"
            type="number"
            name="dst_bytes"
            value={formData.dst_bytes}
            onChange={handleChange}
            min="0" // Prevent negative values
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="count" className="input-label">
            Count:
          </label>
          <input
            id="count"
            type="number"
            name="count"
            value={formData.count}
            onChange={handleChange}
            min="0" // Prevent negative values
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="srv_count" className="input-label">
            Service Count:
          </label>
          <input
            id="srv_count"
            type="number"
            name="srv_count"
            value={formData.srv_count}
            onChange={handleChange}
            min="0" // Prevent negative values
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="serror_rate" className="input-label">
            Serror Rate:
          </label>
          <input
            id="serror_rate"
            type="number"
            step="0.01"
            name="serror_rate"
            value={formData.serror_rate}
            onChange={handleChange}
            min="0" // Prevent negative values
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="rerror_rate" className="input-label">
            Rerror Rate:
          </label>
          <input
            id="rerror_rate"
            type="number"
            step="0.01"
            name="rerror_rate"
            value={formData.rerror_rate}
            onChange={handleChange}
            min="0" // Prevent negative values
            className="input-field"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="button" onClick={predictKNN} className="submit-btn">
          Predict
        </button>
      </form>

      {prediction && (
        <div className="prediction-result">
          <h3>Prediction Result:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default Model;
