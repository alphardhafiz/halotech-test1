import HeadUsulanProdiBaru from "../components/HeadUsulanProdiBaru";
import CardTitle from "../components/CardTitle";
import CardDetail from "../components/CardDetail";

const UsulanProdiBaru = () => {
  return (
    <div className="flex-1">
      <HeadUsulanProdiBaru />
      <div className="p-4">
        <CardTitle />
        <CardDetail />
      </div>
    </div>
  );
};

export default UsulanProdiBaru;
