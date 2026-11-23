import { SHELL } from "./shell";

export default function Page() {
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: SHELL }} />;
}
