"use client";

import { useState, useCallback } from 'react';
import { toast } from 'sonner';

export function useImageUpload() {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const [imageUploadMode, setImageUploadMode] = useState<'url' | 'upload'>('url');
  const [avatarUploadMode, setAvatarUploadMode] = useState<'url' | 'upload'>('url');

  const handleImageUpload = useCallback(async (
    file: File,
    type: 'image' | 'avatar',
    activeTab: string,
    onSuccess: (url: string, type: 'image' | 'avatar') => void
  ) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      toast.error(`Invalid file type: ${file.type}. Only images are allowed.`);
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error(`File size (${(file.size / 1024 / 1024).toFixed(2)}MB) exceeds 5MB limit`);
      return;
    }

    if (file.size === 0) {
      toast.error('File is empty');
      return;
    }

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'admin-uploads');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const result = await response.json();

      if (!result.success || !result.url) {
        throw new Error(result.error || 'Upload succeeded but no URL returned');
      }

      if (type === 'image') {
        setImagePreview(result.url);
      } else {
        setAvatarPreview(result.url);
      }
      
      onSuccess(result.url, type);
      toast.success('Image uploaded successfully');
    } catch (error: any) {
      console.error('Image upload error:', error);
      toast.error(error.message || 'Failed to upload image. Please try again.');
    } finally {
      setUploadingImage(false);
    }
  }, []);

  const resetPreviews = useCallback(() => {
    setImagePreview('');
    setAvatarPreview('');
    setImageUploadMode('url');
    setAvatarUploadMode('url');
  }, []);

  const setPreviewsFromItem = useCallback((item: any, activeTab: string) => {
    if (activeTab === 'partners' && item.logo_url) {
      setImagePreview(item.logo_url);
      setImageUploadMode('url');
    } else if (item.image) {
      setImagePreview(item.image);
      setImageUploadMode('url');
    }
    if (activeTab === 'testimonials' && item.image) {
      setAvatarPreview(item.image);
      setAvatarUploadMode('url');
    } else if (item.avatar) {
      setAvatarPreview(item.avatar);
      setAvatarUploadMode('url');
    }
  }, []);

  return {
    uploadingImage,
    imagePreview,
    avatarPreview,
    imageUploadMode,
    avatarUploadMode,
    setImagePreview,
    setAvatarPreview,
    setImageUploadMode,
    setAvatarUploadMode,
    handleImageUpload,
    resetPreviews,
    setPreviewsFromItem,
  };
}
