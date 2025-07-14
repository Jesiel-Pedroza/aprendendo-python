function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const textToCopy = codeElement.textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Código copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}