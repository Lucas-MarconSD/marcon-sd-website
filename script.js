document.addEventListener('DOMContentLoaded', () => {
    const orcamentoForm = document.getElementById('orcamento-form');

    if (orcamentoForm) {
        orcamentoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Coleta os dados do formulário
            const nome = document.getElementById('form-nome').value;
            const whatsappCliente = document.getElementById('form-whatsapp').value;
            const servico = document.getElementById('form-servico').value;
            const descricao = document.getElementById('form-descricao').value;

            // Número de WhatsApp da sua loja
            const numeroLoja = '5521967652908';

            // Monta a mensagem
            const mensagem = `Olá, Marcon SD! Gostaria de um orçamento.\n\n*Nome:* ${nome}\n*WhatsApp:* ${whatsappCliente}\n*Serviço:* ${servico}\n*Problema:* ${descricao}`;

            // Codifica a mensagem para a URL
            const mensagemCodificada = encodeURIComponent(mensagem);

            // Cria o link do WhatsApp
            const linkWhatsApp = `https://wa.me/${numeroLoja}?text=${mensagemCodificada}`;

            // Abre o link em uma nova aba
            window.open(linkWhatsApp, '_blank');
        });
    }
});