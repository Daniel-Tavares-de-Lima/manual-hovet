import { ContentShell } from "@/components/layout/content-shell";
import ManualPostContent from "./content";
import ManualSidebarLayout from "./manual-sidebar-layout";

export default function Page() {
  return (
    <ManualSidebarLayout>
      <ContentShell>
        <ManualPostContent />
      </ContentShell>
    </ManualSidebarLayout>
  );
}
