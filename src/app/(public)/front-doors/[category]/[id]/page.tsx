import { H1, Muted } from "@/components/ui/typography";

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function FrontDoorDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;
  const categoryTitle = formatTitle(category);
  const itemTitle = formatTitle(id);

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center p-6 text-center">
      <Muted className="text-sm font-semibold tracking-wider uppercase">
        {categoryTitle} Front Doors
      </Muted>
      <H1 className="mt-2">{itemTitle}</H1>
    </div>
  );
}
