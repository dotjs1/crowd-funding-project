import React, { useState } from 'react';
import projectData from './Projectdatalist';
import Filterbtn from './Filterbtn';
import Profile from './Profile';
import Projects from './Projects';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faCalendar } from '@fortawesome/free-solid-svg-icons';

const Projectscomponent = () => {
  const popularSearch = [
    { id: 1, name: 'TechnologyProjects' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'Designinterior' },
  ];

  const buttonsname = [
    { id: 1, Button: 'All Projects' },
    { id: 2, Button: 'Technology' },
    { id: 3, Button: 'Medical' },
    { id: 4, Button: 'Fashion' },
    { id: 5, Button: 'Business' },
    { id: 6, Button: 'Finance' },
  ];

  const [value, setValue] = useState('');
  const [isclicked, setclick] = useState(null);
  const [fvalue, setfValue] = useState('');

  const onChange = (e) => setValue(e.target.value);

  const onClick = (id, category) => {
    setclick(id);
    setfValue(category === 'All Projects' ? '' : category);
  };

  const filteredProjects = projectData.filter((data) =>
    (value === '' || data.name.toLowerCase().includes(value.toLowerCase())) &&
    (fvalue === '' || data.category.toLowerCase().includes(fvalue.toLowerCase()))
  );

  return (
    <>
      {/* Search Bar */}
      <Projects onChange={onChange} value={value} />

      {/* Main Section */}
      <div className="projects_div p-3 container">
        {/* Popular Searches */}
        <div className="text-center mb-4 d-flex flex-wrap justify-content-center align-items-center gap-3">
          <h5 className="mb-0">Popular Search:</h5>
          {popularSearch.map((search) => (
            <p
              key={search.id}
              style={{ color: 'green', cursor: 'pointer', marginBottom: 0 }}
              onClick={() => setValue(search.name)}
            >
              {search.name}
            </p>
          ))}
        </div>

        {/* Filter Buttons & Dropdown */}
        <div className="filterbtn mb-4 d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div className="filtersbtns d-flex flex-wrap gap-2">
            {buttonsname.map((btn) => (
              <Filterbtn
                key={btn.id}
                onClick={() => onClick(btn.id, btn.Button)}
                value={fvalue}
                className={`btn btn-${isclicked === btn.id ? '' : 'outline-'}success`}
                Buttons={btn.Button}
              />
            ))}
          </div>

          <div>
            <select className="form-select" name="Categories">
              <option value="apple">Newest</option>
              <option value="banana">Oldest</option>
              <option value="cherry">Modify By Date</option>
            </select>
          </div>
        </div>

        {/* Projects Container */}
        <div className="projects_container row d-flex flex-wrap justify-content-left g-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((data) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 " key={data.id}>
                <div className="project_data p-1 h-100 border rounded d-flex flex-column ">
                  <img className="img-fluid mb-3 rounded" src={data.image} alt={data.name} />

                  <div className="funding_data flex-grow-1">
                    <h6 className="text-success">{data.category}</h6>
                    <h5>{data.name}</h5>
                    <p className="text-muted ">{data.about}</p>

                    <h6 className="text-success">
                      <FontAwesomeIcon icon={faCoins} className="me-2" />
                      ₹{data.remainingTarget} Raised
                    </h6>

                    <h6>
                      <FontAwesomeIcon icon={faCalendar} className="me-2" />
                      {data.targetDays} Days Left
                    </h6>
                  </div>

                  <div className="mt-3 d-flex flex-wrap gap-2">
                    <button className="btn btn-success flex-grow-1">Fund Now</button>
                    <button className="btn btn-primary flex-grow-1">See Details</button>
                  </div>
 <div className='funding_data'>
                  <Profile
                    Name={data.fundraiserName}
                    prcampain={data.previousCampaigns}
                    Address={data.location}
                  />
                     </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center mt-5">
              <p style={{ fontSize: '24px' }}>
               🙁 No Data Found
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projectscomponent;
