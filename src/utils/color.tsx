export function booleanString(bool: boolean) {
  if (bool)
    return (
      <span color="green" className="text-green-500">
        true
      </span>
    );
  return (
    <span color="red" className="text-red-500">
      false
    </span>
  );
}
