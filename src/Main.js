import React, { useState } from 'react';
import './main.css';

// import { FaUserCircle, FaHome, FaCog, FaBell } from 'react-icons/fa';
import photo from './photos/Logo.svg'
import vec from './photos/Vector.svg'
import vec2 from './photos/Vector2.svg'
import vec3 from './photos/Vector3.svg'
import vec4 from './photos/Vector5.svg'
import { useNavigate } from "react-router-dom";
// import vec5 from './photos/Vector.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
function Main() {
  const [activityType, setActivityType] = useState('');
  const [tier, setTier] = useState('');
  const [activityName, setActivityName] = useState('');
  const [description, setDescription] = useState('');
  const [activities, setActivities] = useState([]);
  const [warning, setWarning] = useState(false);





  const handleSubmit = (e) => {
    e.preventDefault();
    if (activityType && tier && activityName && description) {
      const newActivity = {
        activityType,
        tier,
        activityName,
        description,
      };
      setActivities([newActivity, ...activities]);
      setActivityType('');
      setTier('');
      setActivityName('');
      setDescription('');
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  return (
    

 <div className="App">


<div className="sidebar">

    <img className='logo' src={photo} alt="logo" width={100} height={100} />
   
    {/* <button><a href="/about">About</a></button> */}
  <ul>
    
    <li> <img className='logo' src={vec} alt="logo" width={20} height={20} /><i ></i><Link to="/dash" className='logo'>Dashboard</Link></li>

    <li><img className='logo' src={vec2} alt="logo" width={20} height={20} /><i ></i> <Link to="/" className='logo'>Profile</Link></li>
    <li><img className='logo' src={vec3} alt="logo" width={20} height={20} /><i ></i> <Link to="/dash" className='logo'>Recommendations</Link></li>
    <li> <img className='logo' src={vec} alt="logo" width={20} height={20} /><i ></i><Link to="/dash" className='logo'>Catalog</Link></li>

    <li><img className='logo' src={vec2} alt="logo" width={20} height={20} /><i ></i><Link to="/dash" className='logo'> Saved</Link></li>
    <li><img className='logo' src={vec3} alt="logo" width={20} height={20} /><i ></i> <Link to="/dash" className='logo'>Applications</Link></li>
    <li><img className='logo' src={vec} alt="logo" width={20} height={20} /><i ></i> <Link to="/dash" className='logo'>Learning platform</Link></li> 
     </ul>
  </div>
      
<div className="navbar">
  <ul>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Useful Resources</a></li>
    <li><a href="#">Eng/Rus</a></li>
    <li><a href="#">Photo</a></li>
  </ul>
</div>


<div className="container">
<h2>Profile</h2>
      <div className="profile">
        
        <form>
          <h6 className='type'>Name</h6>
        <div className="box">Ivanov</div>
        <h6 className='type'>Surname</h6>
      <div className="box">Ivan</div>
        </form>
      </div>

      <h3>Demographics</h3>
      <div className="demographics">
      
        <p>Gender:Male</p>
        <p>Coutry: Kazakhstan</p>
        <p>City: Astana</p>
      </div>




      <h3>Activities</h3>
      <div className="activities">
     
      <form onSubmit={handleSubmit}>
        <h6 className='type'>Activity Type</h6>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="Extracurriculars"
              checked={activityType === 'Extracurriculars'}
              onChange={(e) => setActivityType(e.target.value)}
            />
            Extracurriculars
          </label>
          <label>
            <input
              type="radio"
              value="Honors"
              checked={activityType === 'Honors'}
              onChange={(e) => setActivityType(e.target.value)}
            />
            Honors
          </label>
        </div>
        <label>
          <h6 className='type'>Tier:</h6>
          <select
          className="box"
            value={tier}
            onChange={(e) => setTier(e.target.value)}
          >
            <option value="">Please select an option</option>
            <option value="1-Exceptional">1-Exceptional</option>
            <option value="2-Exceptional">2-Exceptional</option>
            <option value="3-Exceptional">3-Exceptional</option>
          </select>
        </label>
        <label>
          <h6 className='type'>Activity Name</h6>
          <input className="box2"
             placeholder='Enter a name of the activity'
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
          />
        </label>
        <label>
        <h6 className='type'>Description</h6>
          
          <textarea
          className="box2"
          placeholder='Enter a description of the activity'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button className='addactvity' type="submit">+ Add Activity</button>
        {warning && <p className="warning">Please fill in all fields</p>}
      </form>

     
    </div>


    
    {activities.map((activity, index) => (
      <form>
        <div key={index} className="activities">
          <h6 className='type'>Activity type</h6>
        <div  className="box">{activity.activityType}</div>
        <h6 className='type'>Tier</h6>
        <div  className="box">{activity.tier}</div>
        <h6 className='type'>Activity Name</h6>
        <div  className="box">{activity.activityName}</div>
        <h6 className='type'>Description</h6>
        <div  className="box">{activity.description}</div>
        <></>
       </div>
   </form>
))}

     
    </div>
    </div>
);
}

//---------------------------------------------------------------

export default Main;