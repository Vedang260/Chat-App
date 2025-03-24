export const generateOTP = (): { otp: string; otpExpirationTime: Date } => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    const otpExpirationTime = new Date(Date.now() + 5 * 60 * 1000); // Set expiration time as Date object

    return { otp, otpExpirationTime };
};
