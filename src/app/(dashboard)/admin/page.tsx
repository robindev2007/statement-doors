import { Container } from "@/components/reuseables";

export default function AdminPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          Welcome to the Statement Doors administration dashboard.
        </p>
      </div>
    </Container>
  );
}
