import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="space-y-5">
      <Button asChild variant="outline">
        <Link href="/">
          <>
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back
          </>
        </Link>
      </Button>

      <>{children}</>
    </div>
  );
}
