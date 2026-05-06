'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import mobile1 from '@/assets/mobile/mobile1.png';
import mobile2 from '@/assets/mobile/mobile2.png';
import mobile3 from '@/assets/mobile/mobile3.jpeg';
import mobile4 from '@/assets/mobile/mobile4.jpeg';
import mobile5 from '@/assets/mobile/mobile5.jpeg';
import exampleImage from '@/assets/example.png';
import web1 from '@/assets/web/web1.png';
import web2 from '@/assets/web/web2.png';
import web3 from '@/assets/web/web3.png';
import web4 from '@/assets/web/web4.png';
import web5 from '@/assets/web/web5.png';
import web6 from '@/assets/web/web6.png';
import iot1 from '@/assets/iot/iot1.jpeg';
import iot2 from '@/assets/iot/iot2.png';
import iot3 from '@/assets/iot/iot3.png';
import iot4 from '@/assets/iot/iot4.png';
import ai1 from '@/assets/ai/ai1.png';
import ai2 from '@/assets/ai/ai2.png';
import ai3 from '@/assets/ai/ai3.png';
import ai4 from '@/assets/ai/ai4.png';
import ai5 from '@/assets/ai/ai5.png';



import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '../_components/Navbar';

const mobileScreens = [
  { src: mobile1, alt: 'Mobile Playstore Deployment' },
  { src: mobile2, alt: 'Mobile App Store iOS Deployment' },
  { src: mobile3, alt: 'Mobile Umrah & Hajj Travel App - 1' },
  { src: mobile4, alt: 'Mobile Umrah & Hajj Travel App - 2' },
  { src: mobile5, alt: 'Mobile Umrah & Hajj Travel App - 3' },
];

const webScreens = [
  { src: web1, alt: 'Web Example 1' },
  { src: web2, alt: 'Web Example 2' },
  { src: web3, alt: 'Web Example 3' },
  { src: web4, alt: 'Web Example 4' },
  { src: web5, alt: 'Web Example 5' },
  { src: web6, alt: 'Web Example 6' },
];

const infraScreens = [
  { src: exampleImage, alt: 'Infra Example 1' },
  { src: exampleImage, alt: 'Infra Example 2' },
  { src: exampleImage, alt: 'Infra Example 3' },
];

const aiScreens = [
  { src: ai1, alt: 'Ecogovern web integration with AWS Bedrock for ESG activity features' },
  { src: ai2, alt: 'AWS Glue ETL jobs' },
  { src: ai3, alt: 'Data exported from AWS Glue jobs' },
  { src: ai4, alt: 'AWS Bedrock knowledge base' },
  { src: ai5, alt: 'AWS Lambda calling the Bedrock knowledge base' },
];

const iotScreens = [
  { src: iot1, alt: 'IoT with ESP32, MQTT' },
  { src: iot2, alt: 'AWS IoT Core Integration' },
  { src: iot3, alt: 'Sneak peak of Arduino IDE' },
  { src: iot4, alt: 'Mobile App integrated with AWS IoT connected to ESP32' },
];

