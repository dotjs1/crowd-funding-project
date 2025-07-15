import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
const Profile = ({Name,prcampain,Address}) => {
  return (
    <div className='profile' style={{display:'flex',padding:'10px', border:'1px solid green',borderRadius:'10px'}}>
      <div className='details' style={{ padding:'10px',display:'flex', flexWrap:'wrap',gap:'10px'}}>
         <div className='profile' ><FontAwesomeIcon icon={faUser} style={{fontSize:'20px',padding:'10px',border:'1px solid black',borderRadius:'50%'}} /></div>
        <p style={{textTransform:'capitalize'}}>{Name}</p>
        <p style={{color:'green',fontWeight:'bold',textDecoration:'underline'}}> <FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize:'large'}} /> {prcampain} Campains</p>
        <p style={{textTransform:'capitalize',color:'grey',fontWeight:'bold'}}><FontAwesomeIcon icon={faLocationDot}/> {Address}</p>
      </div>
    </div>
  )
}

export default Profile
