const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendOTPEmail = async (email, otp) => {
  const mailOptions = {
    from: `"ChefBot" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: '🔐 ChefBot - Password Reset OTP',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="text-align: center; background: linear-gradient(135deg, #ff6b35, #f7931e); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">ChefBot</h1>
          <p style="color: white; margin: 5px 0 0;">Your AI Cooking Assistant</p>
        </div>
        <div style="padding: 20px; text-align: center;">
          <h2>Password Reset Request</h2>
          <p>Your OTP for password reset is:</p>
          <div style="font-size: 36px; font-weight: bold; letter-spacing: 5px; background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            ${otp}
          </div>
          <p>This OTP is valid for <strong>10 minutes</strong>.</p>
          <p>If you didn't request this, please ignore this email.</p>
        </div>
        <div style="text-align: center; padding: 15px; background: #f5f5f5; border-radius: 0 0 10px 10px; font-size: 12px; color: #666;">
          This is an automated message from ChefBot. Do not reply to this email.
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ OTP email sent to ${email}`);
    return true;
  } catch (error) {
    console.error('❌ Email send failed:', error.message);
    return false;
  }
};

module.exports = { sendOTPEmail };