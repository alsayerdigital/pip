const videoEle = document.getElementById('video');
const start = document.getElementById('start');

async function getMedia(){
    try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEle.srcObject = mediaStream
    videoEle.onloadedmetadata = ()=>{
        videoEle.play();
    }

    }
    catch(err)
    {
        console.log(err);
    }
}

start.addEventListener('click', async ()=>{

start.disabled = true;
await videoEle.requestPictureInPicture();
start.disabled = false;
})


getMedia()
