export default function Select({
  label,
  id,
  error,
  options,
  value,
  renderOption,
  ...props
}) {
  return (
    <>
      {console.log(value)}
      <label className="block text-sm font-bold" htmlFor={id}>
        {label}
      </label>
      <select id={id} name={id} defaultValue={value} {...props}>
        <option value="">-- Select an option --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {renderOption(option)}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </>
  );
}
