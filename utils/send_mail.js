const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_ADDR,
        pass: process.env.MAIL_PASS,
    },
})

const send_mail = async (mail_obj) => {
    try {
        let result = await transporter.sendMail({
            from: `"CruxHandle" <${process.env.MAIL_ADDR}>`,
            to: "aakash.kshatriya@outlook.com",
            replyTo: mail_obj.email,
            subject: mail_obj.subject,
            text: `Name ${mail_obj.name} \n\n ${mail_obj.message}`
        })
        return result
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = send_mail
