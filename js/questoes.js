// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [

  // Questao 01
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> permite(m) que os usuários autentiquem-se em vários aplicativos usando o SSO (logon único).",
    "opcoes": [
      "Selecione uma resposta",
      "Grupos de segurança de aplicativo no Azure",
      "Microsoft Entra ID",
      "Azure Key Vault",
      "Microsoft Defender para Nuvem"
    ],
    "resposta": 2,
    "explicacao": "O Microsoft Entra ID (anteriormente Azure Active Directory) é o serviço de identidade da Microsoft que fornece autenticação única (SSO) para acessar vários aplicativos com uma única credencial, melhorando a segurança e a experiência do usuário.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  }


];
