type HeaderProps= {
  title: string
}

export const Header= ({ title }: HeaderProps) => {
  return (
    <>{title}</>
  );
}