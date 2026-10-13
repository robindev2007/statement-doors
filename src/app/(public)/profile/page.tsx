import { Container } from "@/components/reuseables";

export default function ProfilePage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground text-sm">
          Manage your personal profile and preferences.
        </p>
      </div>
    </Container>
  );
}
