const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(menu){menu.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
function submitContact(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const info=document.getElementById('contactInfo').value.trim();
  const msg=document.getElementById('message').value.trim();
  const out=document.getElementById('formMsg');
  const subject=encodeURIComponent('Raj Maurya Foundation website enquiry');
  const body=encodeURIComponent(`नाम: ${name}\nसंपर्क: ${info}\nसंदेश: ${msg}`);
  // No email address was supplied in the source documents, so prepare a mailto
  // only if the site owner adds one here later.
  out.textContent='संदेश तैयार है। कृपया संस्था का आधिकारिक ईमेल जोड़कर इस फॉर्म को live करें।';
  return false;
}
