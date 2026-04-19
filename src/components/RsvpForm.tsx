import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  guests: z.number().int().min(1).max(20),
  attending: z.enum(["yes", "no"]),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

export const RsvpForm = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    attending: "yes" as "yes" | "no",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("rsvps").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      guests: parsed.data.guests,
      attending: parsed.data.attending,
      message: parsed.data.message || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Could not submit RSVP. Please try again.");
      return;
    }
    setDone(true);
    toast.success("Thank you! Your RSVP has been received 🌺");
  };

  if (done) {
    return (
      <div className="text-center py-10 px-6 animate-fade-up">
        <div className="text-5xl mb-4">🌺</div>
        <h3 className="font-script text-4xl text-primary mb-3">Dhonyobad!</h3>
        <p className="font-serif-elegant text-lg text-muted-foreground">
          Your blessings have been received.<br />We can't wait to celebrate with you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="font-display text-xs tracking-widest text-primary">YOUR NAME</Label>
        <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-card border-secondary/40 mt-1" />
      </div>
      <div>
        <Label htmlFor="email" className="font-display text-xs tracking-widest text-primary">EMAIL</Label>
        <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-card border-secondary/40 mt-1" />
      </div>
      <div>
        <Label htmlFor="phone" className="font-display text-xs tracking-widest text-primary">PHONE (OPTIONAL)</Label>
        <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-card border-secondary/40 mt-1" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="guests" className="font-display text-xs tracking-widest text-primary">GUESTS</Label>
          <Input id="guests" type="number" min={1} max={20} value={form.guests} onChange={(e) => setForm({ ...form, guests: parseInt(e.target.value) || 1 })} className="bg-card border-secondary/40 mt-1" />
        </div>
        <div>
          <Label className="font-display text-xs tracking-widest text-primary">ATTENDING</Label>
          <div className="flex gap-2 mt-1">
            <button type="button" onClick={() => setForm({ ...form, attending: "yes" })} className={`flex-1 h-10 rounded-md border text-sm font-display tracking-wider transition-all ${form.attending === "yes" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-secondary/40 text-foreground"}`}>YES</button>
            <button type="button" onClick={() => setForm({ ...form, attending: "no" })} className={`flex-1 h-10 rounded-md border text-sm font-display tracking-wider transition-all ${form.attending === "no" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-secondary/40 text-foreground"}`}>NO</button>
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="message" className="font-display text-xs tracking-widest text-primary">A MESSAGE FOR THE COUPLE</Label>
        <Textarea id="message" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-card border-secondary/40 mt-1 resize-none" />
      </div>
      <Button type="submit" disabled={loading} className="w-full h-12 bg-gradient-maroon text-primary-foreground font-display tracking-widest text-sm shadow-elegant hover:opacity-95">
        {loading ? "SENDING..." : "SEND BLESSINGS"}
      </Button>
    </form>
  );
};
