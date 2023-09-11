import Header from '@/components/Header';
import QA from '@/components/QA';
import Service from '@/components/Service';
import About from '@/components/About';
import QualitiesPressentation from '@/components/QualitiesPresentation';
import ClientsDisplay from '@/components/ClientsDisplay';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Header/>
      <QA/>
      <Service/>
      <About/>
      <QualitiesPressentation/>
      <ClientsDisplay/>
      <Footer/>
    </main>
  )
}
