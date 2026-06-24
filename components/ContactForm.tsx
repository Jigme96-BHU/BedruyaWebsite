"use client";

import { useState, useRef, useEffect, useId } from "react";
import {
  User,
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
  Send,
  ShieldCheck,
  AlertCircle,
  Tag,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./contact-form.css";

const SUBJECT_OPTIONS = [
  { value: "ndis", label: "NDIS Support Enquiry" },
  { value: "dva", label: "DVA Services Enquiry" },
  { value: "nursing", label: "Nursing & Clinical Care" },
  { value: "sil", label: "Supported Independent Living" },
  { value: "referral", label: "Professional Referral" },
  { value: "employment", label: "Employment Enquiry" },
  { value: "other", label: "Other" },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="contact-label">
      {children}
      {required && <span className="contact-label-required" aria-hidden> *</span>}
    </label>
  );
}

function TopicSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const selected = SUBJECT_OPTIONS.find((o) => o.value === value);

  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectOption = (optionValue: string) => {
    onChange(optionValue);
    setOpen(false);
    setActiveIndex(-1);
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((prev) => !prev);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setActiveIndex(0);
        return;
      }
      setActiveIndex((i) => Math.min(i + 1, SUBJECT_OPTIONS.length - 1));
    }

    if (e.key === "ArrowUp" && open) {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
  };

  return (
    <div className="contact-input-shell">
      <Tag size={18} className="contact-input-icon" aria-hidden />
      <div className="contact-select" ref={rootRef}>
        <button
          id="subject"
          type="button"
          className={`contact-select-trigger${!selected ? " contact-select-trigger--placeholder" : ""}`}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          onClick={() => setOpen((prev) => !prev)}
          onKeyDown={handleTriggerKeyDown}
        >
          <span className="contact-select-trigger-label">
            {selected?.label ?? "Select a topic…"}
          </span>
        </button>
        <ChevronDown size={18} className="contact-select-chevron" aria-hidden />

        {open && (
          <ul
            id={listboxId}
            className="contact-select-menu"
            role="listbox"
            aria-label="Enquiry topic"
          >
            {SUBJECT_OPTIONS.map((opt, index) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={value === opt.value}
                tabIndex={0}
                className={`contact-select-option${value === opt.value ? " contact-select-option--selected" : ""}${activeIndex === index ? " contact-select-option--active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(opt.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectOption(opt.value);
                  }
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  const markTouched = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const emailInvalid =
    touched.email && form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const SubmitButton = reduce ? "button" : motion.button;

  if (submitted) {
    return (
      <div className="contact-form-card">
        <div className="contact-form-accent" aria-hidden />
        <div className="contact-form-body">
          <div className="contact-success page-success-enter">
            <div className="contact-success-icon-wrap">
              <ShieldCheck size={36} color="#4A7C59" strokeWidth={1.75} />
            </div>
            <h3 className="contact-success-title">Message received</h3>
            <p className="contact-success-text">
              Thank you for reaching out. A member of our team will get back to you within one business day.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-accent" aria-hidden />

      <div className="contact-form-body">
        <header className="contact-form-header">
          <p className="contact-form-eyebrow">Quick enquiry</p>
          <h2 className="contact-form-title">Send us a message</h2>
          <p className="contact-form-subtitle">
            Fill in the form below and we&apos;ll be in touch. All fields marked with * are required.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="contact-form-grid" noValidate>
          <div className="contact-form-row">
            <div className="contact-field">
              <FieldLabel htmlFor="name" required>
                Full name
              </FieldLabel>
              <div className="contact-input-shell">
                <User size={18} className="contact-input-icon" aria-hidden />
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onBlur={() => markTouched("name")}
                  className="page-input"
                  placeholder="e.g. Jane Smith"
                />
              </div>
            </div>

            <div className="contact-field">
              <FieldLabel htmlFor="phone">Phone number</FieldLabel>
              <div className="contact-input-shell">
                <Phone size={18} className="contact-input-icon" aria-hidden />
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="page-input"
                  placeholder="0400 000 000"
                />
              </div>
            </div>
          </div>

          <div className="contact-field">
            <FieldLabel htmlFor="email" required>
              Email address
            </FieldLabel>
            <div className="contact-input-shell">
              <Mail size={18} className="contact-input-icon" aria-hidden />
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onBlur={() => markTouched("email")}
                className={`page-input${emailInvalid ? " page-input-error" : ""}`}
                placeholder="you@email.com"
                aria-invalid={emailInvalid || undefined}
                aria-describedby={emailInvalid ? "email-error" : undefined}
              />
            </div>
            {emailInvalid ? (
              <p id="email-error" className="contact-field-error" role="alert">
                <AlertCircle size={14} aria-hidden />
                Please enter a valid email address.
              </p>
            ) : (
              <p className="contact-field-hint">We&apos;ll only use this to reply to your enquiry.</p>
            )}
          </div>

          <div className="contact-field">
            <FieldLabel htmlFor="subject">What can we help with?</FieldLabel>
            <TopicSelect
              value={form.subject}
              onChange={(subject) => setForm({ ...form, subject })}
            />
          </div>

          <div className="contact-field">
            <FieldLabel htmlFor="message" required>
              Your message
            </FieldLabel>
            <div className="contact-input-shell contact-input-shell--textarea">
              <MessageSquare size={18} className="contact-input-icon" aria-hidden />
              <textarea
                id="message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="page-textarea contact-textarea"
                placeholder="Tell us a little about what support you're looking for..."
              />
            </div>
            <p className="contact-field-hint">
              {form.message.length > 0
                ? `${form.message.length} characters`
                : "Share as much detail as you like — it helps us respond better."}
            </p>
          </div>

          <div className="contact-form-footer">
            <p className="contact-form-trust">
              <ShieldCheck size={16} className="contact-form-trust-icon" aria-hidden />
              <span>
                Your information is kept private and secure. We typically respond within one business day.
              </span>
            </p>

            <SubmitButton
              type="submit"
              disabled={submitting}
              className="contact-form-submit"
              {...(!reduce && {
                whileHover: submitting ? undefined : { y: -2, transition: { duration: 0.2 } },
                whileTap: submitting ? undefined : { scale: 0.98 },
              })}
            >
              {submitting ? (
                <>
                  <span className="contact-form-submit-spinner" aria-hidden />
                  Sending your message…
                </>
              ) : (
                <>
                  Send message
                  <Send size={18} aria-hidden />
                </>
              )}
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
