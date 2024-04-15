import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { apiResponse } from "@/types/apiResponse";

export async function sendVerificationEmai(
    email: string,
    username: string,
    verifyCode: string
): Promise<apiResponse>{
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['arlogomaker@gmail.com'],
            subject: 'UNI-Message | Verifiaction code.',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {success: true, message: "Verfication email send successfully"}

    } catch (emailError) {

        console.error("Error sending verification email", emailError)
        return {success: false, message: "Failed to send verfication email"}

    }
}