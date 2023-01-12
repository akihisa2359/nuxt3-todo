import type { Ref } from "vue";

enum TYPE {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  DEFAULT = "default",
}

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

  const toast = (content: string, type: TYPE): string => {
    const id = String(Date.now());
    toasts.value.push({ id: Date.now(), content, type });
    return id;
  };

  toast.success = (content: string) => {
    toast(content, TYPE.SUCCESS);
  };

  return {
    toast,
    toasts,
    addToast,
    removeToast,
  };
};
