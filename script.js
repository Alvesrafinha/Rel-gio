function relogio() {
   const elementoRelogio = document.querySelector('.relogio');
   const horaAtual = new Date();
   const horas = horaAtual.getHours();
   const minutos = horaAtual.getMinutes();
   const segundos = horaAtual.getSeconds();
   
   const formatoHoras = horas.toString().padStart(2, '0');
   const formatoMinutos = minutos.toString().padStart(2, '0');
   const formatoSegundos = segundos.toString().padStart(2, '0');

   elementoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`;


   const frase = document.querySelector(".frase")

   dia = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-feira", "Quinta-Feira", "Sexta-Feira", "Sábado");
   mes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

   hoje = new Date


   frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, "0")} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()} `


   if (formatoHoras >= 0 && formatoHoras < 12) {
      document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2020/07/04/19/27/grey-heron-5370732_960_720.jpg)'

   }
   else if (formatoHoras >= 12 && formatoHoras <= 18) {

      document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2013/07/18/20/25/boat-164977_960_720.jpg)'

   }
   else {
      document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_960_720.jpg)'
   }
}
setInterval(relogio, 1000);
