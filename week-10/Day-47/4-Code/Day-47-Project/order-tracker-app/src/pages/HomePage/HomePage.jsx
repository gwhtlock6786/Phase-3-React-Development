import Stats from "../../components/Stats/Stats";
const HomePage = ({ orders }) => {
  return (
    <div>
      <Stats orders={orders} />
    </div>
  );
};

export default HomePage;
