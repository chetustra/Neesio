"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Upload, X, Check, Loader2, Play, Film } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [thumb, setThumb] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) return;

    setUploading(true);
    try {
      // 1. Upload Video
      const videoExt = file.name.split('.').pop();
      const videoPath = `${Math.random()}.${videoExt}`;
      const { data: videoData, error: videoError } = await supabase.storage
        .from('videos')
        .upload(videoPath, file);

      if (videoError) throw videoError;

      // 2. Upload Thumbnail
      let thumbUrl = "";
      if (thumb) {
        const thumbExt = thumb.name.split('.').pop();
        const thumbPath = `${Math.random()}.${thumbExt}`;
        const { data: thumbData, error: thumbError } = await supabase.storage
          .from('thumbnails')
          .upload(thumbPath, thumb);
        if (!thumbError) {
          const { data: { publicUrl } } = supabase.storage.from('thumbnails').getPublicUrl(thumbPath);
          thumbUrl = publicUrl;
        }
      }

      // 3. Save to DB
      const { data: { publicUrl: videoUrl } } = supabase.storage.from('videos').getPublicUrl(videoPath);

      const { error: dbError } = await supabase.from('videos').insert({
        title,
        description,
        video_url: videoUrl,
        thumbnail_url: thumbUrl,
      });

      if (dbError) throw dbError;

      setSuccess(true);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black italic uppercase mb-12">Studio Creator</h1>
        <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form fields... simplified for push */}
            <p className="text-gray-500">Upload UI active on local.</p>
        </form>
      </main>
    </div>
  );
}
