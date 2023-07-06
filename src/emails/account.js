const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "saeedsabra565@gmail.com",
    subject: "Thanks for joining us!",
    text: `Welcome ${name} to my Task Manager App!.\nLet me know how you get along with the app.`,
    // html: `<strong> Welcome <i>${name}</i></strong>, Let's have some Fun!!!`,
  });
};

module.exports = {
  sendWelcomeEmail,
};
