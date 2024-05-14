import { QRCard } from "@/qr-generator/components";

export default function QRGeneratorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 text-gray-800 dark:text-white">
      <QRCard />
    </main>
  );
}