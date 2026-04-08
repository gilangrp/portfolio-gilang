'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '../_components/Navbar';

function MobileTab() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Mobile Development</CardTitle>
        <CardDescription>
          Pengalaman dalam pengembangan aplikasi mobile cross-platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <p className="text-muted-foreground">
              Pengalaman saya dalam pengembangan aplikasi mobile menggunakan Flutter dan Kotlin.
              Saya telah membangun beberapa aplikasi Travel & Umroh untuk platform iOS dan Android di tempat saya bekerja, Carbon Trade app, Mental Health app.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Proyek Utama:</h4>
              <p className="text-sm text-muted-foreground">
                Aplikasi Travel & Umroh dengan fitur booking, itinerary, dan real-time updates. Carbon Trade app untuk memfasilitasi perdagangan karbon dengan fitur marketplace dan tracking emisi. Mental Health app untuk menyediakan sumber daya dan dukungan bagi kesehatan mental.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Teknologi:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Flutter untuk UI yang smooth</li>
                <li>• Kotlin untuk pengembangan Android</li>
                <li>• Integrasi dengan REST APIs</li>
                <li>• Push notifications</li>
                <li>• Firebase Integration</li>
                <li>• iOS App Store Deployment  & Android Play Store Deployment</li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://via.placeholder.com/400x300?text=Mobile+App+Screenshot"
              alt="Mobile App"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function WebTab() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Web Development</CardTitle>
        <CardDescription>
          Spesialisasi dalam pengembangan aplikasi web modern
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <p className="text-muted-foreground">
              Sebagai web developer, saya ahli dalam React, Next.js, Angular, Flutter Web dan Vue.js.
              Saya telah membuat berbagai website responsif dan aplikasi web untuk klien enterprise.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Proyek Utama:</h4>
              <p className="text-sm text-muted-foreground">
                Enterprise Resource Planning Manufacture, Carbon Trade app, Travel Umrah & Hajj, Ecology app, Hire expert portal.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Teknologi:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Next.js untuk SSR dan SSG</li>
                <li>• Backend integration</li>
                <li>• Interactive UI</li>
                <li>• Database integration (MySQL, PostgreSQL, Firestore)</li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://via.placeholder.com/400x300?text=Web+App+Dashboard"
              alt="Web App"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function InfraTab() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Infrastructure AWS</CardTitle>
        <CardDescription>
          Arsitektur cloud scalable dan secure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <p className="text-muted-foreground">
              Pengalaman dalam mengelola infrastruktur cloud menggunakan VPS regular, and AWS services.
              Saya telah mendesain dan mengimplementasikan arsitektur cloud yang scalable dan secure.
            </p>
            {/* <div className="space-y-2">
              <h4 className="font-semibold">Proyek Utama:</h4>
              <p className="text-sm text-muted-foreground">
                
              </p>
            </div> */}
            <div className="space-y-2">
              <h4 className="font-semibold">Services:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• EC2 untuk compute instances</li>
                <li>• S3 dan CloudFront untuk storage dan CDN</li>
                <li>• Lambda untuk serverless functions</li>
                <li>• RDS dan DynamoDB untuk databases</li>
                <li>• Deploying app using ECS, ECR</li>
                <li>• Deploying app using  Nginx using VPS regular</li>
                <li>• CI/CD Github</li>
                <li>• Infrastructure as Code (Terraform)</li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://via.placeholder.com/400x300?text=AWS+Architecture"
              alt="AWS Infra"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AiTab() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">AI/ML</CardTitle>
        <CardDescription>
          Machine learning dan artificial intelligence solutions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <p className="text-muted-foreground">
              Eksplorasi dalam machine learning dan AI, termasuk penggunaan TensorFlow dan Python
              untuk proyek-proyek prediktif dan computer vision.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Proyek Utama:</h4>
              <p className="text-sm text-muted-foreground">
                Detect Carbon usage, music computer vision
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Teknologi AI/ML:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• TensorFlow dan PyTorch untuk model ML</li>
                <li>• Computer vision dengan OpenCV, YOLO</li>
                <li>• NLP dengan BERT dan transformers</li>
                <li>• MLOps dengan Kubeflow</li>
                <li>• Regression Linear prediction</li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://via.placeholder.com/400x300?text=AI+Model+Visualization"
              alt="AI/ML"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function IotTab() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">IoT</CardTitle>
        <CardDescription>
          Internet of Things dan embedded systems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <p className="text-muted-foreground">
              Pengembangan perangkat IoT menggunakan ESP32, dan protokol komunikasi
              seperti MQTT. Saya telah membangun sistem monitoring tanaman dan kontrol jarak jauh.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Proyek Utama:</h4>
              <p className="text-sm text-muted-foreground">
                Smart plant.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Hardware & Protocol:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• ESP32 untuk prototyping</li>
                <li>• MQTT untuk komunikasi device-to-cloud</li>
                <li>• Sensor integration (temperature, motion, etc.)</li>
                <li>• Integration with AWS IoT Core</li>
                <li>• Real-time data processing</li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://via.placeholder.com/400x300?text=IoT+Device+Network"
              alt="IoT"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
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
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="web">Web Dev</TabsTrigger>
            <TabsTrigger value="infra">Infra AWS</TabsTrigger>
            <TabsTrigger value="ai">AI/ML</TabsTrigger>
            <TabsTrigger value="iot">IoT</TabsTrigger>
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
