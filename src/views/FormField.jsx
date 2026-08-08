export default function FormField({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-red-600 mt-1 block">{error}</span>}
    </label>
  );
}
