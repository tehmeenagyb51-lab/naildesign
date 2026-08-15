const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

//* Initialize Express app and middleware
//* =====================================
const app = express();
app.use(cors());
app.use(bodyParser.json());


//* Basic route to test server
//* ==========================
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

//* Endpoint to handle email sending
//* ================================
app.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;
    
    try {
        // Create Transporter for Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email Options
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          replyTo: email,
          subject: `New Contact Message from ${name}`,
        
          html: `
            <div style="margin: 0; padding: 40px 20px; background-color: #f7f5f3; font-family: Arial, Helvetica, sans-serif; color: #333333;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);">
        
                <!-- Header -->
                <div style="padding: 30px 30px 20px; text-align: center; background-color: #ffffff;">
                  <img
                    src="https://ik.imagekit.io/ez9g5ak71/Nail%20Design/nailt-design-logo.png"
                    alt="Nail Design - logo"
                    style="display: block; margin: 0 auto 8px; max-width: 75px; height: auto;"
                  />
        
                  <h2 style="margin: 0; color: #2c2c2c; font-size: 22px; font-weight: 600;">
                    New Contact Message
                  </h2>
        
                  <p style="margin: 8px 0 0; color: #888888; font-size: 14px;">
                    Nail Design Ljiljana Medović
                  </p>
                </div>
        
                <!-- Divider -->
                <div style="height: 1px; background-color: #eeeeee; margin: 0 30px;"></div>
        
                <!-- Contact Information -->
                <div style="padding: 0px 30px;">        
                  <p style="margin: 8px 0; font-size: 15px; line-height: 1.6;">
                    <strong>Name:</strong> ${name}
                  </p>
        
                  <p style="margin: 8px 0; font-size: 15px; line-height: 1.6;">
                    <strong>Email:</strong>
                    <a href="mailto:${email}" style="color: #8b6f61; text-decoration: none;">
                      ${email}
                    </a>
                  </p>
        
                  <p style="margin: 8px 0; font-size: 15px; line-height: 1.6;">
                    <strong>Phone:</strong>
                    <a href="tel:${phone}" style="color: #8b6f61; text-decoration: none;">
                      ${phone}
                    </a>
                  </p>
                </div>
        
                <!-- Message -->
                <div style="padding: 0 30px 30px;">
                  <h3 style="margin: 0 0 12px; color: #2c2c2c; font-size: 16px;">
                    Message
                  </h3>
        
                  <div style="background-color: #f9f8f7; border-left: 3px solid #c7a99a; padding: 15px; border-radius: 5px;">
                    <p style="margin: 0; color: #555555; font-size: 15px; line-height: 1.7;">
                      ${message}
                    </p>
                  </div>
                </div>
        
                <!-- Footer -->
                <div style="padding: 20px 30px; background-color: #fafafa; text-align: center;">
                  <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5;">
                    This message was sent through the contact form on the
                    Nail Design Ljiljana Medović website.
                  </p>
                </div>
        
              </div>
            </div>
          `,
        };

        // Sent Mail
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            message: 'Email sent successfully',
            success: true
        });

    } catch (error) {
        res.status(500).json({
            message: 'Failed to send email',
            success: false
        })
    };
});


//* Start the server
//* ================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);