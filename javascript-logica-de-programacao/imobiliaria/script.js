const imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Bem-vindo(a) ao Cadastro de Imóveis!\n" +
    "Total de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      imovel.quartos = prompt("Quantos quartos possuem o imóvel?")
      imovel.banheiros = prompt("Quantos banheiros possuem o imóvel?")
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      const confirmacao = confirm(
        "Salvar este imóvel? \n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui garagem? " + imovel.garagem
      )

      if (confirmacao) {
        imoveis.push(imovel)
        alert("Imóvel salvo com sucesso!")
      } else {
        alert("Voltando ao menu...")
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanehrios: " + imoveis[i].banheiros +
          "\nPossui garagem? " + imoveis[i].garagem
        )
      }
      break;
    case "3":
      alert("Encerrando...")
      break;
    default:
      alert("Opção inválida.")
  }
} while (opcao !== "3")