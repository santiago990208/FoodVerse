import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total ventas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$12'123.5432</span>
          <span className="featuredMoneyRate">
            +10.4 <ArrowUpward  className="featuredIcon positive"/>
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes anterior</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Trafico del sitio</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">11331</span>
          <span className="featuredMoneyRate">
            +0.2 <ArrowUpward className="featuredIcon positive"/>
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes anterior</span>
      </div>
      
    </div>
  );
}