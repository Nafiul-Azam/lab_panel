import { PageHeader } from "../../components/layout/PageHeader";
import { ProfileEditForm } from "../../components/profile/ProfileEditForm";

export function ProfileEditPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Profile Edit"
        subtitle="Update identity, designation, contact info and UI preferences."
      />
      <ProfileEditForm />
    </div>
  );
}
