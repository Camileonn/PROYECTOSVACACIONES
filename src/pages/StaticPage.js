import '../assets/styles/static.css';
import rickMortyImage from '../assets/img/rickmortycode.avif';


const StaticPage = () => {
  return (
    <div className="static-page">
      <section className="hero">
        <div className="hero-img"></div>
        <div className="hero-text">
          <a href="/" className="back-button">← Volver</a>
          <h1>Rick y Morty aprenden a programar</h1>
        </div>
      </section>

      <section className="content">
        <p>
          En un intento por conquistar nuevas dimensiones digitales, Rick ha decidido enseñar a Morty los fundamentos de la programación. Desde JavaScript hasta Inteligencia Artificial, el dúo más caótico del multiverso se ha inscrito en un curso intensivo de desarrollo web.
        </p>

        <p>
          Por supuesto, nada sale como estaba planeado. En su primer intento por hacer un "Hola Mundo", Rick accidentalmente abrió un portal a una dimensión hecha enteramente de etiquetas HTML.
        </p>

        <ul>
          <li>Morty se perdió intentando entender promesas en JavaScript.</li>
          <li>Rick creó una IA que se volvió consciente y fundó su propia startup.</li>
          <li>El Sr. Meeseeks ahora da soporte técnico.</li>
        </ul>

        <div className="center-image">
        <img src={rickMortyImage} alt="Rick y Morty programando" />
        </div>

        <p>
          Esta serie de aventuras serán documentadas semanalmente en el nuevo blog interdimensional de programación. ¡Prepárate para aprender con ellos (o al menos reírte mientras lo intentan)!
        </p>
      </section>
    </div>
  );
};

export default StaticPage;
