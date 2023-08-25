var n = 13, dur = 5;

gsap.set(stage, {perspective:500})

for(var i=1; i<n; i++){
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  stage.appendChild(svg);
  
  gsap.set(svg, {
    position:'absolute',
    rotate:-90,
    width:'80%',
    height:'80%', 
    attr:{ viewBox:'0 0 600 600' }
  })
  
  gsap.to(svg, {duration:dur, rotateZ:180, rotateY:180, ease:'expo.inOut', delay:1-i/dur, repeat:-1, yoyo:true})
  // gsap.to(svg, {duration:dur/10, opacity:0, ease:'expo.inOut', repeat:-1}).play(1-i/dur)
  gsap.to(svg, {duration:dur*1.5, rotateX:360, ease:'sine.inOut', repeat:-1})
  
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  svg.appendChild(c);
  
  gsap.set(c, {
    attr:{
      cx:'50%',
      cy:'50%',
      r:200-i/n*200,
      fill:'none',
      stroke:'#fff',
      'stroke-width':3,
      'stroke-dasharray':(i/n*150)+' '+(i/n*900)+' '+n
    }
  })
  
  gsap.from(c, {duration:dur, attr:{r:'-=75'}, delay:1-i/dur, ease:'expo.inOut', yoyo:true, repeat:-1})
}