const client = require('@sendgrid/mail');

const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } = process.env;

exports.handler = async function(event, context, callback) {

  const { message, email, name } = JSON.parse(event.body);
  client.setApiKey(SENDGRID_API_KEY);
  
  console.log("passed" + message)
  console.log("passed" + email)
  console.log("passed" + name)
  
  const data = {
    to: SENDGRID_SENDER_EMAIL,
    from: SENDGRID_SENDER_EMAIL,
    subject: `New message from ${name} (${email})`,
    html: message,
  };

    try {
      await client.send(data);
      return {
        statusCode:200,
        body:'Message sent',
      };
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        // },
        // body:'message sent',
    }
    catch (err) {
      return {
        statusCode:err.code,
        body: JSON.stringify({msg: err.message}),
      };
    }

}