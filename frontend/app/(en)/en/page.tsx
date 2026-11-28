import { ProfilePage } from '../../../src/components/profile-page'
import { education, experience, profile } from '../../../src/data/profile'

export default function EnglishHomePage() {
  return (
    <ProfilePage
      locale="en"
      profile={profile.en}
      experience={experience.en}
      education={education.en}
    />
  )
}
