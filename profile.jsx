// import React from 'react';
// import './PhotoProfile.css'; // Import file CSS

// const PhotoProfile = () => {
//   return (
//     <div className="profile-container">
//       <img
//         src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.pngtree.com%2Ffreebackground%2Fabstract-3d-graffiti-of-human-face_2250004.html&psig=AOvVaw3pwq-mBYGrSSmRxO3lsETJ&ust=1695347473897000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJiNytHLuoEDFQAAAAAdAAAAABAE"
//         alt="Profil Anda"
//         className="profile-image"
//       />
//       <h2 className="profile-name">Rizki</h2>
//       <p className="profile-description">Deskripsi Profil Anda</p>
//     </div>
//   );
// };

// export default PhotoProfile;


import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './PhotoProfile.css';

const Profile = (props) => {
  const { name, jobTitle, age, address, email, bio, profileImage } = props;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={profileImage}
          alt="Foto Profil Anda"
          className="profile-image"
        />
        <h1 className="profile-name">{name}</h1>
        <p className="profile-title">{jobTitle}</p>
      </div>
      <div className="profile-details">
        <div className="profile-info">
          <p>
            <strong>Umur:</strong> {age} tahun
          </p>
          <p>
            <strong>Alamat:</strong> {address}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
        <div className="profile-bio">
          <p>
            <strong>Tentang Saya:</strong>
          </p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

// Definisi PropTypes untuk memvalidasi properti yang diberikan
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
};

export default Profile;
