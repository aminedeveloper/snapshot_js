

            
            
            // Grab elements, create settings, etc.
                      var video = document.getElementById('video');

                      // Get access to the camera!
                      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                          // Not adding `{ audio: true }` since we only want video now
                          navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                              //video.src = window.URL.createObjectURL(stream);
                              video.srcObject = stream;
                              video.play();
                          });
                      }
       /////////////////////////////////////

       var canvas = document.getElementById('canvas');
       var context = canvas.getContext('2d');
       var video = document.getElementById('video');

function snapshot(){
    context.drawImage(video, 0, 0, 640, 480);
}

function savebtn(){
    var c = document.getElementById('canvas');
    canvas.toBlob(function(c) {
        saveAs(c, "pretty image.png");
    });
    
}
function resetbtn(){
    location.reload();
}

 