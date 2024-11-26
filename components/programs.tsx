import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap, School } from "lucide-react";

export function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Programs</h2>
          <p className="mt-4 text-gray-500 md:text-xl">Comprehensive educational initiatives transforming Nigerian communities.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Literacy Program</CardTitle>
              <CardDescription>Improving reading and writing skills across Nigeria.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Our literacy program has helped over 5,000 Nigerian children develop strong reading and writing foundations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Teacher Training</CardTitle>
              <CardDescription>Empowering Nigerian educators with modern teaching methodologies.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                We&apos;ve trained over 1,000 Nigerian teachers in effective teaching strategies and classroom management.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <School className="h-10 w-10 text-primary mb-2" />
              <CardTitle>School Infrastructure</CardTitle>
              <CardDescription>Building and renovating Nigerian educational facilities.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Our infrastructure projects have improved learning environments in schools across Nigeria.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <GraduationCap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Scholarship Program</CardTitle>
              <CardDescription>Supporting talented Nigerian students.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                We&apos;ve provided over 500 scholarships to promising students across Nigeria.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}