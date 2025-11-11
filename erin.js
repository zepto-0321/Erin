window.onload = ()=>{
  //ロード時にstyle作成
  const style = document.createElement("style");
style.textContent = `
  .udefuri {
    animation-name: beat;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    transform-origin: -1em center;
    display: inline-block;
    margin-left: 0.5em;
  }

  .call {
    margin-left: 0.5em;
  }

  @keyframes beat {
    0%   { transform: rotate(0deg); }
    50%  { transform: rotate(90deg); }
    100% { transform: rotate(0deg); }
  }
`;
document.head.appendChild(style);

};
class ERIN{
public createErin(px){
  const erin = this.setup(px);
  document.body.appendChild(erin);
}

public createAllErinsOnClass(className,px){
  const erin = this.setup(px);
  const elm = document.querySelectorAll("."+className);
  elm.forEach(c =>{
    c.appendChild(erin.cloneNode(true));
  });
}

private setup(px){
    //<p><span>(ﾟ∀ﾟ)</span><span class ="udefuri">O</span><span class = "call">えーりん！えーりん！</span></p>
  const erin = document.createElement("p");
  erin.style.fontSize = px + "px";//サイズ設定
  const hand = document.createElement("span");
  const face = document.createElement("span");
  const call = document.createElement("span");
  face.textContent = "(ﾟ∀ﾟ)";
  hand.textContent = "O";
  hand.classList.add("udefuri");//クラス付与
  call.textContent = "えーりん！えーりん！";
  call.classList.add("call");
  erin.append(face,hand,call);//子要素に
  return erin;
}
}

