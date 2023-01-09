import type { Ref } from "vue";

export const useToast = () => {
  // const isVisible = useState("isToastVisible", () => false);
  // return isVisible;

  const toasts = useState("toasts", () => []);

  const addToast = (content) => {
    toasts.value.push({ id: Date.now(), content });
    return toasts;
  };

  const removeToast = (id) => {
    toasts.value = toasts.value.filter((x) => x.id !== id);
    return toasts;
  };

  return {
    toasts,
    addToast,
    removeToast,
  };
};
