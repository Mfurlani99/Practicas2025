// utils/progress.js
export async function streamWithProgress(url, { onProgress, onChunk, signal } = {}){
  const res = await fetch(url, { signal });
  if(!res.ok) throw new Error("HTTP " + res.status);
  const total = Number(res.headers.get("Content-Length")) || null;
  const reader = res.body.getReader();
  let received = 0;
  while(true){
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    onChunk && onChunk(value);
    onProgress && onProgress({ received, total, percent: total ? (received/total)*100 : null });
  }
  return res;
}