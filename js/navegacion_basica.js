//import * as Three from '/js/three.module.js';


var onPointerDownMouseX = 0, onPointerDownMouseY = 0,lon = 0, onPointerDownLon = 0,lat = 0, onPointerDownLat = 0;
var camera;
var cameraZoom=0;
var pointer = new Array(0,0);

function getlon(){
    return lon;
}
function getlat(){
    return lat;
}
function getcameraZoom(){
    return cameraZoom;
}
function resetcameraZoom()
{
    cameraZoom=0;
}
function setcamera(camera)
{
   this.camera= camera; 
}
function getPointer()
{
    return pointer;
}
/*
*/

			function onPointerDown( event ) {

				if ( event.isPrimary === false ) return;

				//isUserInteracting = true;

				onPointerDownMouseX = event.clientX;
				onPointerDownMouseY = event.clientY;

				onPointerDownLon = lon;
				onPointerDownLat = lat;
                pointer[0] = ( event.clientX / window.innerWidth ) * 2 - 1;
	            pointer[1]= - ( event.clientY / window.innerHeight ) * 2 + 1;
              //  alert("pointer.x "+ pointer[0]);
                
				document.addEventListener( 'pointermove', onPointerMove );
				document.addEventListener( 'pointerup', onPointerUp );

			}

			function onPointerMove( event ) {

				if ( event.isPrimary === false ) return;

				lon = ( onPointerDownMouseX - event.clientX ) * 0.1 + onPointerDownLon;
				lat = ( event.clientY - onPointerDownMouseY ) * 0.1 + onPointerDownLat;


			}

			function onPointerUp() {

				if ( event.isPrimary === false ) return;

				//isUserInteracting = false;

				document.removeEventListener( 'pointermove', onPointerMove );
				document.removeEventListener( 'pointerup', onPointerUp );

			}


function keyDown(event){
    
    switch(event.keyCode){
            
            case 38:
            cameraZoom++
            //alert("cameraZoom"+cameraZoom);
            break;
            
    }
    
    
}