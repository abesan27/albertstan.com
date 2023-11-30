import { TypographyP } from "@/components/typography";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { WorkExperience } from "@/types";

const WorkCard = ({ name, role, workFrom, workUntill, description }: WorkExperience) => {
  return (
    <Card className="space-y-4">
      <CardHeader className="pb-0">
        <CardTitle className="-mb-0.5">{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>

      <CardContent>
        <CardDescription>
          {workFrom} - {workUntill}
        </CardDescription>

        <div className="mt-0.5">
          <TypographyP>{description}</TypographyP>
        </div>
      </CardContent>
    </Card>
  );
};

export { WorkCard };
