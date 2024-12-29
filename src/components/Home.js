/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BsTriangle } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";

export const Home = (props) => {
  const { showAlert } = props;
  let navigate = useNavigate();
  const [filename, setfilename] = useState({ FileName: "" });
  const [loading, setloading] = useState(false);

  const predictKNN = () => {
    document.getElementById("truth").textContent = "";
    document.getElementById("Prediction").textContent = "";
    setloading(true);
    const url = `http://localhost:5000/api/auth/predictKNN?Input=${JSON.stringify(
      filename
    )}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        document.getElementById("truth").textContent = response.data.result;
        formatResult();
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const func = () => {
      if (localStorage.getItem("token") === null) navigate("/login");
    };
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateFileName = (e) => {
    setfilename({ ...filename, [e.target.name]: e.target.value.slice(12) });
  };

  useEffect(() => {
    console.log(filename);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateFileName]);
  const formatResult = () => {
    let result = document.getElementById("truth").textContent.split("\r\n");
    console.log(result);
    document.getElementById("truth").textContent = result[0];
    document.getElementById("Prediction").textContent = result[1];
  };
  let url1 =
    "https://www.kaggle.com/datasets/anushonkar/network-anamoly-detection?select=Train.txt";
  let url3 = "https://www.geeksforgeeks.org/mern-stack/";
  let url2 =
    "https://www.geeksforgeeks.org/k-nearest-neighbors-with-python-ml/#:~:text=The%20K%2DNearest%20Neighbors%20(KNN,are%20near%20to%20each%20other.";
  let ele2 = (
    <a
      class="link-light text-decoration-none"
      href={url2}
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here
    </a>
  );
  let ele3 = (
    <a
      class="link-light text-decoration-none"
      href={url3}
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here
    </a>
  );
  let ele1 = (
    <a
      class="link-light text-decoration-none"
      href={url1}
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here
    </a>
  );

  return (
    <div>
      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <AiFillFileText />
                  </div>
                  <h3 className="card-title mb-3">DATASETS</h3>
                  <p className="card-text">
                    Used NSL-KDD dataset and predicted the attack classes.
                  </p>
                  <button className="btn btn-primary">{ele1}</button>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    {/* <i className="bi bi-triangle"></i> */}
                    <BsTriangle />
                  </div>
                  <h3 className="card-title mb-3">ALGORITHM</h3>
                  <p className="card-text">
                    Used KNN(k-nearest neighbors algorithm) and predicted the
                    attack classes.
                  </p>
                  <button className="btn btn-primary">{ele2}</button>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <AiFillContacts />
                  </div>
                  <h3 className="card-title mb-3">FrontEnd</h3>
                  <p className="card-text">
                    Used MERN stack to build the User Interface and Integrated
                    with Backend.
                  </p>
                  <button className="btn btn-primary">{ele3}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="questions">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  What is a Network Intrusion Detection System (NIDS)?
                </button>
              </h2>
              <div
                id="question-one"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  A Network Intrusion Detection System (NIDS) is a security tool
                  designed to monitor and analyze network traffic to detect
                  suspicious or potentially malicious activities.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  What are the advantages of using a NIDS?
                </button>
              </h2>
              <div
                id="question-two"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  NIDS offers several key benefits:
                  <ul>
                    <li>
                      Comprehensive security across the entire network by
                      monitoring traffic.
                    </li>
                    <li>
                      Scalability, allowing monitoring of large networks with
                      minimal deployment effort.
                    </li>
                    <li>
                      Passive operation, ensuring it does not interfere with
                      network performance or availability.
                    </li>
                    <li>
                      Ability to detect and respond to attacks from external
                      sources, minimizing risks.
                    </li>
                    <li>
                      Strategically placed sensors can cover critical points of
                      the network, enhancing security.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  How does an IDS identify malicious traffic?
                </button>
              </h2>
              <div
                id="question-three"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  An Intrusion Detection System (IDS) identifies malicious
                  traffic using several methods:
                  <ul>
                    <li>
                      <strong>Signature-Based Detection:</strong> IDS compares
                      network traffic with predefined attack signatures to
                      identify known threats.
                    </li>
                    <li>
                      <strong>Anomaly-Based Detection:</strong> IDS looks for
                      deviations from normal network behavior to detect
                      potential zero-day attacks or unknown threats.
                    </li>
                    <li>
                      <strong>Hybrid Detection:</strong> Combining both
                      signature-based and anomaly-based techniques for more
                      accurate detection.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  What are the main attack types detected by NIDS?
                </button>
              </h2>
              <div
                id="question-four"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  NIDS can detect a wide range of attack types, including:
                  <ul>
                    <li>
                      <b>Probe Attacks:</b> These attacks are designed to gather
                      information about the network, often by scanning for
                      vulnerabilities.
                    </li>
                    <li>
                      <b>Denial of Service (DoS) Attacks:</b> The attacker
                      floods the network with excessive traffic to exhaust
                      resources, causing disruption or downtime.
                    </li>
                    <li>
                      <b>Remote-to-Local (R2L) Attacks:</b> These involve
                      attackers attempting to gain access to a local system from
                      a remote location, often through brute force login
                      attempts or exploiting vulnerabilities.
                    </li>
                    <li>
                      <b>User-to-Root (U2R) Attacks:</b> These attacks involve
                      an unauthorized user attempting to escalate their
                      privileges to gain root or administrator access to the
                      system.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      <br></br>
      <div className="text-center">
        <Link className="btn btn-dark  text-center" to="/model" role="button">
          Click here to test
        </Link>
      </div>
      <br></br>
      <br></br>

      <div
        className="modal fade"
        id="enroll"
        tabindex="-1"
        aria-labelledby="enrollLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="enrollLabel">
                Enrollment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="lead">
                Fill out this form and we will get back to you
              </p>
              <form>
                <div className="mb-3">
                  <label for="first-name" className="col-form-label">
                    First Name:
                  </label>
                  <input type="text" className="form-control" id="first-name" />
                </div>
                <div className="mb-3">
                  <label for="last-name" className="col-form-label">
                    Last Name:
                  </label>
                  <input type="text" className="form-control" id="last-name" />
                </div>
                <div className="mb-3">
                  <label for="email" className="col-form-label">
                    Email:
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label for="phone" className="col-form-label">
                    Phone:
                  </label>
                  <input type="tel" className="form-control" id="phone" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
