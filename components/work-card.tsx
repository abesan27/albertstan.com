import { TypographyMuted, TypographyP } from "@/components/typography";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { WorkExperience } from "@/types";
import Link from "next/link";

const WorkCard = ({ place, role, workFrom, workUntill, description }: WorkExperience) => {
  let title: React.ReactNode;

  if (place.url) {
    title = (
      <Link href={place.url}>
        <span className="hover:underline underline-offset-1">{place.name}</span>
      </Link>
    );
  } else {
    title = <span>{place.name}</span>;
  }

  return (
    <Card className="space-y-4">
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
};

export { WorkCard };
