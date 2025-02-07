function carregaArquivo (container, arquivo)
{
    
    fetch(arquivo).
    then(arq => arq.text()).
    then(elemento => document.getElementById(container).innerHTML = elemento).
    catch(erro => console.log("Erro ao carregar o arquivo: " + arquivo));
    
}

function toggleMenu()
{
    
    document.getElementById("sidebar").classList.toggle("show");
    
}


carregaArquivo("container-sidebar", "sidebar.html");
carregaArquivo("container-navbar", "navbar.html");