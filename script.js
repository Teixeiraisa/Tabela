
  function mostrarconteudo(opcao)  {

     if (opcao === 1) {
    document.getElementById("celula4").innerHTML =  `
   <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7qEy2GvASiOfTO5mq9m6Hu?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
   </iframe>
  `;
  } 
     else if (opcao === 2) {
    document.getElementById("celula4").innerHTML = `
    <div style="width:100%; height:100%;">

      <!-- iframe -->
      <iframe 
        src="https://www.frivclassic.com/fc-pt.html" 
        style="
          width:100%;   
          height:100%;  
          border:none;  
        ">
      </iframe>
      <iframe 
        src="https://www.friv.com/z/games/therightmix/game.html?c" 
        style="
          width:100%;   
          height:100%;  
          border:none;  
        ">
      </iframe>

    </div>
  `;
  }
    else if (opcao === 3) {
    document.getElementById("celula4").innerHTML =  `
    <div style="width:100%; height:100%;">

      <!-- iframe -->
      <iframe 
        src="https://teixeiraisa.github.io/Calculadora/" 
        style="
          width:100%;   
          height:100%;  
          border:none;  
        ">
      </iframe>

    </div>
  `
  }     
    else if (opcao === 4) {
    document.getElementById("celula4").innerHTML =  `

    <!-- div que ocupa toda a célula -->
    <div style="width:100%; height:100%;">

      <!-- iframe -->
      <iframe 
        src="https://en.wikipedia.org/wiki/Hollow_Knight" 
        style="
          width:100%;   /* ocupa toda a largura da célula */
          height:100%;  /* ocupa toda a altura da célula */
          border:none;  /* tira a borda do iframe */
        ">
      </iframe>

    </div>
  `
  }   
  else if (opcao === 5) {
  document.getElementById("celula4").innerHTML = `
    <div class="contato-container">

      <h2>Meus Contatos</h2>

      <a href="https://www.linkedin.com/in/isabela-teixeira-923376362/" target="_blank" class="contato-btn linkedin">
        <i class="fab fa-linkedin"></i>
        LinkedIn
      </a>

      <a href="https://github.com/Teixeiraisa" target="_blank" class="contato-btn github">
        <i class="fab fa-github"></i>
        GitHub
      </a>

      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=isabela.costa.200916@gmail.com" class="contato-btn email">
        <i class="fas fa-envelope"></i>
        Email
      </a>

    </div>
  `;
}
//<i class="fab fa-linkedin"></i> 
//tag <i> usada para mostrar um icone
//"fab" = icone de marca (brand)
//"fa-linkedin" = icone do linkedin
//os icones vem da biblioteca Font Awesome



}

  
