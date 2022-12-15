import "./specialistList.css";

const SpecialistList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cdn.discordapp.com/attachments/1052595030033956925/1052595936083333170/pngegg.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cardiologists</h1>
          <h2>Heart Doctor</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.discordapp.com/attachments/1024265394376163328/1052596103230525450/3461589.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Pediatrician</h1>
          <h2>Kids Doctor</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.discordapp.com/attachments/1024265394376163328/1052597408791539793/ImageNameHere.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Neurologist</h1>
          <h2>Brain Doctor</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.discordapp.com/attachments/1024265394376163328/1052597959734329394/4006302.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Orthopedic</h1>
          <h2>Bone Doctor</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.discordapp.com/attachments/1024265394376163328/1052598626494459934/29718b6604226552c239c96064d8e2de.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Dermatologist</h1>
          <h2>Skin Doctor</h2>
        </div>
      </div>
    </div>
  );
};

export default SpecialistList;
