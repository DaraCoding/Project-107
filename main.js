function startClassification() {    
    navigator.mediaDevices.getUserMedia();
navigator.mediaDevices.getUserMedia({audio : true});
classifier = ml5.soundClassifier(' https://teachablemachine.withgoogle.com/models/sskFB3-xF/model.json',modelReady)
}

function modelReady() {
    classifier.classify(gotResults);
    
}

function gotResults(error, results) {
    
}