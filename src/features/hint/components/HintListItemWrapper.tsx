type HintListItemWrapperProps= {
  icon: React.ReactElement;
  children: React.ReactNode;
};

export const HintListItemWrapper= ({ icon ,children }: HintListItemWrapperProps ) => {
  return (
    <>
      { children }
    </>
  );
};