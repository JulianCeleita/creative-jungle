import Card from "./Card";

export const CardList = () => {
  const cards = [1];
  return (
    <section>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5 mb-16">
        <div>
        {cards.map((card, index) => {
          return <Card key={index} id={0} title={"Test Test Test Test Test Test Test Test Test vTest Test Test Test Test Test Test "} body={"Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test Body Test "} />;
        })}
        </div>
        <div>
        {cards.map((card, index) => {
          return <Card key={index} id={0} title={"Test"} body={"Body Test"} />;
        })}
        </div>
        <div>
        {cards.map((card, index) => {
          return <Card key={index} id={0} title={"Test"} body={"Body Test"} />;
        })}
        </div>
        <div>
        {cards.map((card, index) => {
          return <Card key={index} id={0} title={"Test"} body={"Body Test"} />;
        })}
        </div>
        <div>
        {cards.map((card, index) => {
          return <Card key={index} id={0} title={"Test"} body={"Body Test"} />;
        })}
        </div>
        <div>
        {cards.map((card, index) => {
          return <Card key={index} id={0} title={"Test"} body={"Body Test"} />;
        })}
        </div>
        <div>
        {cards.map((card, index) => {
          return <Card key={index} id={0} title={"Test"} body={"Body Test"} />;
        })}
        </div>
        <div>
        {cards.map((card, index) => {
          return <Card key={index} id={0} title={"Test"} body={"Body Test"} />;
        })}
        </div>
      </div>
    </section>
  );
};

export default CardList;
