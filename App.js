import logo from "./logo.svg";
import classes from "./App.module.css";

import Mobile from "./mobile.jpg";

import { FcGoogle } from "react-icons/fc";


function App() {
  return (
    <div className={classes.mainParentContainer}>
      <div className={classes.parent}>
        <div className={classes.headerSection}>
          <div className={classes.logonName}>Dashoo</div>

          <div className={classes.rightSidediv}>
            <div className={classes.menu1}>
              <div className={classes.menuIcon}></div>
              <div className={classes.menuTitle}>Title 1</div>
            </div>
            <div className={classes.menu1}>
              <div className={classes.menuIcon}></div>
              <div className={classes.menuTitle}>Title 1</div>
            </div>
            <div className={classes.menu1}>
              <div className={classes.menuIcon}></div>
              <div className={classes.menuTitle}>Title 1</div>
            </div>
            <div className={classes.menu1}>
              <div className={classes.menuIcon}></div>
              <div className={classes.menuTitle}>Title 1</div>
            </div>
          </div>
        </div>

        <div className={classes.mainContaineer}>
          <div className={classes.rightdiv}>
            <img src={Mobile} className={classes.mainImage} />
          </div>

          <div className={classes.leftdiv}>
            <div className={classes.mainTitle}>Welcome to DashoAPP</div>

            <div className={classes.mainTitle2}>Connect. Learn. Teach</div>

            <div className={classes.leftDivSubContainer}>
              <div className={classes.container1}>
                <div className={classes.loginTitleText}>
                  Enter Your Mobile Number to Verify Your Account
                </div>

                <div className={classes.mainContainerA1}>
                  <input
                    className={classes.editmobileNuBox}
                    type="text"
                    placeholder="Kindly Type Your Mobile Number"
                    name="inputfield"
                  />
                </div>
              </div>

              {/* <div className={classes.container1}>
                <div className={classes.loginTitleText}>Password</div>

                <div className={classes.mainContainerA1}>
                  <input
                    className={classes.editmobileNuBox}
                    type="text"
                    placeholder=" Mobile Number"
                    name="inputfield"
                  />
                </div>
              </div> */}

              {/* <div className={classes.loginTitleText}>ForgetPassword</div> */}

              <button className={classes.singUpbtn}>Get OTP</button>

              <div className={classes.mainTitle2}>OR</div>

              <button className={classes.newbtn}>
                <div className={classes.googleIcon}>
                  <FcGoogle/>
                </div>
                <div className={classes.googleTitle}>Sign In With Google</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
