'use client';

import { useState } from 'react';
import Image from 'next/image';

type TabKey = 'mobile' | 'web' | 'infra' | 'ai' | 'iot';

const tabs: { id: TabKey; label: string }[] = [
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web Dev' },
  { id: 'infra', label: 'Infra AWS' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'iot', label: 'IoT' },
];

function MobileTab() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Mobile Development</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="text-gray-700 mb-4">
            Pengalaman saya dalam pengembangan aplikasi mobile menggunakan React Native dan Flutter.
            Saya telah membangun beberapa aplikasi untuk platform iOS dan Android, termasuk aplikasi e-commerce
            dan sosial media.
          </p>
          <p className="text-gray-500 mb-4">
            Proyek utama: Aplikasi tracking kesehatan dengan integrasi wearables.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>React Native untuk cross-platform development</li>
            <li>Flutter untuk UI yang smooth</li>
            <li>Integrasi dengan REST APIs</li>
            <li>Push notifications</li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="https://via.placeholder.com/400x300?text=Mobile+App+Screenshot"
            alt="Mobile App"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function WebTab() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="text-gray-700 mb-4">
            Sebagai web developer, saya ahli dalam React, Next.js, dan Node.js.
            Saya telah membuat berbagai website responsif dan aplikasi web untuk klien enterprise.
          </p>
          <p className="text-gray-500 mb-4">
            Proyek utama: Platform e-learning dengan real-time collaboration.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Next.js untuk SSR dan SSG</li>
            <li>React untuk komponen interaktif</li>
            <li>Node.js backend dengan Express</li>
            <li>Database integration (MongoDB, PostgreSQL)</li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="https://via.placeholder.com/400x300?text=Web+App+Dashboard"
            alt="Web App"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function InfraTab() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Infrastructure AWS</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="text-gray-700 mb-4">
            Pengalaman dalam mengelola infrastruktur cloud menggunakan AWS services.
            Saya telah mendesain dan mengimplementasikan arsitektur cloud yang scalable dan secure.
          </p>
          <p className="text-gray-500 mb-4">
            Proyek utama: Migrasi legacy system ke microservices di AWS.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>EC2 untuk compute instances</li>
            <li>S3 dan CloudFront untuk storage dan CDN</li>
            <li>Lambda untuk serverless functions</li>
            <li>RDS dan DynamoDB untuk databases</li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="https://via.placeholder.com/400x300?text=AWS+Architecture"
            alt="AWS Infra"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function AiTab() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">AI/ML</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="text-gray-700 mb-4">
            Eksplorasi dalam machine learning dan AI, termasuk penggunaan TensorFlow dan Python
            untuk proyek-proyek prediktif dan computer vision.
          </p>
          <p className="text-gray-500 mb-4">
            Proyek utama: Sistem rekomendasi berbasis ML untuk e-commerce.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>TensorFlow dan PyTorch untuk model ML</li>
            <li>Computer vision dengan OpenCV</li>
            <li>NLP dengan BERT dan transformers</li>
            <li>MLOps dengan Kubeflow</li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="https://via.placeholder.com/400x300?text=AI+Model+Visualization"
            alt="AI/ML"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function IotTab() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">IoT</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="text-gray-700 mb-4">
            Pengembangan perangkat IoT menggunakan Raspberry Pi, Arduino, dan protokol komunikasi
            seperti MQTT. Saya telah membangun sistem monitoring dan kontrol jarak jauh.
          </p>
          <p className="text-gray-500 mb-4">
            Proyek utama: Smart home system dengan sensor dan actuator.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Raspberry Pi dan Arduino untuk prototyping</li>
            <li>MQTT untuk komunikasi device-to-cloud</li>
            <li>Sensor integration (temperature, motion, etc.)</li>
            <li>Real-time data processing</li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="https://via.placeholder.com/400x300?text=IoT+Device+Network"
            alt="IoT"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabKey>('mobile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'mobile':
        return <MobileTab />;
      case 'web':
        return <WebTab />;
      case 'infra':
        return <InfraTab />;
      case 'ai':
        return <AiTab />;
      case 'iot':
        return <IotTab />;
      default:
        return <MobileTab />;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {renderTabContent()}
    </div>
  );
}