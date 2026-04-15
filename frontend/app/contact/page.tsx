"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";
import {
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Send,
  AlertCircle,
} from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = t("contact_required");
    if (!formData.email.trim()) {
      errs.email = t("contact_required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t("contact_email_invalid");
    }
    if (!formData.subject.trim()) errs.subject = t("contact_required");
    if (!formData.message.trim()) errs.message = t("contact_required");
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "67305141-c101-4462-b7c5-37eea891b871",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrors({ message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setErrors({ message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100090537676744",
      icon: Facebook,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/ngo-youth-of-diverse-families/",
      icon: Linkedin,
    },
    {
      label: "Instagram (ydf.mk)",
      href: "https://www.instagram.com/ydf.mk",
      icon: Instagram,
    },
  ];

  return (
    <>
      <PageHeader
        title={t("contact_page_title")}
        description={t("contact_page_desc")}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            {submitted ? (
              <div
                className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
                role="alert"
              >
                <p className="text-lg font-semibold text-foreground">
                  {t("contact_success")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t("contact_name")} *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm text-card-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1 flex items-center gap-1 text-sm text-destructive"
                      role="alert"
                    >
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t("contact_email")} *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm text-card-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 flex items-center gap-1 text-sm text-destructive"
                      role="alert"
                    >
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t("contact_subject")} *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    aria-invalid={!!errors.subject}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm text-card-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="mt-1 flex items-center gap-1 text-sm text-destructive"
                      role="alert"
                    >
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t("contact_message")} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="w-full resize-y rounded-lg border bg-card px-4 py-2.5 text-sm text-card-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1 flex items-center gap-1 text-sm text-destructive"
                      role="alert"
                    >
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {isSubmitting
                    ? t("contact_sending") || "Sending..."
                    : t("contact_send")}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <section className="rounded-2xl border bg-card p-8">
              <h2 className="mb-4 text-xl font-bold text-card-foreground">
                {t("contact_info_title")}
              </h2>
              <a
                href="mailto:ngo.ydf@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                ngo.ydf@gmail.com
              </a>
            </section>

            <section className="rounded-2xl border bg-card p-8">
              <h2 className="mb-4 text-xl font-bold text-card-foreground">
                {t("contact_follow_us")}
              </h2>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <link.icon className="h-5 w-5" aria-hidden="true" />
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
