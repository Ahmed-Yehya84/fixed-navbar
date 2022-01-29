import React, { useState } from "react";
import * as FiIcon from "react-icons/fi";

const Header = ({ showLinks }) => {
  const [showFilter, setShowFilter] = useState(false);

  const showfilter = () => setShowFilter(!showFilter);

  const onblur = (e) => {
    e.currentTarget.type = "text";
  };

  const onfocus = (e) => {
    e.currentTarget.type = "date";
  };
  return (
    <div className={showLinks ? "filter-container active" : "filter-container"}>
      <h3>Filter Block</h3>

      {showFilter && (
        <div className="filter-content">
          <div className="top">
            <input
              placeholder="Дата от..."
              className="form-control"
              type="text"
              onBlur={onblur}
              onFocus={onfocus}
              id="date"
            />

            <input
              placeholder="Дата до..."
              className="form-control"
              type="text"
              onBlur={onblur}
              onFocus={onfocus}
              id="date"
            />

            <input
              placeholder="имя клиента"
              className="form-control"
              type="text"
            />

            <input placeholder="телефон" className="form-control" type="tel" />
          </div>
          <div className="bottom">
            <input
              placeholder="Дата от..."
              className="form-control"
              type="text"
              onBlur={onblur}
              onFocus={onfocus}
              id="date"
            />

            <input
              placeholder="Дата до..."
              className="form-control"
              type="text"
              onBlur={onblur}
              onFocus={onfocus}
              id="date"
            />

            <input
              placeholder="имя клиента"
              className="form-control"
              type="text"
            />

            <input placeholder="телефон" className="form-control" type="tel" />
          </div>
        </div>
      )}
      <div class="button">
        <button>
          <FiIcon.FiSettings className="setting-icon" onClick={showfilter} />
        </button>
      </div>
    </div>
  );
};

export default Header;
