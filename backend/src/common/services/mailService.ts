import * as nodemailer from 'nodemailer';

export const sendOTPEmail = async (email: string, otp: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    await transporter.sendMail({
        from: `"Samvaad" <${process.env.EMAIL_USER}>`, // Friendly sender name
        to: email,
        subject: '🔐 Your OTP for Registration - Samvaad',
        html: `
          <div style="font-family: 'Arial', sans-serif; text-align: center; padding: 20px; background: linear-gradient(to right, #007bff, #00c6ff);">
            <div style="max-width: 500px; margin: auto; background: white; padding: 25px; border-radius: 12px; box-shadow: 0px 4px 15px rgba(0,0,0,0.2);">
              
              <img src="https://i.ibb.co/4VR7rPF/samvaad-icon.png" alt="Samvaad Logo" width="80" style="margin-bottom: 15px;"/>
              
              <h2 style="color: #007bff; font-weight: bold;">Welcome to Samvaad 💬</h2>
              <p style="font-size: 16px; color: #4a4a4a;">We're excited to have you on board! Use the OTP below to complete your verification:</p>
              
              <div style="background: #007bff; color: white; font-size: 24px; font-weight: bold; padding: 12px 25px; border-radius: 8px; display: inline-block; letter-spacing: 2px;">
                ${otp}
              </div>
    
              <p style="font-size: 14px; color: #555; margin-top: 15px;">This OTP is valid for <strong>5 minutes</strong>. Please do not share it with anyone. 🛡️</p>
    
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
    
              <p style="font-size: 13px; color: #777;">If you didn't request this, please ignore this email.</p>
              <p style="font-size: 13px; color: #777;">Need help? <a href="mailto:support@samvaad.com" style="color: #007bff; text-decoration: none; font-weight: bold;">Contact Support</a></p>
            </div>
          </div>
        `,
    });
    
              
}