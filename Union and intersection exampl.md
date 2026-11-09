# Combining Union and Intersection Types

A common real-world use is modelling users who can be one of several kinds, while all of them share some common fields.

```typescript
type Admin = { role: "admin"; permissions: string[] };
type Guest = { role: "guest"; expiresAt: Date };
type WithId = { id: number; name: string };

type User = (Admin | Guest) & WithId;

function describe(user: User): string {
  if (user.role === "admin") {
    return `${user.name} can ${user.permissions.join(", ")}`;
  }
  return `${user.name} has access until ${user.expiresAt.toDateString()}`;
}

const a: User = { id: 1, name: "Sara", role: "admin", permissions: ["edit", "delete"] };
const g: User = { id: 2, name: "Tom", role: "guest", expiresAt: new Date() };
```

## How it works

- The **union** `Admin | Guest` means a user is *either* an admin *or* a guest.
- The **intersection** `& WithId` means every user must *also* have `id` and `name`.
- TypeScript distributes this into `(Admin & WithId) | (Guest & WithId)`.
- The shared `role` property acts as a discriminant, so after checking `user.role`, TypeScript knows which fields are available.

## Why it's useful

You avoid repeating `id` and `name` in every variant, and you still get type safety. Adding a new user type, such as `Moderator`, only needs one new line in the union, and the shared fields come along automatically.