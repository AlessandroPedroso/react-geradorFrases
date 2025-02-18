import { use, useState } from 'react'

import './App.css'
import logoImg from './assets/logo.png'

function App() {

  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionado] = useState(0);
  
  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Acredite no seu potencial!',
        'Foque, trabalhe, conquiste!',
        'Pequenas ações geram grandes resultados.',
        'Persistência vence o impossível.',
        'Faça acontecer, sem desculpas!',
        'O esforço de hoje é a vitória de amanhã.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Bom dia! Que o dia de hoje seja incrível!',
        'Acorde com gratidão e faça o seu melhor! ',
        'Bom dia! Novos desafios, novas oportunidades!',
        'Que o sol brilhe para você hoje!',
        'Bom dia! Que a energia positiva te acompanhe!',
        'A cada amanhecer, uma nova chance de brilhar!',
        'Bom dia! Que a alegria te guie no dia de hoje!'
      ]
    }
  ]

  function handleSwitchCategory(posicao:number) {
    setCategoriaSelecionado(posicao)
  }

  function gerarFrase() {

    //gerando um numero aleatorio com base no tamanho de frases
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)// 0 até 4
    setTextoFrase(`" ${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img className='logo' src={logoImg} alt="Logo Frases" />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button key={item.id}
            
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}

            onClick={()=>handleSwitchCategory(index)}
            className='category-button'>{item.nome}</button>
          
        ))}
      </section>

      <button onClick={gerarFrase} className='button-frase'>Gerar frases</button>

      {textoFrase !=="" &&  <p className='textoFrase'>{ textoFrase }</p>}

    </div>
  )
}

export default App
