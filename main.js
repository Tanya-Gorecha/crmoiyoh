Webcam.set({
    width:250,
    height:260,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'"id="captured_image">';
    });
}
console.log(ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/d01OlIe5o/model.json", modelloaded);

function identify(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML= result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}
function modelloaded(){
    console.log("model is loaded");
}

