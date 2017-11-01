var pitch = ((Math.atan(event.clientY / renderer.canvas.height * 2 - 1) - Math.atan(onPointerDownPointerY / renderer.canvas.height * 2 - 1)) * 180 / Math.PI * vfov / 90) + onPointerDownPitch;
pitchSpeed = (pitch - config.pitch) * 0.2;
config.pitch = pitch;

console.log(pitch);