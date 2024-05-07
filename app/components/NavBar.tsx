import { usePathname, useRouter } from "next/navigation";

import { Icon, IconButton } from "./common";

export function NavBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={`flex flex-wrap px-2.5 ${className}`}>
      <IconButton
        icon={<Icon className="text-xl" icon="palette" />}
        text="Color Palette"
        active={pathname === "/color-palette"}
        onClick={() => router.push("/color-palette")}
      />

      <IconButton
        icon={<Icon className="text-xl" icon="palette" />}
        text="Color Picker"
        active={pathname === "/color-picker"}
        onClick={() => router.push("/color-picker")}
      />

      <div className="grow" />
    </nav>
  );
}
