import { useState } from "react";
import styles from "../styles/Layout.module.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
const Layout = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phoneNumber: "",
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [verifyOtp, setVerifyOtp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const { username, email, phoneNumber } = user;

  console.log(`user`, username, email, phoneNumber);

  const sendOtp = (e) => {
    console.log(`phoneNumber`, phoneNumber);
    setVerifyOtp(true);
    e.preventDefault();

    axios
      .get(
        `https://2factor.in/API/V1/fbb63030-ef71-11eb-8089-0200cd936042/SMS/+91${parseInt(
          phoneNumber
        )}/AUTOGEN/touron`
      )
      .then((response) => {
        let session = response.data.Details;
        console.log(`status`, status);
        setSessionId(session);
      })
      .catch((err) => {
        console.log(err, "kjhk");
      });
  };

  const verifyOtAndLogin = (e) => {
    e.preventDefault();
    console.log("login");
  };

  const verifyOtpAndRegister = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://2factor.in/API/V1/fbb63030-ef71-11eb-8089-0200cd936042/SMS/VERIFY/${sessionId}/${parseInt(
          otp
        )}`
      )
      .then((response) => {
        const status = response.data.Details;
        console.log(`status`, status);
        if (status === "OTP Matched") {
          axios
            .post("http://localhost:3000/api/users", user)
            .then((res) => console.log(`res`, res))
            .catch((err) => console.log(`erccccr`, err));
        }
      })
      .catch((err) => {
        console.log(err, "otp err");
      });
  };

  return (
    <div>
      <nav className={styles.nav}>
        <img src="/travelon.jpg" className={styles.logo} />
        <div>
          <ul className={styles.navlist}>
            <li className={styles.navitem}>Home</li>
            <li className={styles.navitem}>ABout Us</li>
            <li className={styles.navitem}>Contact</li>
            <li onClick={() => setIsFormOpen(true)} className={styles.navitem}>
              Login/Sign Up
            </li>
          </ul>
        </div>
      </nav>

      <form
        className={`${isFormOpen ? styles.formvisible : styles.formhide} ${
          styles.form
        }  `}
      >
        <AiOutlineClose onClick={() => setIsFormOpen(false)} />

        {step === 0 ? (
          <div>
            <div className={styles.formTypeName}>
              <h5>Login</h5>
              <h6>
                or{" "}
                <span
                  onClick={() => {
                    setStep(1);
                    setVerifyOtp(false);
                  }}
                >
                  create new account
                </span>
              </h6>
            </div>
            {!verifyOtp ? (
              <div className={styles.inputConatiner}>
                <input
                  className={styles.formInput}
                  type="text"
                  value={phoneNumber}
                  name="phoneNumber"
                  placeholder="Enter Number"
                  onChange={handleChange}
                />

                <button onClick={sendOtp} className={styles.formButton}>
                  Continue
                </button>
              </div>
            ) : (
              <div className={styles.inputConatiner}>
                <input
                  className={styles.formInput}
                  type="text"
                  name="loginNumber"
                  placeholder="Enter Number"
                />
                <input
                  className={styles.formInput}
                  type="text"
                  name="otp"
                  value={otp}
                  placeholder="Enter Otp"
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  onClick={verifyOtAndLogin}
                  className={styles.formButton}
                >
                  Verify Otp
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className={styles.formTypeName}>
              <h5>Sign Up</h5>
              <h6>
                or{"  "}
                <span
                  onClick={() => {
                    setStep(0);
                    setVerifyOtp(false);
                  }}
                >
                  log into exixsting account
                </span>
              </h6>
            </div>
            {!verifyOtp ? (
              <div className={styles.inputConatiner}>
                <div>
                  <input
                    type="text"
                    value={username}
                    placeholder="Enter Name"
                    onChange={handleChange}
                    name="username"
                    className={styles.formInput}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={email}
                    placeholder="Enter Email"
                    onChange={handleChange}
                    name="email"
                    className={styles.formInput}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={phoneNumber}
                    name="phoneNumber"
                    className={styles.formInput}
                    placeholder="Enter Number"
                    onChange={handleChange}
                  />
                </div>

                <button onClick={sendOtp} className={styles.formButton}>
                  Continue
                </button>
              </div>
            ) : (
              <div className={styles.inputConatiner}>
                <input
                  className={styles.formInput}
                  type="text"
                  name="loginNumber"
                  placeholder="Enter Number"
                />
                <input
                  className={styles.formInput}
                  type="text"
                  value={otp}
                  name="otp"
                  placeholder="Enter Otp"
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  onClick={verifyOtpAndRegister}
                  className={styles.formButton}
                >
                  Verify Otp
                </button>
              </div>
            )}
          </div>
        )}
      </form>
      {children}
      <footer className={styles.footer}>
        <h1> &#169;travel on limited</h1>
      </footer>
    </div>
  );
};

export default Layout;
