import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Stats } from "@/components/stats";
import { Programs } from "@/components/programs";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We&apos;d love to hear from you. Whether you want to support our cause, volunteer, or learn more about our programs, please reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">contact@free-nigeria.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      123 Education Street<br />
                      New York, NY, USA 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}