interface QuantitySelectorProps {
  quantity: number;
  onChange: (delta: number) => void;
}

const QuantitySelector = ({quantity, onChange}: QuantitySelectorProps) => (
  <div className="text-xs md:text-lg">
    QUANTITY:
    <div className="inline-block w-16 px-1 ml-3 border rounded-xl">
      <div className="flex justify-around">
        <button aria-label="Decrement quantity" onClick={() => onChange(-1)}>
          -
        </button>
        <span>{quantity}</span>
        <button aria-label="Increment quantity" onClick={() => onChange(1)}>
          +
        </button>
      </div>
    </div>
  </div>
);

export default QuantitySelector;
