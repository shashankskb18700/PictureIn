const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//promp to select media stream to pass video element  

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    //catching error
    console.log('whoops there is a error here' , error)
  }
}

button.addEventListener('click', async () => {
  //Disabled button
  button.disabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = flase;
})
//on load
selectMediaStream();