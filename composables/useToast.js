export const useToast = () => {
  const isVisible = useState("isToastVisible", () => false);
  return isVisible;
};
