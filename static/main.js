document.getElementById('urlForm').addEventListener('submit', (e) => {
    e.preventDefault();

    var formBody = [];
    var encodedKey = encodeURIComponent('url');
    var encodedValue = encodeURIComponent(document.getElementById('urlValue').value);
    formBody.push(encodedKey + "=" + encodedValue);
    formBody = formBody.join("&");

    fetch('/url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        let resultHTML = '<a class="result" href="' + data.shortUrl + '">' + data.shortUrl + '</a>';
        document.getElementById("result").innerHTML = resultHTML;
        document.getElementById('urlValue').value = "";
    });
});