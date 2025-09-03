// utils/helpers.js
export const $ = (sel, parent=document) => parent.querySelector(sel);
export function el(tag, attrs={}, children=[]){
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v]) => {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  });
  [].concat(children).forEach(c => node.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return node;
}
export function pretty(obj){ return JSON.stringify(obj, null, 2); }