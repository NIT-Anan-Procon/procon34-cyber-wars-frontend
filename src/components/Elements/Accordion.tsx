type AccordionProps= {
  summary: string;
  details: React.ReactElement;
};

export const Accordion= ({ summary, details }: AccordionProps) => {
  return (
    <details>
      <summary>{ summary }</summary>
      { details }
    </details>
  );
};