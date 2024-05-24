import logo from './logo.svg';
import './App.css';
import Testimonio from './components/Testimonio';

function App(props) {
  return (
    <div className="App">
      <div className='contenedor-principal'>
       <h1>Jugadores destacados en el deporte</h1>
       </div>
       <Testimonio
       nombre="Caitlin Clark"
       imagen="caitin"
       cargo="Pick #1 el draft de la WNBA para el año 2024"
       testimonio="Caitlin Clark es una de las jugadoras de baloncesto universitario más destacadas de los Estados Unidos, conocida por su habilidad excepcional y su capacidad para anotar desde cualquier parte de la cancha. Nacida el 22 de enero de 2002 en Des Moines, Iowa, Clark ha capturado la atención de los aficionados al baloncesto con su estilo de juego dinámico y su impresionante rendimiento en la NCAA."
       />

      <Testimonio
      nombre="Lebron James"
      imagen="Lebron"
      cargo="Lebron Raymond James, consinderado como el mejor jugador de la historia."
      testimonio="Nacido el 30 de diciembre de 1984 en Akron, Ohio, fue muy destacado desde una edad temprana y fue seleccionado primero en el Draft de la NBA de 2003 por los Cleveland Cavaliers. A lo largo de los años, ha jugado para los Miami Heat, regresó a los Cleveland Cavaliers y actualmente juega para los Los Angeles Lakers."
      />

      <Testimonio
      nombre="Shohei Ohtani"
      imagen="ohtani"
      cargo="Considera un jugador que solo veremos cada 100 años."
      testimonio="Shohei Ohtani es una de las estrellas más brillantes del béisbol actual y se destaca por su habilidad excepcional tanto como lanzador como bateador. Nacido el 5 de julio de 1994 en Oshu, Japón, Ohtani ha sido comparado con leyendas del béisbol debido a su capacidad para sobresalir en ambos aspectos del juego, algo que no se veía desde los días de Babe Ruth."

      />
    </div>
  );
}

export default App;
