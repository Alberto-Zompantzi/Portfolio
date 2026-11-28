import { ProfilePage } from '../../src/components/profile-page'
import { education, experience, profile } from '../../src/data/profile'

export default function SpanishHomePage() {
  return (
    <ProfilePage
      locale="es"
      profile={profile.es}
      experience={experience.es}
      education={education.es}
    />
  )
}
