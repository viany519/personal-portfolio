import {useEffect,useState} from 'react';
export default function CursorGlow(){const [p,setP]=useState({x:-100,y:-100});useEffect(()=>{const f=e=>setP({x:e.clientX,y:e.clientY});window.addEventListener('mousemove',f);return()=>window.removeEventListener('mousemove',f)},[]);return <div className="cursor-glow" style={{left:p.x,top:p.y}}/>}
