import { Host } from "./Host";
import { FaHouseCrack, FaStar } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import '../styles/casa.css';

export function Casa({
  name,
  image,
  description,
  numberBedrooms,
  numberGuests,
  price,
  stars,
  superHost
}) {
  return (
    <div className="casaTarjeta">
      <div
        className="casaTarjeta-Imagen fondoImagenCentrada"
        style={{ backgroundImage: `url(${image})` }}
      >
        {superHost && <Host />}
      </div>
      <div className="casaTarjeta-Info">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="casaTarjeta-Especificaciones">
          <div className="iconoInfo">
            <FaHouseCrack className="iconoInfo-Icono" />
            {numberBedrooms} BedRoom
          </div>
          <div className="iconoInfo">
            <IoPerson className="iconoInfo-Icono" />
            {numberGuests} Guests
          </div>
        </div>
        <hr />
        <div className="casaTarjeta-Adicional">
          <p>${price}/night</p>
          <div className="iconoInfo">
            <FaStar className="estrellaIconoNaranja" />
            {stars}
          </div>
        </div>
      </div>
    </div>
  );
}
