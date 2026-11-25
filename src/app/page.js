import MunirixExperience from '@/components/MunirixExperience';

export default function MunirixWebHomePage() {
  const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL || 'https://client.munirix.net';

  return <MunirixExperience clientUrl={clientUrl} />;
}
