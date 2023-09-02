import  ChangeCounter  from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Home = () => {
  const {counter} = useCounterContext()

  const { color, dispatch } = useTitleColorContext()

  // ALTERANDO STATE COMPLEXO
  const setTitleColor = (color) => {
    dispatch({type: color});
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      {/* alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>AZUL</button>
      </div>
    </div>
  )
}

export default Home