const client = require('@sendgrid/mail');

const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } = process.env;

exports.handler = async function(event, context, callback) {

  const { message, email, name } = JSON.parse(event.body);
  client.setApiKey(SENDGRID_API_KEY);

  const data = {
    to: SENDGRID_SENDER_EMAIL,
    from: SENDGRID_SENDER_EMAIL,
    subject: `PORTFOLIO: message from ${name} (${email})`,
    html: message,
  };

    try {
      await client.send(data);
      return {
        statusCode:200,
        body:'Message sent',
      };
    }
    catch (err) {
      return {
        statusCode:err.code,
        body: JSON.stringify({msg: err.message}),
      };
    }
}