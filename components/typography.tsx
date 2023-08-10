interface TypographyProps {
  children: React.ReactNode;
}

const TypographyH1 = ({ children }: TypographyProps) => {
  return <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">{children}</h1>;
};

const TypographyH2 = ({ children }: TypographyProps) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
};

const TypographyH3 = ({ children }: TypographyProps) => {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>;
};

const TypographyH4 = ({ children }: TypographyProps) => {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>;
};

const TypographyP = ({ children }: TypographyProps) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

const TypographyBlockquote = ({ children }: TypographyProps) => {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>;
};

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
};
