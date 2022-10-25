import Chart from "../../components/chart/Chart";
import BarChart from "../../components/barchart/BarChart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData, saleData } from "../../dummyData";
import Map from "../../components/Map/Map";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Ventas por mes" grid dataKey="Promedio"/>

      <BarChart data={saleData} title="Productos más vendidos" grid dataKey="Ventas" xBar = "producto"/>
      <Map title = "HeatMap"></Map>
    </div>
  );
}