import Card from "../Cards/Card/Card";


const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Card image="https://ideogram.ai/api/images/direct/6aED-eIPSNCEVWjKtELLQA.jpg" title="Some Assembly Required" price="$25.00" />
      <Card image="https://ideogram.ai/assets/image/lossless/response/eq_Iig4uS-Gw_Fq_tIXpBA" title="Robo-Macross the Story of Jetfire" price="$25.00" />
      <Card image="https://ideogram.ai/api/images/direct/6aED-eIPSNCEVWjKtELLQA.jpg" title="Bees + Bloom" price="$25.00" />
    </div>
  );
};

export default CardGrid;
