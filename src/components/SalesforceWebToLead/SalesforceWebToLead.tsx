import { Component } from 'react';
import Container from 'react-bootstrap/Container';
class SalesforceWebToLead extends Component {

    __metaScripts = '<script src="https://www.google.com/recaptcha/api.js" /><script src="./recaptchaScript.js" />'
    __content = `<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8"> 
        <script src="https://www.google.com/recaptcha/api.js">
        </script> 
        <script> function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
        </script> 
        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQy00000B1Dsv" method="POST"> 
        <input type=hidden name="captcha_settings" value="{"keyname":"Google_ReCaptcha","fallback":"true","orgId":"00DQy00000B1Dsv","ts":""}"> 
        <input type=hidden name="oid" value="00DQy00000B1Dsv"> 
        <input type=hidden name="retURL" value="https://dmitriidronov.github.io/ThankYou"> 
        <label for="first_name">First Name</label>
        <input id="first_name" maxlength="40" name="first_name" size="20" type="text" />
        <br>
         <label for="last_name">Last Name</label>
         <input id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br> 
         <label for="email">Email</label><input id="email" maxlength="80" name="email" size="20" type="text" /><br> <label for="company">Company</label><input id="company" maxlength="40" name="company" size="20" type="text" /><br> <label for="country">Country</label><input id="country" maxlength="40" name="country" size="20" type="text" /><br> <div class="g-recaptcha" data-sitekey="6Lf2pS4qAAAAACiv8wyq0zpmzcNAr0b4yiuYjhdz"></div><br> <input type="submit" name="submit"> </form>`;
    render() {
        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: this.__content }} />
                {/* <meta content='text/html; charset=UTF-8' httpEquiv='Content-Type' dangerouslySetInnerHTML={{ __html: this.__metaScripts }} />
                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQy00000B1Dsv" method="POST">

                    <input hidden={true} name='captcha_settings' value='{"keyname":"Google_ReCaptcha","fallback":"true","orgId":"00DQy00000B1Dsv","ts":""}' />
                    <input hidden={true} name="oid" value="00DQy00000B1Dsv" />
                    <input hidden={true} name="retURL" value="https://dmitriidronov.github.io/ThankYou" />


                    <label htmlFor="first_name">First Name</label><input id="first_name" maxLength={40} name="first_name" size={20} type="text" />
                    <br />

                    <label htmlFor="last_name">Last Name</label><input id="last_name" maxLength={80} name="last_name" size={20} type="text" />
                    <br />

                    <label htmlFor="email">Email</label><input id="email" maxLength={80} name="email" size={20} type="text" /><br />

                    <label htmlFor="company">Company</label><input id="company" maxLength={40} name="company" size={20} type="text" /><br />

                    <label htmlFor="country">Country</label><input id="country" maxLength={40} name="country" size={20} type="text" /><br />

                    <div className="g-recaptcha" data-sitekey="6Lf2pS4qAAAAACiv8wyq0zpmzcNAr0b4yiuYjhdz"></div><br />
                    <input type="submit" name="submit" />

                </form> */}

            </>
        );
    }


}

export default SalesforceWebToLead;
