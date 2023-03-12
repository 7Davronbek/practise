import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_KEY, RECAPTCHA_SITEKEY } from "../constants";

const Repatcha = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="Repatcha">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Repatcha</h3>

            <ReCAPTCHA sitekey={RECAPTCHA_SITEKEY} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repatcha;
