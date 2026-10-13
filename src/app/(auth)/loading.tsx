import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AuthLoading() {
  return (
    <Card className="border-border/50 w-full max-w-120 border shadow-xs">
      <CardHeader className="flex flex-col items-center space-y-2 text-center">
        {/* Title skeleton */}
        <Skeleton className="h-8 w-48 sm:w-64" />
        {/* Description skeleton */}
        <Skeleton className="h-4 w-60 sm:w-72" />
      </CardHeader>
      <CardContent className="space-y-4 pt-2">
        {/* Input field 1 */}
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        {/* Input field 2 */}
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        {/* Options / Checkbox row */}
        <div className="flex items-center justify-between pt-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-24" />
        </div>
        {/* Submit button skeleton */}
        <Skeleton className="mt-2 h-10 w-full rounded-md" />
        {/* Footer link skeleton */}
        <div className="flex justify-center pt-2">
          <Skeleton className="h-4 w-44" />
        </div>
      </CardContent>
    </Card>
  );
}
