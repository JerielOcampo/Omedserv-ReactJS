import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cdn.discordapp.com/attachments/1024265394376163328/1052829012059246592/jblmrh.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Jose B. Lingat (JBL)</span>
        <span className="fpCity">San Fernando, Pampanga</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cdn.discordapp.com/attachments/1024265394376163328/1052829075279990845/2-OFW-Hospital.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">OFW Hospital</span>
        <span className="fpCity">3JJP+5X2, San Fernando, Pampanga</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cdn.discordapp.com/attachments/1024265394376163328/1052829158046191666/San_Fernando_OLMCMC.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Our lady of Mt. Carmel</span>
        <span className="fpCity">3JWF+CPH, Km.78 Mc. Arthur Highway Brgy, Saguin City of San Fernando, 2000 Pampanga</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cdn.discordapp.com/attachments/1024265394376163328/1052834484397027408/1200px-JfArch9662PampangaMorasdelaPazfvf_22.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Manabat Maternity & General Hospital</span>
        <span className="fpCity">2P73+HXV, MacArthur Hwy, San Fernando, Pampanga</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
