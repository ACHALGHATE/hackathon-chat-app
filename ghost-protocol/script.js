// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAigEM_bdif8wFHNmRolszG0Tm33yspD0w",
    authDomain: "ghostchat-app-01.firebaseapp.com",
    projectId: "ghostchat-app-01",
    storageBucket: "ghostchat-app-01.firebasestorage.app",
    messagingSenderId: "701393263235",
    appId: "1:701393263235:web:57cffa7e740d85d342d9b6",
    measurementId: "G-WJ0DJR065Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ------------------------------
// DOM elements
// ------------------------------
const postButton = document.getElementById("postBtn");
const messageInput = document.getElementById("messageInput");
const usernameInput = document.getElementById("usernameInput");
const messagesContainer = document.getElementById("messagesContainer");

// ------------------------------
// Add message to Firestore
// ------------------------------
postButton.addEventListener("click", async() => {
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if (!username || !message) {
        alert("Please enter both username and message!");
        return;
    }

    try {
        await db.collection("messages").add({
            username: username,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Clear input after posting
        usernameInput.value = "";
        messageInput.value = "";

        // Refresh messages
        loadMessages();
    } catch (error) {
        console.error("Error posting message:", error);
        alert("Failed to post message. Try again!");
    }
});

// Load messages from Firestore
async function loadMessages() {
    messagesContainer.innerHTML = "";
    // Clear current messages

    try {
        const querySnapshot = await db.collection("messages")
            .orderBy("timestamp", "desc")
            .get();

        querySnapshot.forEach(doc => {
            const data = doc.data();
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.innerHTML = `<strong>${data.username}</strong>: ${data.message}`;
            messagesContainer.appendChild(messageElement);
        });
    } catch (error) {
        console.error("Error loading messages:", error);
        messagesContainer.innerHTML = "<p>Failed to load messages.</p>";
    }
}

// Auto-load messages on page load

window.addEventListener("DOMContentLoaded", loadMessages);