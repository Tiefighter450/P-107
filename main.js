Webcam.set({
    width: 397,
    height: 298,
    dest_width: 417,
    dest_height: 308,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capturedImg" src="' + data_uri + '"/>';
    })
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XDx2SKCvW/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}