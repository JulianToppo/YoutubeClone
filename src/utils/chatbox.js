export const chatMessages = [
    { sender: "User1", message: "Hi there! How can I help you today?", imageLink: "https://static.thenounproject.com/png/5034901-200.png"},
    { sender: "User2", message: "Hello! I'm here to assist you with any questions you have.", imageLink: "https://static.thenounproject.com/png/5034901-200.png"},
    { sender: "User3", message: "I'm having trouble with my account login. Can you help me reset my password?", imageLink: "https://static.thenounproject.com/png/5034901-200.png"},
    { sender: "User4", message: "Sure thing! Could you please provide me with your email address associated with the account?", imageLink: "https://static.thenounproject.com/png/5034901-200.png"},
    { sender: "User5", message: "My email is example@example.com.", imageLink: "https://static.thenounproject.com/png/5034901-200.png"},
    { sender: "User6", message: "Thank you! I've sent you an email with instructions on how to reset your password.", imageLink: "https://static.thenounproject.com/png/5034901-200.png"},
    { sender: "User7", message: "Great, I'll check my email. Thank you for your help!", imageLink: "https://static.thenounproject.com/png/5034901-200.png"},
    { sender: "User8", message: "You're welcome! If you have any other questions, feel free to ask.", imageLink: "https://static.thenounproject.com/png/5034901-200.png"},
    { sender: "User9", message: "Actually, I have a question about your pricing plans.", imageLink: "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg"},
    { sender: "User10", message: "Of course! Our pricing plans vary depending on the features and services you need. Would you like me to provide you with more information?", imageLink: "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg"},
    { sender: "User11", message: "Yes, please. I'm interested in the features included in the premium plan.", imageLink: "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg"},
    { sender: "User12", message: "Our premium plan includes unlimited access to all features, priority customer support, and additional storage space. You can find more details on our website.", imageLink: "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg"},
    { sender: "User13", message: "Thank you for the information. I'll take a look at the website for more details.", imageLink: "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg"},
    { sender: "User14", message: "You're welcome! Let me know if you have any other questions.", imageLink: "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg"},
    { sender: "User15", message: "Here's an image for reference:", imageLink: "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg" }
];

  export const getRandomMessage=(messages) =>{
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

  