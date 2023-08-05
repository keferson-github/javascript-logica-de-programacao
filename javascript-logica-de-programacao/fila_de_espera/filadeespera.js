let fila = [];
let opcao = "";

do {
	let pacientes = "";
	for (let i = 0; i < fila.length; i++) {
		pacientes += (i + 1) + "° - " + fila[i] + "\n";
	}

	opcao = prompt(
		"Pacientes: \n" +
		pacientes +
		"\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
	);

	switch (opcao) {
		case "1":
			const novoPaciente = prompt("Qual é o nome do paciente?");
			fila.push(novoPaciente);
			break;
		case "2":
			const pacienteConsultado = fila.shift();
			if (pacienteConsultado) {
				alert(pacienteConsultado + " foi removido da fila")
			} else {
				alert("Não há pacientes na fila de espera!");
			}
			break;
		case "3":
			alert("Encerrando...");
			break;
		default:
			alert("Opção inválida.");
	}
} while (opcao !== "3");
