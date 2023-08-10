interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="container max-w-[650px] space-y-4 my-10">{children}</div>;
};

export { Container };
