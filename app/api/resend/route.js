import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    console.log('you are here')
    const { email, message } = await req.json()
    console.log(email)

    try {
        const data = await resend.emails.send({
            from: "Pranay Aryal <hi@pranaysite.com>",
            to: [email],
            subject: 'Thank you for reaching out',
            react: EmailTemplate({ email: email, message: message})

        })
        console.log("Data from email response: ", data)
        return Response.json({data})

    } catch (error) {
        console.log('there was erro')
        return Response.json({error})
    }
}
