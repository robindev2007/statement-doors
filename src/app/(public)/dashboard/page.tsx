import { Container } from "@/components/reuseables";

export default function DashboardPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          Welcome to your Statement Doors dashboard.
        </p>
      </div>
    </Container>
  );
}
