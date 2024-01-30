export const isValidLatLngObject = (
  obj: any,
): obj is { lat: number; lng: number } => {
  // Check if obj is an object and has exactly two properties
  if (
    typeof obj !== "object" ||
    obj === null ||
    Object.keys(obj).length !== 2
  ) {
    return false;
  }

  // Check if the properties 'lat' and 'lng' exist
  if ("lat" in obj && "lng" in obj) {
    return true;
  }

  return false;
};
