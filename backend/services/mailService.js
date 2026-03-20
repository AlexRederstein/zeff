const nodeMailer = require("nodemailer")

class MailService {

    constructor() {
        this.transpoter = nodeMailer.createTransport({
            host: process.env.MAIL_SERVER,
            port: process.env.MAIL_PORT,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }

        })
    }

    async sendActivationMail(to, link) {
        
        await this.transpoter.sendMail({
            from: process.env.MAIL_USER,
            to: to,
            subject: `Активация аккаунта на ${process.env.SERVER_URL}`,
            text: '',
            html: 
                    `
                        <div>
                            <h1>Для активации перейдите по ссылке</h1>
                            <a href='${link}'>${link}</a>
                        </div>
                    `
        })
    }
}

module.exports = new MailService()