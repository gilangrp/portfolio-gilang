'use client';

import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '../_components/Navbar';

function MobileTab() {
  return (
    <Card className="w-full">
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
          <div className="flex-shrink-0">
            <ImageGallery
              items={[
                {
                  original: 'https://placehold.co/400x300?text=Mobile+App+Screenshot+1',
                  thumbnail: 'https://placehold.co/100x75?text=1',
                },
                {
                  original: 'https://placehold.co/400x300?text=Mobile+App+Screenshot+2',
                  thumbnail: 'https://placehold.co/100x75?text=2',
                },
                {
                  original: 'https://placehold.co/400x300?text=Mobile+App+Screenshot+3',
                  thumbnail: 'https://placehold.co/100x75?text=3',
                },
              ]}
              showPlayButton={false}
              showFullscreenButton={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
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
            <ImageGallery
              items={[
                {
                  original: 'https://placehold.co/400x300?text=Web+App+Dashboard+1',
                  thumbnail: 'https://placehold.co/100x75?text=1',
                },
                {
                  original: 'https://placehold.co/400x300?text=Web+App+Dashboard+2',
                  thumbnail: 'https://placehold.co/100x75?text=2',
                },
                {
                  original: 'https://placehold.co/400x300?text=Web+App+Dashboard+3',
                  thumbnail: 'https://placehold.co/100x75?text=3',
                },
              ]}
              showPlayButton={false}
              showFullscreenButton={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
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
            <ImageGallery
              items={[
                {
                  original: 'https://placehold.co/400x300?text=AWS+Architecture+1',
                  thumbnail: 'https://placehold.co/100x75?text=1',
                },
                {
                  original: 'https://placehold.co/400x300?text=AWS+Architecture+2',
                  thumbnail: 'https://placehold.co/100x75?text=2',
                },
                {
                  original: 'https://placehold.co/400x300?text=AWS+Architecture+3',
                  thumbnail: 'https://placehold.co/100x75?text=3',
                },
              ]}
              showPlayButton={false}
              showFullscreenButton={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
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
            <ImageGallery
              items={[
                {
                  original: 'https://placehold.co/400x300?text=AI+Model+Visualization+1',
                  thumbnail: 'https://placehold.co/100x75?text=1',
                },
                {
                  original: 'https://placehold.co/400x300?text=AI+Model+Visualization+2',
                  thumbnail: 'https://placehold.co/100x75?text=2',
                },
                {
                  original: 'https://placehold.co/400x300?text=AI+Model+Visualization+3',
                  thumbnail: 'https://placehold.co/100x75?text=3',
                },
              ]}
              showPlayButton={false}
              showFullscreenButton={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
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
            <ImageGallery
              items={[
                {
                  original: 'https://placehold.co/400x300?text=IoT+Device+Network+1',
                  thumbnail: 'https://placehold.co/100x75?text=1',
                },
                {
                  original: 'https://placehold.co/400x300?text=IoT+Device+Network+2',
                  thumbnail: 'https://placehold.co/100x75?text=2',
                },
                {
                  original: 'https://placehold.co/400x300?text=IoT+Device+Network+3',
                  thumbnail: 'https://placehold.co/100x75?text=3',
                },
              ]}
              showPlayButton={false}
              showFullscreenButton={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
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
