import { TypographyMuted, TypographyP } from "@/components/typography";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { WorkExperience } from "@/types";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const WorkCard = ({ place, role, post, workFrom, workUntill, description }: WorkExperience) => {
  let title: React.ReactNode;

  if (place.url) {
    title = (
      <Link className="group flex flex-row items-center" href={place.url}>
        <span className="group-hover:underline underline-offset-1">{place.name}</span>

        <ExternalLinkIcon className="h-3.5 w-3.5 ml-1 invisible group-hover:visible" />
      </Link>
    );
  } else {
    title = <span>{place.name}</span>;
  }

  const card: React.ReactNode = (
    <Card className={cn("space-y-4", post && "hover:shadow transition ease-in-out duration-300")}>
      <CardHeader className="pb-0">
        <CardTitle className="-mb-1">{title}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-0">
        <TypographyMuted>
          {workFrom} - {workUntill}
        </TypographyMuted>

        <TypographyP>{description}</TypographyP>
      </CardContent>
    </Card>
  );

  return (
    <>
      {post ? (
        <div>
          <Link href={post}>{card}</Link>
        </div>
      ) : (
        <div>{card}</div>
      )}
    </>
  );
};

export { WorkCard };
