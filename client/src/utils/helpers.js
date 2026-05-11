export function money(amount) {
  return `Rs. ${Number(amount || 0).toLocaleString("en-IN")}`;
}

export function getSaved(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

// Helper: append Unsplash optimisation params if it's an Unsplash URL
export function optimiseImage(url, w = 400, q = 70) {
  if (!url) return url;
  try {
    const u = new URL(url);
    if (u.hostname.includes("unsplash.com")) {
      u.searchParams.set("auto", "format");
      u.searchParams.set("fit", "crop");
      u.searchParams.set("q", String(q));
      u.searchParams.set("w", String(w));
      return u.toString();
    }
  } catch (_) {}
  return url;
}
