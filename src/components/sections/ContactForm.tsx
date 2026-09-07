import { AlertCircle, CheckCircle2, MessageCircle } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui-kit/Badge";
import { Button } from "@/components/ui-kit/Button";
import { business, services } from "@/config/business";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  date: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "loading" | "success" | "error";

const initial: Values = {
  name: "",
  phone: "",
  vehicle: "",
  service: "",
  date: "",
  message: "",
};

const fieldClass =
  "h-12 w-full rounded-sm border border-input bg-surface-2 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [values, setValues] = React.useState<Values>(initial);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const [fileCount, setFileCount] = React.useState(0);

  const set = (key: keyof Values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (v: Values): Errors => {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[\d+\-\s()]{7,}$/.test(v.phone.trim()))
      e.phone = "Please enter a phone number we can reach you on.";
    if (v.vehicle.trim().length < 2)
      e.vehicle = "Please tell us your vehicle make and model.";
    if (!v.service) e.service = "Please select a service.";
    return e;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    // No backend is configured yet: `formEndpoint` is an editable placeholder.
    if (!business.formEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(business.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initial);
      setFileCount(0);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="surface-panel rounded-sm p-8" role="status">
        <CheckCircle2 className="size-7 text-accent" aria-hidden="true" />
        <h3 className="mt-5 text-h3">Request received</h3>
        <p className="mt-3 text-body text-muted-foreground">
          Thank you. Our team will get back to you about your vehicle.
        </p>
        <Button className="mt-7" onClick={() => setStatus("idle")}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface-panel rounded-sm p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldClass, errors.name && "border-destructive")}
            placeholder="Your name"
          />
        </Field>

        <Field label="Phone" id="phone" error={errors.phone} required>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(fieldClass, errors.phone && "border-destructive")}
            placeholder="+92 3XX XXXXXXX"
          />
        </Field>

        <Field label="Vehicle make / model" id="vehicle" error={errors.vehicle} required>
          <input
            id="vehicle"
            name="vehicle"
            value={values.vehicle}
            onChange={set("vehicle")}
            aria-invalid={!!errors.vehicle}
            aria-describedby={errors.vehicle ? "vehicle-error" : undefined}
            className={cn(fieldClass, errors.vehicle && "border-destructive")}
            placeholder="e.g. Toyota Corolla 2021"
          />
        </Field>

        <Field label="Service interested in" id="service" error={errors.service} required>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={set("service")}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={cn(fieldClass, errors.service && "border-destructive")}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>

        <Field label="Preferred date" id="date" hint="Optional">
          <input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={set("date")}
            className={fieldClass}
          />
        </Field>

        <Field label="Upload vehicle photos" id="photos" hint="Optional">
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setFileCount(e.target.files?.length ?? 0)}
            className="block h-12 w-full cursor-pointer rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-muted-foreground file:mr-3 file:rounded-sm file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:font-display file:text-xs file:font-bold file:text-foreground"
          />
          {fileCount > 0 && (
            <p className="mt-2 text-xs text-muted-foreground">
              {fileCount} file{fileCount > 1 ? "s" : ""} selected
            </p>
          )}
        </Field>

        <div className="sm:col-span-2">
          <Field label="Message" id="message" hint="Optional">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={set("message")}
              placeholder="Tell us what you'd like looked at."
              className="w-full rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none"
            />
          </Field>
        </div>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 flex gap-3 rounded-sm border border-destructive/50 bg-destructive/10 p-4 text-sm"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-foreground">
              This form isn't connected to a backend yet, so your request wasn't
              sent.
            </p>
            <p className="mt-1 text-muted-foreground">
              Please reach us on WhatsApp or call {business.phone} in the
              meantime.
            </p>
          </div>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" loading={status === "loading"}>
          Request a Quote
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            WhatsApp Instead
          </a>
        </Button>
      </div>

      {!business.formEndpoint && (
        <div className="mt-6">
          <Badge tone="placeholder">
            Form endpoint not configured — editable in site config
          </Badge>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  id,
  children,
  error,
  hint,
  required,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  error?: string | undefined;
  hint?: string | undefined;
  required?: boolean | undefined;
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-2 flex flex-wrap items-center gap-2 font-display text-xs font-bold tracking-[0.12em] text-metal uppercase"
      >
        {label}
        {required ? (
          <span className="text-accent">Required</span>
        ) : hint ? (
          <span className="font-medium tracking-normal text-muted-foreground normal-case">
            {hint}
          </span>
        ) : null}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 flex items-center gap-1.5 text-xs text-destructive"
        >
          <AlertCircle className="size-3.5" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export default ContactForm;
