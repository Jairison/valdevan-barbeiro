document
.getElementById("formulario")
.addEventListener("submit",function(e){

e.preventDefault();

const nome=document.getElementById("nome").value;

const telefone=document.getElementById("telefone").value;

const servico=document.getElementById("servico").value;

const data=document.getElementById("data").value;

const hora=document.getElementById("hora").value;

const obs=document.getElementById("obs").value;

const mensagem=
`Olá! Gostaria de agendar um horário.

👤 Nome: ${nome}

📱 WhatsApp: ${telefone}

💅 Serviço: ${servico}

📅 Data: ${data}

🕒 Horário: ${hora}

📝 Observações: ${obs}`;

const numero="5588997175584"; // coloque seu número

const url=`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

window.open(url,"_blank");

});

function agendarWhatsApp() {

    alert("Clique Aqui e Aguarda a confirmação do seu horário. 💈 Obrigado!");
    

    window.open(
    "https://wa.me/5588997175584?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20agendar%20um%20horário.%20Poderia%20me%20informar%20os%20dias%20e%20horários%20disponíveis?%20",
    "_blank"
);

}

function agendarWhatsApp() {

    // ==========================================
    // NÚMERO DA VALDEVAN BARBEARIA
    // ==========================================

    const numeroWhatsApp = "5588997175584";


    // ==========================================
    // CAPTURANDO OS DADOS
    // ==========================================

    const nome = document.getElementById("nome").value.trim();

    const telefone = document.getElementById("telefone").value.trim();

    const servico = document.getElementById("servico").value;

    const data = document.getElementById("data").value;

    const hora = document.getElementById("hora").value;

    const observacao = document.getElementById("obs").value.trim();


    // ==========================================
    // VALIDAÇÃO DOS CAMPOS
    // ==========================================

    if (nome === "") {

        alert("Por favor, informe seu nome.");

        document.getElementById("nome").focus();

        return;
    }


    if (telefone === "") {

        alert("Por favor, informe seu WhatsApp.");

        document.getElementById("telefone").focus();

        return;
    }


    if (servico === "") {

        alert("Por favor, selecione um serviço.");

        document.getElementById("servico").focus();

        return;
    }


    if (data === "") {

        alert("Por favor, selecione uma data.");

        document.getElementById("data").focus();

        return;
    }


    if (hora === "") {

        alert("Por favor, selecione um horário.");

        document.getElementById("hora").focus();

        return;
    }


    // ==========================================
    // CONVERTER DATA
    // ==========================================

    const partesData = data.split("-");

    const dataFormatada =
        `${partesData[2]}/${partesData[1]}/${partesData[0]}`;


    // ==========================================
    // OBSERVAÇÃO
    // ==========================================

    const observacaoFinal =
        observacao !== ""
            ? observacao
            : "Nenhuma observação informada.";


    // ==========================================
    // MONTANDO A MENSAGEM
    // ==========================================

    const mensagem = `Olá, Valdevan! 👋✂️

Gostaria de solicitar um agendamento.

━━━━━━━━━━━━━━━━━━
📋 *DADOS DO CLIENTE*
━━━━━━━━━━━━━━━━━━

👤 *Nome:* ${nome}

📱 *WhatsApp:* ${telefone}

━━━━━━━━━━━━━━━━━━
✂️ *DADOS DO AGENDAMENTO*
━━━━━━━━━━━━━━━━━━

💈 *Serviço:* ${servico}

📅 *Data:* ${dataFormatada}

⏰ *Horário:* ${hora}

📝 *Observações:*
${observacaoFinal}

━━━━━━━━━━━━━━━━━━

Aguardo a confirmação do meu horário. 😊

Obrigado! ✂️`;


    // ==========================================
    // CODIFICAR MENSAGEM
    // ==========================================

    const mensagemCodificada =
        encodeURIComponent(mensagem);


    // ==========================================
    // LINK DO WHATSAPP
    // ==========================================

    const linkWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;


    // ==========================================
    // ABRIR WHATSAPP
    // ==========================================

    window.open(linkWhatsApp, "_blank");

}