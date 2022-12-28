export const useCounter = () => {
  const counter = useState("counter", () => 0);
  return counter;
};
