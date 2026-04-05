import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Impact } from './components/Impact';
import { GetInvolved } from './components/GetInvolved';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full bg-white">
      <Hero />
      <Mission />
      <Impact />
      <GetInvolved />
      <Footer />
    </div>
  );
}
