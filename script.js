const search=document.getElementById('search'),q=document.getElementById('q'),r=document.getElementById('r');const data=[['Paul Forge','Karakter'],['Chris Forge','Karakter'],['Marek Forge','Karakter'],['Matteo Forge','Karakter'],['Forge Family','Oluşum'],['Angel of Death MC','Oluşum'],['07 ST','Oluşum'],['Diplomasi Zirvesi','Olay'],['Mekanik','Lokasyon']];function openSearch(){search.showModal();q.focus()}q.oninput=()=>{let x=q.value.toLowerCase();r.innerHTML=data.filter(a=>a.join(' ').toLowerCase().includes(x)).map(a=>`<div><b>${a[0]}</b><br><small>${a[1]}</small></div>`).join('')||'<div>Sonuç bulunamadı.</div>'}
/* Yatay görselleri otomatik algıla; dikey görsellere dokunma. */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.pic img,.cover img,.gallery-item img,.event-cover img,.detail-cover img,.portrait img').forEach(img => {
    const mark = () => {
      if (img.naturalWidth && img.naturalHeight) {
        const box = img.closest('.pic,.cover,.gallery-item,.event-cover,.detail-cover,.portrait');
        if (box && img.naturalWidth / img.naturalHeight >= 1.35) {
          box.classList.add('landscape');
          box.style.setProperty('--fill', `url("${img.currentSrc || img.src}")`);
        }
      }
    };
    if (img.complete) mark(); else img.addEventListener('load', mark, {once:true});
  });
});
