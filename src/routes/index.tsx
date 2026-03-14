import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@mantine/core";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button>123</Button>
    </div>
  );
}
