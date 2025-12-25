"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  ShapeCollectionIcon,
} from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [showNavCTA, setShowNavCTA] = useState(false);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const integrationsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show nav CTA when hero CTA is NOT visible
        setShowNavCTA(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    const currentRef = heroCtaRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded" />
              <span className="font-bold text-xl">Basebase</span>
            </div>
            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center gap-2">
                <Button variant="ghost" className="hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5" onClick={() => integrationsRef.current?.scrollIntoView({ behavior: "smooth" })}>Integrations</Button>
                <Button variant="ghost" className="hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5" onClick={() => pricingRef.current?.scrollIntoView({ behavior: "smooth" })}>Pricing</Button>
                <Button variant="ghost" className="hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5">Documentation</Button>
              </nav>
              <AnimatePresence>
                {showNavCTA && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <Button className="whitespace-nowrap">
                      Get Started
                      <HugeiconsIcon icon={ArrowRight02Icon} className="size-4" strokeWidth={2} />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
          Build business tools in<br /><span className="italic">minutes</span>,
          not months.
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <InputGroup ref={heroCtaRef} className="max-w-md w-full h-12 rounded-full border-muted-foreground/20">
            <InputGroupInput
              placeholder="Describe your app..."
              className="px-6 text-base"
            />
            <InputGroupAddon align="inline-end" className="pr-1.5 mr-0!">
              <InputGroupButton
                variant="default"
                className="h-9 px-4 rounded-full"
              >
                Create
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <span className="text-muted-foreground font-medium">or</span>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-6 rounded-full"
            data-icon="inline-end"
          >
            Browse apps
            <HugeiconsIcon
              icon={ShapeCollectionIcon}
              className="size-5 -rotate-90 ml-1"
            />
          </Button>
        </div>
        {/* <div className="text-lg text-muted-foreground w-fit mx-auto font-jetbrains flex flex-col gap-2">
          <p className="w-full text-justify [text-align-last:justify]">
            Connect your data
          </p>
          <p className="w-full text-justify [text-align-last:justify]">
            Build custom apps in minutes
          </p>
          <p className="w-full text-justify [text-align-last:justify]">
            Share instantly with your team
          </p>
          <p className="w-full text-justify [text-align-last:justify]">
            No engineers required
          </p>
        </div> */}
      </section>

      {/* Trusted By Section */}
      <section className="border-y bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by revenue ops, marketing ops, and business teams
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline">RevOps Teams</Badge>
            <Badge variant="outline">MarTech Teams</Badge>
            <Badge variant="outline">Finance Ops</Badge>
            <Badge variant="outline">Customer Success</Badge>
            <Badge variant="outline">Sales Ops</Badge>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Internal apps are hard</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We get it. Your data is scattered across dozens of apps, and building the tools you need feels impossible without an engineering team.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-2">Your data is everywhere</h3>
            <p className="text-muted-foreground">
              Salesforce, HubSpot, Sheets, Notion, Slack... Your data lives in dozens of apps that don&apos;t talk to each other.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-2">Zapier isn&apos;t enough</h3>
            <p className="text-muted-foreground">
              Moving data between apps is one thing. Building the custom workflows and views your team actually needs? That&apos;s another.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-2">You can&apos;t wait for engineers</h3>
            <p className="text-muted-foreground">
              You know exactly what you need, but engineering has other priorities. So you wait... and wrestle with spreadsheets.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Basebase works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From idea to live app in minutes. Built by business people, for business people.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-4">01</div>
              <h3 className="font-bold text-lg mb-2">Connect your data</h3>
              <p className="text-muted-foreground">
                Pull data from 100+ enterprise apps. Slack, Airtable, Google Sheets, Stripe, etc. No more copy-pasting between tools.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-4">02</div>
              <h3 className="font-bold text-lg mb-2">Build in minutes</h3>
              <p className="text-muted-foreground">
                Create custom dashboards, workflows, and tools using AI. No coding required. Just describe what you need.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-4">03</div>
              <h3 className="font-bold text-lg mb-2">Share instantly</h3>
              <p className="text-muted-foreground">
                Deploy and share with your team in one click. Real apps, not prototypes. Production-ready from day one.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Built for business people</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop waiting for IT. Stop fighting with spreadsheets. Build exactly what you need, when you need it.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4" />
            <p className="font-medium">Real dynamic app workflows</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4" />
            <p className="font-medium">Instant team sharing</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4" />
            <p className="font-medium">100+ enterprise integrations</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4" />
            <p className="font-medium">No coding required</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4" />
            <p className="font-medium">Production-ready apps</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4" />
            <p className="font-medium">Revenue ops ready</p>
          </Card>
        </div>
      </section>

      {/* Integrations Section */}
      <section ref={integrationsRef} className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Connect everything</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Pull data from 100+ enterprise apps. Break down silos. Get the unified view you&apos;ve always wanted.
            </p>
            <Button variant="outline">View all integrations →</Button>
          </div>
          <div className="grid grid-cols-5 md:grid-cols-8 gap-4 max-w-5xl mx-auto">
            {["Slack", "Airtable", "Sheets", "Notion", "Stripe", "Salesforce", "HubSpot", "Calendar", 
              "Gmail", "Supabase", "Linear", "GitHub", "Intercom", "Asana", "Jira"].map((integration) => (
              <Card key={integration} className="p-4 text-center">
                <div className="w-8 h-8 bg-muted rounded mx-auto mb-2" />
                <p className="text-xs">{integration}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Perfect for ops teams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revenue ops, marketing ops, and business teams use Basebase to build the tools they need—fast.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="font-bold mb-2">Custom CRM views</h3>
            <p className="text-sm text-muted-foreground">Pull Salesforce data into tailored dashboards</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">Campaign trackers</h3>
            <p className="text-sm text-muted-foreground">Connect marketing tools for unified reporting</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">Deal room tools</h3>
            <p className="text-sm text-muted-foreground">Build approval workflows for your sales team</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">Customer health scores</h3>
            <p className="text-sm text-muted-foreground">Aggregate data from multiple sources</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">Invoice automation</h3>
            <p className="text-sm text-muted-foreground">Connect Stripe, Sheets, and your CRM</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">Team directories</h3>
            <p className="text-sm text-muted-foreground">Build internal tools for your org</p>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={pricingRef} className="border-y bg-muted/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to build?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Stop waiting on IT. Start building the tools your business actually needs—in minutes, not months.
          </p>
          <Button size="lg" className="mb-4">Create App →</Button>
          <p className="text-sm text-muted-foreground">
            No credit card required · Free forever for individuals
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-2">Basebase</div>
              <p className="text-sm text-muted-foreground">
                Build the tools your business needs. No engineers required.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <div className="space-y-2">
                <a href="#integrations" className="block text-sm text-muted-foreground hover:underline">Integrations</a>
                <a href="#pricing" className="block text-sm text-muted-foreground hover:underline">Pricing</a>
                <a href="#docs" className="block text-sm text-muted-foreground hover:underline">Documentation</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-muted-foreground hover:underline">About</a>
                <a href="mailto:hello@basebase.com" className="block text-sm text-muted-foreground hover:underline">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <div className="space-y-2">
                <a href="#terms" className="block text-sm text-muted-foreground hover:underline">Terms of Service</a>
                <a href="#privacy" className="block text-sm text-muted-foreground hover:underline">Privacy Policy</a>
              </div>
            </div>
          </div>
          <Separator className="mb-8" />
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Basebase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}