const btnOne = document.querySelector('.send_message-One')
const geoLog = document.querySelector('.send_message-Two')
const start = document.querySelector('.start')
const end = document.querySelector('.end')
const input = document.querySelector('.input-message')
const status = document.querySelector('#status');
const outpyte = document.querySelector('.message_window')

const wsUri = " wss://echo-ws-service.herokuapp.com";

let websocket

function writeToScreen(message){
    let pre = document.createElement('p')
    pre.innerHTML = message
    outpyte.appendChild(pre)
}

start.addEventListener('click', function(){

    this.style.display = 'none'
    end.style.display = 'block'
    end.style.background = 'red'

    websocket = new WebSocket(wsUri)
    websocket.onopen = function(evn){
        writeToScreen('Connected')
    }
    websocket.onclose = function(evn){
        writeToScreen('Disconnected')
    }
    websocket.onmessage = function(evn){
        writeToScreen(
            '<span style="color: blue" a: right> Response: ' + evn.data + '</span>'
        )
    }
    websocket.onerror = function(evn){
        writeToScreen('<span style="color: red"> ERROR: ' + evn.data + '</span>')
    }

})



btnOne.addEventListener('click', ()=>{
    if(websocket != null){
        let message = input.value
        writeToScreen("SENT: " + message);
        websocket.send(message)
    }
})


end.addEventListener('click', function(){
    this.style.display = 'none'
    start.style.display = 'block'
    websocket.close()
    websocket = null
  });


let map = document.createElement('a')
map.innerHTML = ''

const error = () => {
    map.textContent = 'Error'
    outpyte.appendChild(map)
}

const success = (position) => {

    outpyte.appendChild(map)

    console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    map.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    map.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    map.textContent = 'Ссылка на карту';
  }



geoLog.addEventListener('click', function(){

    if(websocket == null){
        return
    }else{
        map.href = ''
        map.textContent = ''
    
        if(!navigator.geolocation){
            map.textContent = 'error'
        }else{
            map.textContent = 'done'
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }
    
    
})


