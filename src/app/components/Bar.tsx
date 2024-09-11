import Link from "next/link";

export default function Bar() {
  return (
    <div className="container flex flex-col gap-10">
      <h2 className="text-5xl font-bold">Benvenuto al bar</h2>
      <p>Non c’è niente di più piacevole e rilassante che sedersi al bar con un bicchiere in mano, mentre il rumore
        del mondo fuori sembra attenuarsi e il tempo sembra rallentare. Ogni sorso della bevanda fredda è un momento
        di pura gioia, ogni chiacchiera con gli amici è un richiamo alla semplicità e alla bellezza delle piccole
        cose. Il bar diventa un rifugio, un luogo dove le preoccupazioni quotidiane si dissolvono e si può
        semplicemente godere del momento, immersi in un’atmosfera di convivialità e serenità.</p>
      <Link href="/" className="bg-blue-600 self-start text-white py-3 px-4 rounded-lg">Torna a casa</Link>
    </div>
  )
}