// Access the camera and start the QR code scanner
const scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
const startScanButton = document.getElementById('startScan');

startScanButton.addEventListener('click', () => {
    requestCameraAccess();
});

function requestCameraAccess() {
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
            startScanButton.style.display = 'none'; // Hide the button after starting the scanner
        } else {
            alert('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
        alert('Error accessing the camera. Please ensure your browser supports camera access and you are using a secure connection (https or localhost).');
    });
}

scanner.addListener('scan', function (content) {
    alert('Scanned: ' + content);
});
