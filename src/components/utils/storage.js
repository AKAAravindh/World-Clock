export const load = (key, fallback) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
};

export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
