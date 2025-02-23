"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const testimonials = [
  {
    name: "Oluwaseun Adebayo",
    role: "Wedding Client",
    content:
      "The Agbada set created for my wedding was absolutely magnificent. The attention to detail and quality of the hand-work exceeded my expectations!",
    avatar: "OA",
    rating: 5,
  },
  {
    name: "Chidi Okonkwo",
    role: "Business Professional",
    content:
      "Their Senator styles are perfect for my corporate needs while maintaining our cultural identity. The quality is unmatched.",
    avatar: "CO",
    rating: 5,
  },
  {
    name: "Aisha Mohammed",
    role: "Regular Client",
    content:
      "I've trusted them with my family's traditional wear for years. Their understanding of Nigerian fashion and craftsmanship is exceptional.",
    avatar: "AM",
    rating: 5,
  },
];

export default function Testimonials() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-5xl font-bold gradient-text mb-6">
                Voices of Satisfaction
              </h2>
              <p className="text-xl text-muted-foreground">
                Hear from our valued clients about their experience with our
                craftsmanship
              </p>
            </motion.div>
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <Avatar className="h-14 w-14 mr-4 ring-4 ring-primary/10">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="ml-auto flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-primary fill-primary"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                        <p className="text-lg text-muted-foreground pl-6">
                          {testimonial.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <CardContent className="relative p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        className="h-12 text-lg border-2"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="h-12 text-lg border-2"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        name="message"
                        placeholder="Tell us about your native wear requirements"
                        className="min-h-[200px] text-lg border-2 resize-none"
                        required
                      />
                    </div>
                    <Button
                      className="w-full h-12 text-lg btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
