const sgMail = require("@sendgrid/mail");
const me = "saeedsabra565@gmail.com";
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: me,
    subject: "Thanks for joining us!",
    text: `Welcome ${name} to my Task Manager App!.\nLet me know how you get along with the app.`,
    // html: `<strong> Welcome <i>${name}</i></strong>, Let's have some Fun!!!`,
  });
};

const cancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: me,
    subject: "Task manager account cancellation",
    text: `Dear ${name},\n\tWe regret to inform that your task management account`,
  });
};

module.exports = {
  sendWelcomeEmail,
  cancelationEmail,
};
