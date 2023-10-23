module.exports = (name) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f9f9f9;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }
  
          .container {
              background-color: #ffffff;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
  
          h2 {
              color: #333;
          }
  
          p {
              margin-bottom: 20px;
              color: #555;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <h2>Thank You, ${name}!</h2>
          <p>Thank you for using our platform. We appreciate your business and hope you have a great experience with us.</p>
          <p>If you have any questions or need further assistance, feel free to contact our support team.</p>
          <p>Have a wonderful day!</p>
      </div>
  </body>

  </html>
  `
}