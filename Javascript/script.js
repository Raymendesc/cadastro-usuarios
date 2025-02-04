const contatos = [];

function salvarContato() {
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const endereco = document.getElementById('endereco').value;

  if (contatos.some(contato => contato.cpf === cpf)) {
    alert('CPF já cadastrado!');
    return;
  }

  const novoContato = { nome, cpf, dataNascimento, endereco };
  contatos.push(novoContato);
  alert('Contato salvo com sucesso!');
  limparFormulario();
}

function listarContatos() {
  const contactContainer = document.getElementById("contactContainer");


  contactContainer.innerHTML = "";


  if (contatos.length === 0) {
      contactContainer.innerHTML = "<p class='text-danger'>Nenhum contato cadastrado.</p>";
      return;
  }

  
  contatos.forEach(usuario => {
      const contatoHTML = `
          <div class="contact-card">
              <h4 class="contact-name" style="color: blue; font-weight: bold;">${usuario.nome}</h4>
              <p><strong>CPF:</strong> ${usuario.cpf}</p>
              <p><strong>Data de Nascimento:</strong> ${usuario.dataNascimento}</p>
              <p><strong>Endereço:</strong> ${usuario.endereco}</p>
          </div>
      `;
      contactContainer.innerHTML += contatoHTML;
  });
}


function buscarPorCPF() {
  const cpf = prompt('Digite o CPF para buscar:');
  const contato = contatos.find(contato => contato.cpf === cpf);

  if (contato) {
    alert(`Contato encontrado:\nNome: ${contato.nome}\nCPF: ${contato.cpf}\nData de Nascimento: ${contato.dataNascimento}\nEndereço: ${contato.endereco}`);
  } else {
    alert('Contato não encontrado.');
  }
}


function excluirPorCPF() {
  const cpf = prompt('Digite o CPF para excluir:');
  const index = contatos.findIndex(contato => contato.cpf === cpf);

  if (index !== -1) {
    contatos.splice(index, 1);
    alert('Contato excluído com sucesso!');
  } else {
    alert('Contato não encontrado.');
  }
}


function limparFormulario() {
  document.getElementById('cadastroForm').reset();
}


document.getElementById('btnSalvar').addEventListener('click', salvarContato);
document.getElementById('btnListar').addEventListener('click', listarContatos);
document.getElementById('btnBuscar').addEventListener('click', buscarPorCPF);
document.getElementById('btnExcluir').addEventListener('click', excluirPorCPF);

