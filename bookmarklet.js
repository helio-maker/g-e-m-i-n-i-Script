(()=>{var n=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var a=n((E,s)=>{function c(){return window.getSelection().toString()}s.exports=c});var i=n((y,r)=>{var p="AIzaSyAb2Qf4N83l4-NCPcDUHgs_d3V-2EGLrso",l=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${p}`,d=`Analise a quest\xE3o e siga estes passos:

1. **IDENTIFIQUE** a \xE1rea da matem\xE1tica (\xE1lgebra, geometria, trigonometria, c\xE1lculo, etc.)
2. **PENSE** no processo de resolu\xE7\xE3o passo a passo
3. **RESOLVA** mostrando os c\xE1lculos principais
4. **REVISE** sua resposta verificando se faz sentido
5. **DESTAQUE** a resposta final em **NEGRITO** ou MAI\xDASCULAS

Para quest\xF5es n\xE3o-matem\xE1ticas, responda de forma resumida destacando pontos importantes.

Quest\xE3o:
`;async function u(t){return(await(await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:d+t}]}]})})).json()).candidates[0].content.parts[0].text}r.exports=u});var f=n(()=>{var g=a(),m=i();alert("Script on, alt + G");document.addEventListener("keydown",async function(t){if(t.altKey&&t.key.toLowerCase()==="g"){t.preventDefault();let e=g();if(e==""){alert("Nunhum texto foi selecionado");return}let o=await m(e);alert(o)}})});f();})();
