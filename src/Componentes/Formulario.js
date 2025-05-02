import '../assets/styles/buscar.css';

const Formulario = ({ filters, handleChange, handleSubmit }) => {
  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={filters.name} onChange={handleChange} />
      <select name="status" value={filters.status} onChange={handleChange}>
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <input type="text" name="species" placeholder="Species" value={filters.species} onChange={handleChange} />
      <input type="text" name="type" placeholder="Type" value={filters.type} onChange={handleChange} />
      <select name="gender" value={filters.gender} onChange={handleChange}>
        <option value="">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Formulario;