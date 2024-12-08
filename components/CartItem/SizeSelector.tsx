interface SizeSelectorProps {
  currentSize: string;
  onSizeChange: (size: string) => void;
}

const SizeSelector = ({currentSize, onSizeChange}: SizeSelectorProps) => {
  const sizes = ["S", "M", "L", "XL"];
  const isSelected = (size: string) => currentSize === size;

  return (
    <div className="text-xs md:text-lg">
      SIZE:
      <span className="ml-3">
        {sizes.map((size) => (
          <button
            key={size}
            aria-pressed={isSelected(size)}
            className={`px-2 ${isSelected(size) ? "border rounded-xl" : ""}`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </span>
    </div>
  );
};

export default SizeSelector;
