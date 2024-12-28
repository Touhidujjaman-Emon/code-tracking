export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start packing some Items 👜</em>
      </p>
    );

  const numItems = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? " You got Everything! Ready to go ✈️ "
          : `👜 You have ${numItems} items on your list , and you already packed 
        ${packedItem}(${percentage}%)`}
      </em>
    </footer>
  );
}
