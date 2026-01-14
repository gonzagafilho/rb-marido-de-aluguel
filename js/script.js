document.getElementById("formOrcamento").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `
🔧 *SOLICITAÇÃO DE ORÇAMENTO*

👤 Nome: ${nome}
📞 Telefone: ${telefone}
📧 E-mail: ${email || "Não informado"}

🛠 Serviço solicitado:
${mensagem}

📍 Brasília e entorno
`;

  const whatsapp = "5561920044976"; // SEU WHATSAPP
  const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
});
