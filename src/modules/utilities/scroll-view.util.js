export const scrollView = (depth) => {
  const { scrollTop, clientHeight, scrollHeight } = depth?.currentTarget;

  if (scrollHeight - clientHeight <= scrollTop + 5) {
    return true;
  }
};
