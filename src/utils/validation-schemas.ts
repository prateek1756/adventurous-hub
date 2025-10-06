import { z } from "zod";

/**
 * Validation Schemas for Form Security
 * Implements comprehensive input validation to prevent injection attacks
 */

// Contact Form Validation Schema
export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes" }),
  
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  
  phone: z
    .string()
    .trim()
    .regex(/^(\+?\d{1,4}[\s-])?(?!0+\s)(?!0+$)\d{8,12}$/, { 
      message: "Please enter a valid phone number (8-12 digits)" 
    })
    .optional()
    .or(z.literal("")),
  
  subject: z
    .string()
    .trim()
    .min(5, { message: "Subject must be at least 5 characters" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" })
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Enhanced Booking Form Validation Schema
export const BookingFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes" }),
  
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  
  phone: z
    .string()
    .trim()
    .regex(/^(\+?\d{1,4}[\s-])?(?!0+\s)(?!0+$)\d{8,12}$/, {
      message: "Please enter a valid phone number (8-12 digits)",
    }),
  
  adults: z
    .string()
    .refine((value) => {
      const num = parseInt(value);
      return num > 0 && num <= 20;
    }, {
      message: "Number of adults must be between 1 and 20",
    }),
  
  children: z
    .string()
    .refine((value) => {
      const num = parseInt(value);
      return num >= 0 && num <= 20;
    }, {
      message: "Number of children must be between 0 and 20",
    }),
  
  checkInDate: z.date({
    required_error: "Please select a check-in date",
  }).refine((date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  }, {
    message: "Check-in date cannot be in the past",
  }),
  
  checkOutDate: z.date({
    required_error: "Please select a check-out date",
  }),
}).refine((data) => {
  return data.checkOutDate > data.checkInDate;
}, {
  message: "Check-out date must be after check-in date",
  path: ["checkOutDate"],
}).refine((data) => {
  const diffTime = Math.abs(data.checkOutDate.getTime() - data.checkInDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 30;
}, {
  message: "Booking duration cannot exceed 30 days",
  path: ["checkOutDate"],
});

export type BookingFormData = z.infer<typeof BookingFormSchema>;

// Payment Card Validation Schema
export const PaymentCardSchema = z.object({
  cardNumber: z
    .string()
    .trim()
    .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, { 
      message: "Card number must be 16 digits" 
    }),
  
  cardholderName: z
    .string()
    .trim()
    .min(2, { message: "Cardholder name must be at least 2 characters" })
    .max(100, { message: "Cardholder name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { 
      message: "Cardholder name can only contain letters, spaces, hyphens, and apostrophes" 
    }),
  
  expiryDate: z
    .string()
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { 
      message: "Expiry date must be in MM/YY format" 
    }),
  
  cvv: z
    .string()
    .trim()
    .regex(/^\d{3}$/, { 
      message: "CVV must be 3 digits" 
    })
});

export type PaymentCardData = z.infer<typeof PaymentCardSchema>;

// UPI Payment Validation Schema
export const UpiPaymentSchema = z.object({
  upiId: z
    .string()
    .trim()
    .regex(/^[\w.-]+@[\w.-]+$/, { 
      message: "Please enter a valid UPI ID (e.g., name@bank)" 
    })
    .max(100, { message: "UPI ID must be less than 100 characters" })
});

export type UpiPaymentData = z.infer<typeof UpiPaymentSchema>;

// Promo Code Validation Schema
export const PromoCodeSchema = z
  .string()
  .trim()
  .toUpperCase()
  .regex(/^[A-Z0-9]+$/, { 
    message: "Promo code can only contain letters and numbers" 
  })
  .min(4, { message: "Promo code must be at least 4 characters" })
  .max(20, { message: "Promo code must be less than 20 characters" });

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param input User input string
 * @returns Sanitized string
 */
export const sanitizeHtml = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Sanitize URL parameters to prevent injection
 * @param input User input string
 * @returns URL-safe string
 */
export const sanitizeUrl = (input: string): string => {
  return encodeURIComponent(input.trim());
};
