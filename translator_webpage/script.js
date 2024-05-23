document.getElementById('input-text').addEventListener('input', function() {
    var inputText = this.value;
    fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'text=' + encodeURIComponent(inputText)
    })
    .then(response => response.text())
    .then(translatedText => {
        document.getElementById('output-text').innerText = translatedText;
    });
});
