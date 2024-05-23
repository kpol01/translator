const chatBox = document.getElementById('chat-box');
const inputText = document.getElementById('input-text');
const sendButton = document.getElementById('send-button');

function addMessage(message, isUser) {
    const messageClass = isUser ? 'user-message' : 'chat-message';
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(messageClass);
    messageContainer.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageContainer);
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

inputText.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendButton.click();
    }
});

sendButton.addEventListener('click', function() {
    const text = inputText.value.trim();
    if (text === '') return;
    addMessage(text, true);
    inputText.value = '';
    translateText(text);
});

function translateText(text) {
    fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'text=' + encodeURIComponent(text)
    })
    .then(response => response.text())
    .then(translatedText => {
        addMessage(translatedText, false);
    });
}
