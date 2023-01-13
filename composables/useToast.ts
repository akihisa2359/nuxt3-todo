import type { Ref } from "vue";

enum TYPE {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  DEFAULT = "default",
}

export const useToast = () => {
  const toasts = useState("toasts", () => []);

  // const removeToast = (id) => {
  //   toasts.value = toasts.value.filter((x) => x.id !== id);
  //   return toasts;
  // };

  const toast = (content: string, type: TYPE): string => {
    const id = String(Date.now());
    toasts.value.push({ id: Date.now(), content, type });
    return id;
  };

  toast.get = () => {
    return toasts;
  };

  toast.remove = (id) => {
    toasts.value = toasts.value.filter((x) => x.id !== id);
    return toasts;
  };

  toast.success = (content: string) => {
    toast(content, TYPE.SUCCESS);
  };

  toast.error = (content: string) => {
    toast(content, TYPE.ERROR);
  };

  return toast;
  // return {
  //   toast,
  //   toasts,
  //   removeToast,
  // };
};
