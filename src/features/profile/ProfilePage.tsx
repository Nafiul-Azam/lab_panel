import { Link } from "react-router-dom";
import { PageHeader } from "../../components/layout/PageHeader";
import { ProfileSummaryCard } from "../../components/profile/ProfileSummaryCard";

export function ProfilePage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Profile"
        subtitle="Personal information, role assignment, shift and performance summary."
        actions={
          <Link
            to="/profile/edit"
            className="rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Edit Profile
          </Link>
        }
      />
      <ProfileSummaryCard />
    </div>
  );
}
