export const useCounter = () => {
  const counter = useState<number>("counter", () => 0);
  const doubleCounter = computed(() => counter.value * 2);

  return {
    counter,
    doubleCounter,
  };
};
