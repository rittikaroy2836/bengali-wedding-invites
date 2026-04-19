
CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  guests INTEGER NOT NULL DEFAULT 1,
  attending TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an RSVP"
ON public.rsvps FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view RSVPs"
ON public.rsvps FOR SELECT
TO authenticated
USING (true);
