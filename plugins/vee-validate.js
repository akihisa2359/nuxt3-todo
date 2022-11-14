import { configure } from "vee-validate";

export default defineNuxtPlugin((nuxtApp) => {
  const messages = {
    required: (field) => `必須です`,
    hoge: (field) => `${field}はhogehogeです`,
  };
  configure({
    generateMessage: (context) => {
      return messages[context.rule.name](context.field);
    },
  });
});
