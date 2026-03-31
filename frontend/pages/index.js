export default function Home() {
  return (
    <main style={{fontFamily:'Arial', background:'#0f172a', color:'white', padding:'40px'}}>
      <h1>Diamond Piscinas</h1>
      <p>Piscinas de alto padrão em Juatuba - MG</p>

      <a href="https://wa.me/SEU_NUMERO_AQUI">
        <button style={{padding:'10px 20px', marginTop:'20px'}}>Solicitar orçamento</button>
      </a>

      <h2 style={{marginTop:'40px'}}>Catálogo</h2>
      <ul id="produtos"></ul>

      <script dangerouslySetInnerHTML={{__html: `
        fetch('http://localhost:3001/produtos')
          .then(res => res.json())
          .then(data => {
            const ul = document.getElementById('produtos');
            data.forEach(p => {
              const li = document.createElement('li');
              li.innerText = p.nome + ' - R$ ' + p.preco;
              ul.appendChild(li);
            });
          });
      `}} />
    </main>
  )
}