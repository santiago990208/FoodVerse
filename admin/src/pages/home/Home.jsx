import Chart from "../../components/chart/Chart";
import BarChart from "../../components/barchart/BarChart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData, saleData } from "../../dummyData";
import MapView from "../../components/map/MapView";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Ventas por mes" grid dataKey="Promedio"/>
      <BarChart data={saleData} title="Productos más vendidos" grid dataKey="Ventas" xBar = "producto"/>
      <MapView title = "Heatmap"/>
    </div>
  );
}