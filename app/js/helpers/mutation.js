export default function Mutation(el) {
  const target = el;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      console.log(mutation);
    });
  });
  return {
    observe() {
      const config = {
        attributes: true,
        childList: true,
        characterData: true,
      };
      observer.observe(target, config);
    },
    disconnect() {
      observer.disconnect();
    },
  };
}
