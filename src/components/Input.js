export default function Input({ value, name, placeholder, type, onChange }) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
