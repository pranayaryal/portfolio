export const EmailTemplate = ({ email, message}) => (
    <div>
        <p>Hello, {email}</p>
        <p>Thank you for contacting me. Will get back to you soon</p>
        <p>Your message:</p>
        <p>{message}</p>
    </div>
);
