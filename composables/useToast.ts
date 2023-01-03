import type { Ref } from "vue";

export const useToast = () => {
  // const isVisible = useState("isToastVisible", () => false);
  // return isVisible;

  const toasts = useState("toasts", () => []);

  const addToast = (content) => {
    toasts.value.push(content);
    console.log(toasts.value);
    return toasts;
  };

  const removeToast = (index) => {
    return toasts.value.filter((_x, i) => i === index);
  };

  return {
    toasts,
    addToast,
    removeToast,
  };
};
