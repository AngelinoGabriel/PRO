document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Ativar Alto Contraste';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.padding = '10px';
    
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('high-contrast');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Botão de alto contraste (já implementado)
    const toggleButton = document.createElement('button');
 toggleButton.textContent = 'Ativar Alto Contraste';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.padding = '10px';
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('high-contrast');
    });

    // Botões para aumentar e diminuir o textos
    
      const textIncreaseButton = document.createElement('button');
      textIncreaseButton.textContent = 'Aumentar Texto';
      textIncreaseButton.style.position = 'fixed';
     textIncreaseButton.style.top = '50px';
     textIncreaseButton.style.right = '10px';
     textIncreaseButton.style.padding = '10px';

    const textDecreaseButton = document.createElement('button');
    textDecreaseButton.textContent = 'Diminuir Texto';
    textDecreaseButton.style.position = 'fixed';
    textDecreaseButton.style.top = '90px';
    textDecreaseButton.style.right = '10px';
    textDecreaseButton.style.padding = '10px';

       document.body.appendChild(textIncreaseButton);
        document.body.appendChild(textDecreaseButton);

      let currentFontSize = 16; // Tamanho padrão do texto

     textIncreaseButton.addEventListener('click', function () {
        currentFontSize += 2;
        document.body.style.fontSize = currentFontSize + 'px';
    });

     textDecreaseButton.addEventListener('click', function () {
        if (currentFontSize > 12) { // Evita diminuir muito o texto
            currentFontSize -= 2;
            document.body.style.fontSize = currentFontSize + 'px';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const helpButton = document.createElement('button');
    helpButton.textContent = 'Assistente de Ajuda';
    helpButton.style.position = 'fixed';
    helpButton.style.top = '170px';
    helpButton.style.right = '10px';
    helpButton.style.padding = '10px';
    
    document.body.appendChild(helpButton);

    const faqs = {
        "como navegar no site": "Use as teclas de seta para navegar ou clique nos links de navegação.",
        "como aumentar o texto": "Clique no botão 'Aumentar Texto' no canto superior direito para aumentar o tamanho da fonte.",
        "como ativar o alto contraste": "Clique no botão 'Ativar Alto Contraste' no canto superior direito para ativar o modo de alto contraste.",
    };

    helpButton.addEventListener('click', function () {
        const userQuestion = prompt("Como posso te ajudar? Exemplo: 'Como aumentar o texto?'");
        const response = faqs[userQuestion.toLowerCase()] || "Desculpe, não entendi sua pergunta.";
        speakText(response);
    });
});
