import SendEmailNotification from "./SendEmailNotification.js";

const FinishedNotification = async () => {
    const subject = 'Subida masiva de audios finalizada';
    const message = `La subida masiva de audios ha finalizado correctamente.`;
    await SendEmailNotification(subject, message);
}

export default FinishedNotification;