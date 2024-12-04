const CitySelector = ({ handleChange, cityName }) => {
  return (
    <div className="container mb-1 mt-1">
      <div className="card">
        <div className="card-body">
          <select
            className="form-select form-select-sm border-primary"
            value={cityName}
            onChange={(event) => handleChange(event)}
          >
            <option value="">Please Select City</option>
            <option value="istanbul">İstanbul,Türkiye</option>
            <option value="ankara">Ankara,Türkiye</option>
            <option value="izmir">İzmir,Türkiye</option>
            <option value="new-york">New York,ABD</option>
            <option value="london">London,İngiltere</option>
            <option value="tokyo">Tokyo,Japonya</option>
            <option value="paris">Paris,Fransa</option>
            <option value="berlin">Berlin,Almanya</option>
            <option value="moskova">Moskova,Rusya</option>
            <option value="sydney">Sydney,Avustralya</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CitySelector;
