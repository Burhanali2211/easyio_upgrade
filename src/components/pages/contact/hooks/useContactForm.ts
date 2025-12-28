"use client";

import { useState } from "react";
import { ContactType, ContactFormData } from "../types";

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', company: '', message: '', type: 'general' });
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send message');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (updates: Partial<ContactFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const setType = (type: ContactType) => {
    setFormData(prev => ({ ...prev, type }));
  };

  const resetSuccess = () => setSuccess(false);

  return {
    formData,
    loading,
    success,
    error,
    handleSubmit,
    updateFormData,
    setType,
    resetSuccess,
  };
}
