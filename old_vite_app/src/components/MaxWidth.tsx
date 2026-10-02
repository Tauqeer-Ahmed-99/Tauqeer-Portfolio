import { cn } from "@/lib/utils";
import React, { LegacyRef } from "react";

const MaxWidth = React.forwardRef<
  {},
  { id?: string; className?: string } & React.PropsWithChildren
>((props, ref) => (
  <div
    ref={ref as LegacyRef<HTMLInputElement>}
    id={props.id}
    className={cn("max-w-7xl mx-auto p-4", props.className)}
  >
    {props.children}
  </div>
));

export default MaxWidth;
