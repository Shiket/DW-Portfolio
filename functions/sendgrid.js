const client = require("@sendgrid/mail")
exports.handler = async function(event, context) {

  const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } = process.env

  client.setApiKey(SENDGRID_API_KEY)
  
  const { message, email, name } = JSON.parse(event.body);

  const data = {
    to: SENDGRID_SENDER_EMAIL,
    from: SENDGRID_SENDER_EMAIL,
    subject: `New message from ${name} (${email})`,
    html: message,
  };

    try {
      client.send(data);
      return {
        statusCode:200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body:'message sent',
      };
    }
    catch (err) {
      return {
        statusCode:err.code,
        body: JSON.stringify({msg: err.message}),
      };
    }

}