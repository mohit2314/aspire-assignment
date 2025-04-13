export function useImage() {
  const getIconUrl = (fileName: string) => {
    return new URL(`../assets/${fileName}`, import.meta.url).href;
  };

  return {
    getIconUrl
  };
}
