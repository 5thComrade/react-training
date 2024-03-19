import emailjs from "@emailjs/browser";

const yourEmailJSPublicKey = "";
const yourEmailJSServiceID = "";
const yourEmailJSTemplateID = "";

const emailService = async (to_name, to_email) => {
  emailjs.init({
    publicKey: yourEmailJSPublicKey,
  });

  const res = emailjs.send(yourEmailJSServiceID, yourEmailJSTemplateID, {
    to_name: to_name,
    to_email: to_email,
    source_code: "https://github.com/5thComrade/react-training",
    reply_to: "walter.white@breakingbad.com",
  });

  return res;
};

export default emailService;
