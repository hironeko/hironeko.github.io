import type * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[0.7rem] font-bold tracking-[0.16em] text-primary uppercase",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
