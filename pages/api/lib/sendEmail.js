import nodemailer from 'nodemailer';
import {server} from '/server'


const sendEmail = async (to, username, subject) => {

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true, 
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  


  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>¡Bienvenido a Sweet Home!</title>
        <style>
          .email {
            width: 100%;
            height: 100%;
            padding: 20px;
            background-color: #f0810f;
            border-radius: 20px;
          }

          .email__card {
            width: 90%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 20px;
          }

          .email__header {
            background-color: #f0810f;
            color: #fff;
            padding: 20px;
            text-align: center;
            font-family: 'Satisfy';
            border-radius: 20px;
          }

          .email__message {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-family: 'Poppins';
          }

          .email__footer {

              /*Box model*/

              display: flex;
              flex-direction: column;
              gap: 2rem;
              padding: 20px;

              /*Text*/

              font-family: 'Poppins';
              color: #fafafa;

              /*Visuals*/

              background-color: #f0810f;
              border-radius: 20px;
                 
          }

          .copyright__container{

            /*Box model*/

            display: flex;
            flex-direction: column;
          }
       
          .copyright{

            /*Box model*/

            align-self: flex-end;
            justify-content: flex-end;

        }


        a{
          text-decoration: none;
          color: #f0810f;
          cursor: pointer;

        }
        </style>
      </head>
      <body>
      <div class="email">
        <div class="email__card">
            <div class="email__header">
              <h1>¡BIENVENIDO A SWEET HOME!</h1>
            </div>
            <div class="email__message">
              <h1>¡Bienvenido a Sweet Home ${username}!</h1>
              <p>Estás a un solo paso de poder utilizar toda la funcionalidad de la aplicación, para ello solo debes iniciar sesión a través del siguiente enlace:</p>
              <a href='${server}/auth/signIn'>¡Accede a Sweet Home ahora!</a>
            </div>
            <div class='email__footer'>
                <p>Si tiene alguna duda, no dude en contactar con nosotros a través de esta dirección de correo electrónico,
                estaremos encantados de ayudarte</p>      
            </div>  
            <div class="copyright__container">
              <div class='copyright'>
                  <p> Copyright &copy; 2023 Sweet Home Corporation</p>
              </div>    
            </div>
          </div>
        </div>
      </body>
    </html>
  `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('El email se ha enviado correctamente:', info.response);
    return true;
  } catch (error) {
    console.error('Error enviando email:', error);
    return false;
  }
};

export default sendEmail;