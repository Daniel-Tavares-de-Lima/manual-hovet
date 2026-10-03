import { ContentShell } from "@/components/layout/content-shell";
import { TeamCard } from '@/components/team/team-card';
import { teamMembers } from '@/lib/data/team-members';

export default function TeamPage() {
  return (
    <ContentShell className="py-12">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </ContentShell>
  );
}
