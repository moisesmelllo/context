import  ChangeCounter  from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Home = () => {
  const {counter} = useCounterContext()

  const { color, font, background, dispatch } = useTitleColorContext()

  // ALTERANDO STATE COMPLEXO
  const setTitleColor = (botao) => {
    dispatch({type: botao});
    console.log(botao);
  }

  return (
    <div>
      <h1 style={{color: color, fontFamily: font, backgroundColor: background}}>Home</h1>
      {console.log(color)}
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      {/* alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("botao1")}>Vermelho</button>
        <button onClick={() => setTitleColor("botao2")}>AZUL</button>
      </div>
    </div>
  )
}

export default Home