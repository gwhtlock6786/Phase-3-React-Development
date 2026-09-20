const Stats = ({ totalItemsInCart, subtotal }) => {
  return (
    <section>
      <h2>Current Cart Before Tax</h2>
      <p>Total Items: {totalItemsInCart}</p>
      <p>Pre-tax total: ${subtotal.toFixed(2)}</p>
    </section>
  );
};

export default Stats;