function GalleryPreview({ title, items }: { title: string; items: Array<{ src: StaticImageData; alt: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="space-y-4 px-6 pt-6">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{title}</h4>
          <span className="text-xs text-muted-foreground">Click to enlarge</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {items.map((item, index) => (
            <button
              key={item.alt}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="cursor-pointer group shrink-0 overflow-hidden rounded-3xl border border-neutral-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <div className="relative h-72 w-[360px]">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            </button>
          ))}
        </div>

        {openIndex !== null ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 shadow-lg"
              onClick={() => setOpenIndex(null)}
              aria-label="Close image preview"
            >
              ✕
            </button>

            <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white p-4 shadow-2xl">
              <div className="relative h-[70vh] w-full">
                <Image
                  src={items[openIndex].src}
                  alt={items[openIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">{items[openIndex].alt}</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((prev) =>
                        prev === 0 ? items.length - 1 : prev! - 1
                      )
                    }
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm transition hover:bg-neutral-100"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((prev) =>
                        prev === items.length - 1 ? 0 : prev! + 1
                      )
                    }
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm transition hover:bg-neutral-100"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

function MobileTab() {
  return (
    <Card className="w-full">
      <GalleryPreview title="My Recent Works" items={mobileScreens} />

      <CardHeader>
        <CardTitle className="text-2xl">Mobile Development</CardTitle>
        <CardDescription>
          Experience in cross-platform mobile application development
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              My experience in mobile application development using Flutter and Kotlin.
              I have built several Travel & Umrah applications for iOS and Android platforms at my workplace, Carbon Trade apps, and Mental Health apps.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Technologies:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground">
                <li>Flutter for smooth UI</li>
                <li>Kotlin for Android development</li>
                <li>REST APIs integration</li>
                <li>Push notifications</li>
                <li>Firebase Integration</li>
                <li>iOS App Store Deployment & Android Play Store Deployment</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Flavoring & Versioning Experience:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground">
                <li>Flutter flavoring implementation (single codebase for multiple environments/projects)</li>
                <li>Comprehensive app versioning management across mobile and web platforms, ensuring consistency across multiple flavors</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Additional Experience:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground">
                <li>Android migration to support 16KB page size compliance</li>
                <li>Advanced state management using GetX, Flutter Hooks, Riverpod, and BLoC</li>
                <li>Flutter flavoring implementation (single codebase for multiple environments/projects)</li>
                <li>ProGuard/R8 obfuscation, shrinking, and optimization for Android release builds</li>
                <li>App signing & keystore management (upload key, release key)</li>
                <li>Deep links / App Links handling</li>
                <li>In-app update using Google Play In-App Updates API</li>
                <li>TestFlight distribution & beta testing</li>
                <li>App Store Connect management</li>
                <li>Provisioning profiles & certificate management</li>
                <li>Localization / multi-language support</li>
              </ul>
            </div>  
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Main Projects:</h4>
            <p className="text-sm text-muted-foreground">
              Travel & Umrah application with booking, itinerary, and real-time updates features. Carbon Trade app to facilitate carbon trading with marketplace and emission tracking features. Mental Health app to provide resources and support for mental well-being.
            </p>
          </div>
          <hr className="border-t-2 border-gray-300" />
        </div>
      </CardContent>
    </Card>
  );
}

function WebTab() {
  return (
    <Card className="w-full">
      <GalleryPreview title="Web Projects" items={webScreens} />

      <CardHeader>
        <CardTitle className="text-2xl">Web Development</CardTitle>
        <CardDescription>
          Specialization in modern web application development
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              As a web developer, I am skilled in React, Next.js, Angular, Flutter Web, and Vue.js.
              I have built various responsive websites and web applications for enterprise clients.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Technologies:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground">
                <li>Next.js for SSR and SSG</li>
                <li>Backend integration</li>
                <li>Interactive UI</li>
                <li>Database integration (MySQL, PostgreSQL, Firestore)</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Main Projects:</h4>
            <p className="text-sm text-muted-foreground">
              Manufacturing Enterprise Resource Planning, Carbon Trade app, Travel Umrah & Hajj, Ecology app, Hire expert portal.
            </p>
          </div>
          <hr className="border-t-2 border-gray-300" />
          <div className="flex-shrink-0">
            {/* image */}

          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function InfraTab() {
  return (
    <Card className="w-full">
      <GalleryPreview title="Infra Projects" items={infraScreens} />

      <CardHeader>
        <CardTitle className="text-2xl">Infrastructure AWS</CardTitle>
        <CardDescription>
          Scalable and secure cloud architecture
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Experience in managing cloud infrastructure using regular VPS and AWS services.
              I have designed and implemented scalable and secure cloud architectures.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Services:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground">
              <li>EC2 for compute instances</li>
              <li>S3 and CloudFront for storage and CDN</li>
              <li>Lambda for serverless functions</li>
              <li>RDS and DynamoDB for databases</li>
              <li>Deploying applications using ECS, ECR</li>
              <li>Deploying applications using Nginx on regular VPS</li>
              <li>CI/CD GitHub</li>
              <li>Infrastructure as Code (Terraform)</li>
            </ul>
          </div>
          <div className="space-y-2">
  <h4 className="font-semibold">Security & Testing:</h4>
  <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground">
    <li>Performance and load testing using K6 for web injection scenarios</li>
    <li>Security testing based on OWASP Top 10 standards</li>
  </ul>
</div>
          <hr className="border-t-2 border-gray-300" />
          <div className="flex-shrink-0">
              {/* image */}

          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AiTab() {
  return (
    <Card className="w-full">
      <GalleryPreview title="AI/ML Projects" items={aiScreens} />

      <CardHeader>
        <CardTitle className="text-2xl">AI/ML</CardTitle>
        <CardDescription>
          Machine learning and artificial intelligence solutions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Exploration in machine learning and AI, including the use of TensorFlow and Python
              for predictive and computer vision projects.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">AI/ML Technologies:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground">
                <li>TensorFlow and PyTorch for ML models</li>
                <li>Computer vision with OpenCV, YOLO</li>
                <li>NLP with BERT and transformers</li>
                <li>MLOps with Kubeflow</li>
                <li>Linear regression prediction</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Main Projects:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground">
    <li>Carbon usage prediction using regression models based on input features</li>
    <li>Built ESG Intelligence system using AWS Bedrock integrated with AWS Glue and AWS RDS</li>
  <li>Music Violin computer vision</li>
            </ul>
          </div>
          <hr className="border-t-2 border-gray-300" />
          <div className="flex-shrink-0">
            {/* image */}

          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function IotTab() {
  return (
    <Card className="w-full">
      <GalleryPreview title="IoT Projects" items={iotScreens} />

      <CardHeader>
        <CardTitle className="text-2xl">IoT</CardTitle>
        <CardDescription>
          Internet of Things and embedded systems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              IoT device development using ESP32 and communication protocols
              such as MQTT. I have built plant monitoring and remote control systems.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Hardware & Protocol:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground">
                <li>ESP32 for prototyping</li>
                <li>MQTT for device-to-cloud communication</li>
                <li>Sensor integration (temperature, motion, etc.)</li>
                <li>Integration with AWS IoT Core</li>
                <li>Real-time data processing</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Main Projects:</h4>
            <p className="text-sm text-muted-foreground">
              Smart plant.
            </p>
          </div>
          <hr className="border-t-2 border-gray-300" />
          <div className="flex-shrink-0">
            {/* image */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Portfolio() {
  return (
    <div className="size-full flex flex-col bg-neutral-50 ">
      <Navbar />
      <div className='flex flex-col px-6 py-8'>
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
          <p className="text-muted-foreground text-lg">
            Turning ideas into things you can actually use.
          </p>
        </div>

        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="mobile" className="cursor-pointer">Mobile</TabsTrigger>
            <TabsTrigger value="web" className="cursor-pointer">Web Dev</TabsTrigger>
            <TabsTrigger value="infra" className="cursor-pointer">Infra AWS</TabsTrigger>
            <TabsTrigger value="ai" className="cursor-pointer">AI/ML</TabsTrigger>
            <TabsTrigger value="iot" className="cursor-pointer">IoT</TabsTrigger>
          </TabsList>

          <TabsContent value="mobile">
            <MobileTab />
          </TabsContent>

          <TabsContent value="web">
            <WebTab />
          </TabsContent>

          <TabsContent value="infra">
            <InfraTab />
          </TabsContent>

          <TabsContent value="ai">
            <AiTab />
          </TabsContent>

          <TabsContent value="iot">
            <IotTab />
          </TabsContent>
        </Tabs>
      </div>

    </div>
  );
}
